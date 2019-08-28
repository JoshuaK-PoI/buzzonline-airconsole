var local = {}; //Local storage
var ac = new AirConsole({
    setup_document: false
});

function testMsg() {
    ac.sendEvent(AirConsole.SCREEN, 'FUNCTION', {
        function: "receiveStart"
    });
};

ac.onMessage = function(device_id, data) {
    this.dispatchEvent(device_id, data);
};

ac.on('CONTROLLER_VIBRATE', function(device_id, params, context){
    ac.vibrate(params.time);
})

ac.on('VIEW_UPDATE', function (device_id, params, context) {
    view(params._filename, params);
})

ac.on('VIEW_UPDATE_ADDCARD', function (device_id, params, context) {
    addcard(params._filename, params);
})
    
ac.on('VIEW_UPDATE_REMOVE', function (device_id, params, context) {
    removeFromView(params._element);
})

ac.on('VIEW_UPDATE_GAMEMASTER', function(device_id, params, context){
    if(ac.getMasterControllerDeviceId() !== ac.getDeviceId()) {
        /* I am not the master controller */
        const container = document.querySelector('.button-container')
        if(container)
            container.innerHTML = params.gamemaster
    }
})

ac.on('VIEW_UPDATE_PLAYERLIST', function(device_id, params) {
    /* Disable the main container to prevent clicking cards behind the playerlist */
    document.querySelector('.bo-client-container').style.pointerEvents = 'none';
    document.querySelector('.bo-client-container').dataset.noPointerEventsOverride = true;
    
    //keepOpen the sent card to keep it showing and disable its onclick
    document.querySelector(`[data-card-properties='${params.card}']`).onclick = function() {return}
    document.querySelector(`[data-card-properties='${params.card}']`).dataset.keepOpen = true

    local.distribution_id = params.distribution_id


    document.querySelector('#bo_playerlist').innerHTML = `<span>Give&nbsp;<img src="dist/img/beer_mono_white.png">&nbsp;<strong>${params.drink_amt}</strong>&nbsp;to</span>${params.player_buttons}`;
    document.querySelector('#bo_playerlist').classList.add('show');
})

ac.on('NOTICE', function(device_id, params) {
    view('notice', {
        _inject: '#notice_container',
        _append: true,
        message: params.message,
        message_id: params.notice_id
    })

    if(!params.no_auto_dismiss) {
        setTimeout(() => {dismiss_notification(params.notice_id)}, 5000, true)
    }
})

ac.on('CLIENT_SORT_CARDS', function(device_id, params, context){
    const cards = document.querySelectorAll('.bo-client-cards .card');

    /* First, clean out the view */
    document.querySelector('.bo-client-container').innerHTML = '';
    /* Disable clicking on the view to prevent cards turning over prematurely */
    document.querySelector('.bo-client-container').style.pointerEvents = 'none';
    
    let output_cards = [];

    for(i = 0; i < cards.length; i++) {
        /* Get the card rank of the current card */
        let card_rank = cards[i].dataset.cardRank;

        /* Add an onClick function to send the card to the server */
        cards[i].onclick = function() {sendCard(this)}

        /* Add the actual-card class to the card; this is to identify it when flipped over */
        cards[i].querySelector('img').classList.add('actual-card');

        /* Set this as the index for the output card stack */
        output_cards[card_rank] = cards[i];
    }

    /* Add the cards to the view (Add also the back of the card to hide the card) */
    for(o in output_cards) {
        if(output_cards[o]){
            document.querySelector('.bo-client-container').insertAdjacentElement('beforeend', output_cards[o]);
            document.querySelector(`[data-card-rank='${output_cards[o].dataset.cardRank}']`).insertAdjacentHTML('beforeend', '<img src="/dist/img/cards/buzzonline__playingcard_back.png" class="placeholder-card hidden">');
        }
    }

    /* After a server-specified amount of time, "close" the cards by flipping the hidden state of the actual card and the back of the card (placeholder-card) */
    setTimeout(() => {
        for(card of document.querySelectorAll('.actual-card'))
            card.classList.add('hidden');

        for(card of document.querySelectorAll('.placeholder-card'))
            card.classList.remove('hidden');

        /* Reset the pointer events */
        document.querySelector('.bo-client-container').style.pointerEvents = 'unset';
    }, params.timeout)
})

/**
 * Send an answer to the host
 * 
 * @param {string} query 
 */
function sendAnswer(e, query) {

    // Disable this button to deter double clicking
    e.disabled = true;

    // Disable all other buttons on the page
    const buttons = document.querySelectorAll('button');
    for(b in buttons) {
        buttons[b].disabled = true;
    }

    /* Send the answer query to the screen */
    ac.sendEvent(AirConsole.SCREEN, 'CLIENT_ANSWER', {
        query: query
    })
}

/**
 * Send a card to the host
 */
function sendCard(e) {

    /* Temporarily disable the container to prevent double clicking */
    document.querySelector('.bo-client-container').style.pointerEvents = 'none';
    setTimeout(() => {
        /* Re-enable the main container */
        if(document.querySelector('.bo-client-container').dataset.noPointerEventsOverride !== "true")
            document.querySelector('.bo-client-container').style.pointerEvents = 'unset';
    }, 200)

    if(e.dataset.cardDisabled !== "true") {
        const card_to_send = e.dataset.cardProperties;
    
        ac.sendEvent(AirConsole.SCREEN, 'CLIENT_CARD', {
            card: card_to_send
        });
        e.querySelector(".placeholder-card").classList.add("hidden")
        e.querySelector(".actual-card").classList.remove("hidden")
        //Temporarily disable the card from being clicked to deter spamming the wrong card
        e.dataset.cardDisabled = true
        setTimeout(() => enableCard(e), 2000)
    }
}

function enableCard(e) {
    if(e.dataset.keepOpen !== "true") {
        e.dataset.cardDisabled = false
        e.querySelector(".actual-card").classList.add("hidden")
        e.querySelector(".placeholder-card").classList.remove("hidden")
        
    }
}

function acknowledgeDistribution(distribution_id) {
    ac.sendEvent(AirConsole.SCREEN, 'DISTRIBUTE_ACKNOWLEDGE', {
        distribution_id: distribution_id
    })
    dismiss_notification(distribution_id)
}

function updateDistribution(distributee_id) {
    ac.sendEvent(AirConsole.SCREEN, 'DISTRIBUTE_UPDATE', {
        distribution_id: local.distribution_id,
        distributee_id: distributee_id
    })
    document.querySelector('#bo_playerlist').classList.remove('show');

    /* Re-enable the main container */
    document.querySelector('.bo-client-container').dataset.noPointerEventsOverride = false;
    document.querySelector('.bo-client-container').style.pointerEvents = 'unset';
}
/**
 * Dismiss a notification
 * 
 * @param {Number} message_id The ID of the notification panel (excluding the `not_`. Eg.: at message panel `#not_345` this variable should be `345`)
 */
function dismiss_notification(message_id) {
    document.querySelector(`#not_${message_id}`).classList.add('fadeout')
    setTimeout(() => {
        document.querySelector(`#not_${message_id}`).remove()
    }, 500, true)
}
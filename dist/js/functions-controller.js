
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
    
})

ac.on('NOTICE', function(device_id, params) {
    view('notice', {
        _inject: '#notice_container',
        _append: true,
        message: params.message,
        message_id: params.notice_id
    })

    if(!params.no_auto_dismiss) {
        setTimeout(() => {
            document.querySelector(`#not_${params.notice_id}`).classList.add('fadeout')
            setTimeout(() => {
            document.querySelector(`#not_${params.notice_id}`).remove()
            }, 500, true)
        }, 5000, true)
    }
})
  
ac.on('CLIENT_SORT_CARDS', function(device_id, params, context){
    const cards = document.querySelectorAll('.bo-client-cards .card');

    /* First, clean out the view */
    document.querySelector('.bo-client-container').innerHTML = '';

    let output_cards = [];

    for(i = 0; i < cards.length; i++) {
        /* Get the card rank of the current card */
        let card_rank = cards[i].dataset.cardRank;

        /* Add an onClick function to send the card to the server */
        cards[i].onclick = function() { sendCard(this); }
        /* Set this as the index for the output card stack */
        output_cards[card_rank] = cards[i];
    }

    /* Add the cards to the view */
    for(o in output_cards) {
        if(output_cards[o])
            document.querySelector('.bo-client-container').insertAdjacentElement('beforeend', output_cards[o]);    
    }
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

    console.log('Sending answer to screen of ' + query + '...');
    /* Send the answer query to the screen */
    ac.sendEvent(AirConsole.SCREEN, 'CLIENT_ANSWER', {
        query: query
    })
}

/**
 * Send a card to the host
 */
function sendCard(e) {

    const card_to_send = e.dataset.cardProperties;

    ac.sendEvent(AirConsole.SCREEN, 'CLIENT_CARD', {
        card: card_to_send
    });
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
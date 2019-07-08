
/**
 * BuzzOnline - The AirConsole Adaptation
 *
 * Copyright (c) Power of Interest, 2019
 *
 *
 *
 * Screen API for BuzzOnline, the card game
 *
 * See https://github.com/JoshuaK-PoI/buzz-online-airconsole
 */

/* Init Airconsole and BuzzOnline objects */
const buzzonline = {}

// eslint-disable-next-line no-undef
ac = new AirConsole()

//Constant values
const PHASE_TIMEOUT = 1000




ac.onReady = function () {
  buzzonline.start()
}

/**
 * 
 * 
 * DEBUG: Test scripts here  
 * 
 * 
 * 
 */
 
if(window.self === window.top) {
    
}
/**
 * 
 * 
 * /DEBUG: /Test scripts here  
 * 
 * 
 * 
 */

/* Use the event-driven AirConsole approach to determine functions */
ac.onMessage = function (device_id, data) {
  this.dispatchEvent(device_id, data)
}

/* Screen updater */
ac.on('VIEW_UPDATE', (device_id, params) => {
  // eslint-disable-next-line no-undef
  view(params._filename, params)
})

ac.on('VIEW_UPDATE_REMOVE', (device_id, params) => {
  // eslint-disable-next-line no-undef
  removeFromView(params._element)
})

/* Active player updater */
ac.on('UPDATE_ACTIVE_PLAYER', (device_id, params) => {
  const chips = document.querySelectorAll('.chip')

  for (c in chips) {
    if(!chips[c].classList) { continue }

    chips[c].classList.remove('active')
    if(chips[c].id === `bo_playerTag_${params.device_id}`){
      chips[c].classList.add('active')
    }
  }
})

/* Drink amount updater */
ac.on('UPDATE_DRINK_AMT', (device_id, params) => {
  const drinks = document.querySelector('#drinks_'+params.player_id)
  const drinksIcon = document.querySelector('#icon_drinks_'+params.player_id)

  drinks.innerHTML = params.drinks
  drinksIcon.classList.add('drink-animation')

  setTimeout(() => {drinksIcon.classList.remove('drink-animation')}, 1000)
})

ac.on('NOTICE', function(device_id, params) {
  view('notice', {
    message: params.message
  })
})

buzzonline.init_ = function () {
  this.game_state = {
    rounds: 0,
    phase: 0,
    sub_phase: 0,
    option_joker: false,
    option_difficult_pyramid: false,
    players: {}
  }
}

/* Init buzzOnline game vars */
buzzonline.init_()

buzzonline.start = function () {
  /* Start the airconsole listener */
  ac.on('FUNCTION', (device_id, params) => {
    buzzonline.function[params.function](device_id, params)
  })

  this.startDeviceConnectionListener()
}

/* Internal functions */
buzzonline.startDeviceConnectionListener = function () {
  ac.onConnect = function (device_id) {
    buzzonline.deviceConnectionHandler(device_id)
  }

  ac.onDisconnect = function (device_id) {
    buzzonline.deviceDisconnectionHandler(device_id)
  }
}
/**
 * Handles newly incoming players.
 * 
 * @param {Number} device_id The ID of the connecting device
 * 
 * @returns null
 */
buzzonline.deviceConnectionHandler = function(device_id) {
  /* Store some player data */
  const nickname =        ac.getNickname(device_id)
  const profile_picture = ac.getProfilePicture(device_id)

  /* Send the start screen to the player (Either the master screen or the guest screen) */
  let options = {}
  
  /* Show player data on the screen */
  // eslint-disable-next-line no-undef
  ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
    _filename:                  'component_player_tag',
    _inject:                    '#bo_playerDrawer',
    _append:                    true,
    'player.id':                device_id,
    'player.name':              nickname,
    'player.profile_picture':   profile_picture,
    'player.drink_amount':      0,
    'player.active':            ''
  })
  /* Note: Gamemasters might be updated after a first gamemaster has entered the game.
      For example, if a Hero joins after the game has launched to the startup screen. 
      In that case, update the screen and all devices to reflect the new gamemaster 
      and revoke the original gamemaster's buttons to avoid confusion. */
  if (device_id === ac.getMasterControllerDeviceId()) {
    buzzonline.setGameMaster(device_id)
  } else {
    const game_master = buzzonline.game_state.game_master_nickname || 'The gamemaster'

    options = {
      _filename:              'start',
      'btn.class':            'btn btn-outlined',
      'btn.disabled':         'disabled="disabled"',
      'btn.text':             `${game_master} will start the game`,
      'master.hide_elements': 'hidden',
      'btn.text_smaller':     'btn-text-smaller'
    }
  }
  ac.sendEvent(device_id, 'VIEW_UPDATE', options)
}

buzzonline.deviceDisconnectionHandler = function(device_id) {
  /* Get the player ID from the game data */
  const player_id = getPlayer(device_id)

  if (typeof player_id !== "undefined") {  
    /* Remove player from the game data */
    delete buzzonline.game_state.players[player_id]

    /* Remove the player from the manifest if they leave in an active game. Cards in their hand become inaccessible. */
    delete buzzonline.game_state.manifest[player_id]
  } else {
    /* Do we need to elect a new gamemaster? (The game has not started yet) */
    if(device_id = buzzonline.game_state.game_master_device_id) {
      buzzonline.setGameMaster(ac.getMasterControllerDeviceId())
    }
  }

  /* Remove player from the screen */
  // eslint-disable-next-line no-undef
  ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE_REMOVE', {
    _element: `#bo_playerTag_${device_id}`
  })
}

/**
 * 
 * 
 * FUNCTIONS
 * 
 * Screen-controller interacting functions
 * These functions are called by a controller, complete with all expected parameters.
 * 
 * 
 */
buzzonline.function = {}

/**
 * Change option called by the game master
 * 
 * @param device_id The controller calling the function
 * @param params Parameters to change
 */
buzzonline.function.masterChangeOption = function (device_id, option_data) {
  /* Change a game option */
  if (option_data.option_joker) {
    buzzonline.game_state.option_joker = option_data.option_joker
  }
  if (option_data.option_difficult_pyramid) {
    buzzonline.game_state.option_difficult_pyramid = option_data.option_difficult_pyramid
  }
}


/**
 * Starts the buzzOnline Game
 * 
 * @param {int} device_id The controller calling the function
 * @param {Object} params Optional parameters to send with the request
 */

buzzonline.function.startGame = function(device_id, params) {
  
  /* First check if the request was indeed sent by the gamemaster */
  if(device_id === ac.getMasterControllerDeviceId()) {

    /* Connect all players to the game */
    buzzonline.setPlayers()

    /* Generate a new deck of cards */
    buzzonline.game_state.card_stack = cardStack.generate(false)

    /*  Generate a manifest of players.
        This manifest is meant to be the reference for all joined players (when a round begins), and will only be updated at the end of a round.
        This is necessary to prevent players joined during a round to break the game (e.g. by having too little cards at the end of Phase 1.)
    */
    buzzonline.game_state.manifest = [...buzzonline.game_state.players]
    
    /* Initiate a new round */
    buzzonline.game_state.rounds++
    buzzonline.game_state.phase = buzzonline.game_state.sub_phase = 1

    /* Start the game handlers. */
    buzzonline.phase.initHandler({reset_players: true})
    buzzonline.controllerInteraction.initHandler()
    return
  } else {
    console.warn('Device requesting startGame is not the master controller. Aborting...')
  }
}

buzzonline.setPlayers = function() {

  /* Activate all players currently connected. */
  ac.setActivePlayers()
  const devices = ac.getActivePlayerDeviceIds()

  for(device_id in devices) {
    this.setPlayer(devices[device_id])
  }
}

buzzonline.setPlayer = function(device_id) {
  const player_id =       getPlayer(device_id)
  const nickname =        ac.getNickname(device_id)

  if(typeof player_id == "undefined" ) {
    console.warn('Error: Could not generate a player ID.')
    setTimeout(() => {buzzonline.setPlayer(device_id); return}, 300, device_id)
    return;
  }
  
  if(typeof buzzonline.game_state.players[player_id] !== "undefined") {
    console.warn(`Error: Player ID ${player_id} is already taken by device ${buzzonline.game_state.players[player_id].device_id}`)
    setTimeout(() => {buzzonline.setPlayer(device_id); return}, 300, device_id)
    return;
  }

  buzzonline.game_state.players[player_id] = {
    nickname:         nickname,
    player_id:        player_id,
    device_id:        device_id,
    drink_amount:     0,
    cards:            []
  }
}

buzzonline.setGameMaster = function(device_id) {
  const nickname = ac.getNickname(device_id)
  buzzonline.game_state.game_master_nickname = nickname
  buzzonline.game_state.game_master_device_id = device_id

  ac.broadcastEvent('VIEW_UPDATE_GAMEMASTER', {
    'gamemaster': `<button class="btn btn-outlined btn-text-smaller">${nickname} will start the game</button>`
  })
  
  ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
    _inject: '#start_gamemaster_name',
    _content: nickname
  })

  ac.sendEvent(device_id, 'VIEW_UPDATE', {
    _filename:              'start',
    'btn.class':            'btn btn-primary',
    'btn.disabled':         null,
    'btn.text':             'Start Game',
    'master.hide_elements': null,
    'btn.text_smaller':     null
  })
}
/**
 * 
 * 
 * PHASE HANDLER
 * 
 * This handler drives the core of the game. These phases will set up questions and answers, and send the right data to the right controller.
 * Interaction with the controller is handled by the controllerInteractionHandler.
 * 
 * 
 */
buzzonline.phase = {}


buzzonline.phase.initHandler = function(options = {}) {

  if(options.next_phase) {
    buzzonline.game_state.phase++
  }

  /* Track the current player (for turn-based card dealing) */
  if(options.reset_players) {
    buzzonline.game_state.current_player = 0
  }

  buzzonline.phase[`phase_${buzzonline.game_state.phase}`].handler()
}

/* PHASE 1 Handler functions */
buzzonline.phase.phase_1 = {}

buzzonline.phase.phase_1.handler = function() {
  /* Send the question for the current phase and sub_phase to the active controller and screen. */
  let current_player  = buzzonline.game_state.current_player
  let manifest       = buzzonline.game_state.manifest[current_player]
    
  /* If all players have played, start a new phase */
  if(current_player >= buzzonline.game_state.manifest.length) {
    buzzonline.phase.next()
    return
  } else {

    /* Skip if manifest index is empty */
    if(typeof manifest === "undefined"){
      buzzonline.phase.answered()
      return
    }
    
    /* Generate the question and answer for this phase/sub_phase */
    buzzonline.game_state.current_answer = buzzonline.phase.creator[`phase_${buzzonline.game_state.phase}`](buzzonline.game_state.sub_phase, cardStack.deal())

    /* Send out the correct screen to every player */
    for(manifestPlayer in buzzonline.game_state.manifest) {
      let current_device_id = buzzonline.game_state.manifest[manifestPlayer].device_id
      if(current_device_id == manifest.device_id) {
        /* Current player, send the game screen */
        ac.sendEvent(current_device_id, 'VIEW_UPDATE', {
          _filename: `component_phase_${buzzonline.game_state.phase}_${buzzonline.game_state.sub_phase}`,
          'player.name': manifest.nickname,
          _enlarge_view: true
        })
        ac.sendEvent('CONTROLLER_VIBRATE', {
          time: 100
        })
      } else {
        /* Waiting player, send the wait screen */
        ac.sendEvent(current_device_id, 'VIEW_UPDATE', {
          _filename: 'client_wait',
          _no_fadeout: true,
          'game.current_player': manifest.nickname
        })
      }
    }

    /* Send the screen equivalent, and update the screen to reflect the new active player. */
    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: `host_phase_${buzzonline.game_state.phase}_${buzzonline.game_state.sub_phase}`,
      'player.name': manifest.nickname
    })

    ac.sendEvent(AirConsole.SCREEN, 'UPDATE_ACTIVE_PLAYER', {
      'device_id': manifest.device_id
    })
  }
}

/* PHASE 2 Handler functions */
buzzonline.phase.phase_2 = {}

buzzonline.phase.phase_2.handler = function() {
  ac.broadcastEvent('CLIENT_SORT_CARDS')

  ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
    _filename: 'host_pyramid_setup'
  })

  /* Keep track of the current card we're on */
  buzzonline.game_state.current_card = 0

  /* Start the dealing phase */
  buzzonline.phase.phase_2.deal();

}

buzzonline.phase.phase_2.deal = function() {

  if(buzzonline.game_state.current_card < 15) {
    /* Start by adding the card to the view */
    const card = cardStack.deal(true)
    const current_card = buzzonline.gameState.current_card++

    view('pyr_card', {
      _inject: `#pyr_card_${current_card}`,
      'card.src': card.html,
      'card.value': card.value,
      'card.fnr': current_card
    })
  }
}


buzzonline.phase.answered = function() {
  buzzonline.game_state.current_player++

  /* Call the handler to init the next phase. */
  buzzonline.phase.initHandler({reset_players: false})
  return
}

buzzonline.phase.next = function() {
  
  switch(buzzonline.game_state.phase){
    case 1:
      /* Up the phase by 1 */
      if(buzzonline.game_state.sub_phase < 4) {
        buzzonline.game_state.sub_phase++
      } else {
        buzzonline.phase.initHandler({next_phase: true, reset_players: true})
        return
      }
      break
    case 2:
      break
    case 3:
      break
  }

  /* Init a new phase */
  buzzonline.phase.initHandler({reset_players: true})
  return
}


/**
 * 
 * 
 * CONTROLLER INTERACTION HANDLER
 * 
 * This handler interfaces with the controller and the phaseHandler, to handle client interactions and input, 
 * and to send these on to the phaseHandler.
 * 
 * 
 */
buzzonline.controllerInteraction = {}


buzzonline.controllerInteraction.initHandler = function(){
  /* Start the listener for controller interaction */
  ac.on('CLIENT_ANSWER', (device_id, params) => {

    /* Check the playerlist if this controller is supposed to answer */
    const player = buzzonline.game_state.manifest[getPlayer(device_id)]

    if(buzzonline.game_state.manifest[buzzonline.game_state.current_player].device_id !== device_id) {
      console.warn(`Wrong player answered; expected answer from device ${buzzonline.game_state.manifest[buzzonline.game_state.current_player].device_id}, got answer from device ${device_id}`)
      return false
    }

    /* Verify the answer with the phase handler. */
    const phase = `phase_${buzzonline.game_state.phase}_${buzzonline.game_state.sub_phase}`
    const result = buzzonline.phase.evaluator[phase](params.query, buzzonline.game_state.current_answer, player.cards)
    const card = cardStack.deal(true)

    /* Send the result to the screen and the player. */
    if(result) {
      result_file = 'client_right_answer'
    } else {
      result_file = 'client_wrong_answer'
      buzzonline.drink(getPlayer(device_id))
    }

    ac.sendEvent(device_id, 'VIEW_UPDATE_ADDCARD', {
      _filename: result_file,
      _restore_view: true,
      'card.img_src': card.html,
      'card.rank': card.rank,
      'card.properties': `${card.suit}_${card.value}`
    })

    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: result_file,
      'card.img_src': card.html
    })

    /* Move the card to the players' hand (if in Phase 1) */
    if(buzzonline.game_state.phase == 1) {
      buzzonline.game_state.manifest[getPlayer(device_id)].cards.push(card)
    }

    /* Call the continuation handler to start the next player or phase, with a `PHASE_TIMEOUT` second delay so the current player can see their result. */
    setTimeout(() => {
      buzzonline.phase.answered()
    }, PHASE_TIMEOUT)

    return true
  })

  ac.on('CLIENT_CARD', (device_id, params) => {
    console.log('Received client card with data ', params)

    /* Cards can only be handled in Game Phase 2 */
    if(buzzonline.game_state.phase !== 2) { return }

    const player = buzzonline.game_state.manifest[getPlayer(device_id)]

    // Check if the current card is of equal value to the sent card */
    const current_card = document.querySelector(`#pyr_card_fnr_${buzzonline.game_state.current_card}`);
    const player_card = params.card.split('_');

    // If the card is not equal; the player is wrong and has to drink 1.
    if(current_card.dataset.cardValue != player_card[1]) {  
      buzzonline.drink(getPlayer(device_id))
      buzzonline.notice({
        device_id: device_id,
        message_screen: `${player.nickname} has chosen the wrong card and has to drink 1!`,
        message_player: `Wrong card chosen! Drink 1.` 
      })
    }

  })
}

buzzonline.drink = function(player_id) {
  buzzonline.game_state.manifest[player_id].drink_amount++;
  ac.sendEvent(AirConsole.SCREEN, 'UPDATE_DRINK_AMT', {
    player_id: device_id,
    drinks: buzzonline.game_state.manifest[player_id].drink_amount
  })
}

buzzonline.notice = function(args) {
  ac.sendEvent(AirConsole.SCREEN, 'NOTICE', {
    message: args.message_screen
  })

  if(args.device_id) {
    ac.sendEvent(args.device_id, 'NOTICE', {
      message: args.message_player || args.message_screen
    })
  }
  
}

buzzonline.phase.creator = {}

/**
 *
 * CREATORS - Create a new game phase
 *
 * @param {int} sub_phase The current sub phase the game is in.
 * @param {object} card The player's card.
 * 
 * @returns {string} correct_answer
 */
buzzonline.phase.creator.phase_1 = function(sub_phase, card) {

  let correct_answer

  switch(sub_phase) {
    case 1:
      correct_answer = card.color
      break
    case 2:
    case 3:
      correct_answer = card.value
      break
    case 4:
      correct_answer = card.suit
      break
  }
  return correct_answer
}

/**
 *
 * EVALS - Evaluates player answers
 *
 */
buzzonline.phase.evaluator = {}

buzzonline.phase.evaluator.phase_1_1 = function(player_answer, correct_answer, player_cards = null){
    /* Phase 1.1: Player must choose Red or Black */
    return player_answer === correct_answer
}

buzzonline.phase.evaluator.phase_1_2 = function(player_answer, correct_answer, player_cards) {
    /* Phase 1.2: Player must choose if the provided card is higher or lower than their current card */
    var player_card = parseInt(player_cards[Object.keys(player_cards)[0]].value)
    var correct_answer = parseInt(correct_answer)
    return (
      (player_card > correct_answer && player_answer == "lower") ||
      (player_card < correct_answer && player_answer == "higher")
    )
}

buzzonline.phase.evaluator.phase_1_3 = function(player_answer, correct_answer, player_cards) {
    /* Phase 1.3: Player must choose if the provided card has a value inside or outside the values of their current card */
    correct_answer = parseInt(correct_answer)
    let current_values = []

    /* First, get the values of the current two cards in the player's hand */
    for(let card in player_cards) {current_values.push(parseInt(player_cards[card].value))}

    /* Next, sort the array from lowest to highest */
    current_values = current_values.sort(function(a, b){return a - b})

    /* If the value of the provided card is equal to one of the cards in the player's hand, the answer is always wrong */
    if(current_values.includes(correct_answer)) return false

    /* Then, evaluate if the number is between the specified values */
    if(current_values[0] < correct_answer && correct_answer < current_values[1]) {
      return player_answer == 'inside'
    } else {
      return player_answer == 'outside'
    }
}

buzzonline.phase.evaluator.phase_1_4 = function(player_answer, correct_answer, player_cards) {
    /* Phase 1.4: Player must choose if the suit of the provided card is already in their hand */

    var current_suits = []

    /* First, extract all the suits of the cards the player has in their hand */
    for(var card in player_cards) {
      if(current_suits.indexOf(player_cards[card].suit) == -1) {
        current_suits.push(player_cards[card].suit)
      }
    }

    /* Then, check if the suit of the provided card was in the player's hand already */
    var in_hand = false
    if(current_suits.indexOf(correct_answer) !== -1){
      in_hand = true
    }

    /* Last, evaluate if the player had the same answer as in_hand */
    return player_answer == in_hand

    //@TODO: Write a function for evaluating Disco
}

buzzonline.phase.evaluator.phase_2 = function() {

}

/**
 * 
 * 
 * CARD STACK
 * 
 * Handler for the card stack. 
 * Generates and shuffles cards, handles dealing and dispatching cards, and contains all relevant representations.
 * 
 * 
 */


var cardStack = {}


/**
 * Generates a new deck of cards.
 * 
 * @param {boolean} jokers Add Jokers to the deck (Non-implemented function, todo)
 */
cardStack.generate = function(jokers) {
  var stack = []

  /* Build the main card stack */
  for(var suit in card_stack.suits) {
    for(var value in card_stack.values){
      stack.push(`${card_stack.suits[suit]}.${card_stack.values[value]}`)
    }
  }

  /* Add joker cards if specified in the settings */
  if(jokers){
    stack.push(`jokerred.0`)
    stack.push(`jokerblack.0`)
  }

  /* Shuffle and convert the deck */
  stack = cardStack.convert(stack)
  return stack
}

/**
 * Expands cards into objects, including all necessary parameters and representations.
 * 
 * @param {array} stack A non-converted deck of cards.
 * 
 * @returns Object stack_object
 */
cardStack.convert = function(stack) {
  let stack_object = {}

  /* Shuffle the cards */
  stack = cardStack.shuffle(stack)

  /* Convert to an object with properties suit, color and value */
  for(card in stack) {
    const card_name = stack[card].split('.')
    const color = ['hearts', 'diamonds'].indexOf(card_name[0]) !== -1 ? 'red' : 'black'

    /* Set the card object */
    stack_object[stack[card]] = {
      color: color,
      suit: card_name[0],
      value: card_name[1],
      html: `buzzonline__playingcard_${card_stack.imgRepresentation[card_name[0]]}${card_name[1]}.png`,
      rank: cardStack.calculateRank(card_name[0], card_name[1])
    }
  }
  return stack_object
}

/** 
    Rank calculation is needed for auto-sorting of cards at the end of phase 1.

    Rank is based on the card's value, with 2 being the lowest and A the highest.
    After that, equal values are ranked on suit using the sRank object below.
    This gives every card a unique rank, ranging from 2 of clubs (rank 1) to Ace of hearts (rank 52).
  
    @param {string} suit The suit of the card.
    @param {int} value The value of the card.

    @returns {int} rank
*/
cardStack.calculateRank = function(suit, value) {
  suits_rank = {
    'clubs': 1,
    'diamonds': 2,
    'spades': 3,
    'hearts': 4
  }

  return (4 * (value - 2)) + suits_rank[suit]
}


/**
 * Shuffles the cards.
 * 
 * @param {object} stack A stage 2 (converted) deck of cards.
 * 
 * @returns Object stack
 */
cardStack.shuffle = function(stack){
    let m = stack.length, i

    while(m) {
        i = Math.floor(Math.random() * m--);
        [stack[m], stack[i]] = [stack[i], stack[m]];
    }
    
    return stack
}

/**
 * Deal a card.
 * 
 * @param {boolean} delete_card Removes the card from the deck (needed when transferring to a players' hand.) Default 'false'
 * 
 * @returns {Object} card
 */
cardStack.deal = function(delete_card = false) {
  
  /* Deal the card to the calling function */
  const card = buzzonline.game_state.card_stack[Object.keys(buzzonline.game_state.card_stack)[0]]
  card.name = Object.keys(buzzonline.game_state.card_stack)[0]

  /* Optional: delete the card from the stack */
  if(delete_card) delete buzzonline.game_state.card_stack[Object.keys(buzzonline.game_state.card_stack)[0]]

  /* Pass back the card */
  return card
}

var card_stack = {}

card_stack.suits = [
    'hearts',
    'diamonds',
    'spades',
    'clubs'
]

card_stack.values = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
]

card_stack.imgRepresentation = {
    "spades": "S",
    "hearts": "H",
    "clubs": "C",
    "diamonds": "D",
    "jokerred": "JR",
    "jokerblack": "JB"
}

/**
 * 
 * 
 * 
 * 
 * HELPER FUNCTIONS
 * 
 * 
 * 
 * 
 */

 /**
  * Converts a device ID to a player ID.
  * @param {int} device_id 
  */
 function getPlayer(device_id) {
    return ac.convertDeviceIdToPlayerNumber(device_id)
 }
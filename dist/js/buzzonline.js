
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
  /* Spawn 9 nametags (Max for this game) */
  for(i = 0; i < 9; i++) {
    view('component_player_tag', {
      _inject: '#bo_playerDrawer',
      _append: true,
      'player.id': i,
      'player.name': 'ABCDEFGHIJKLMNOPQ'+i,
      'player.drinkAmt': Math.floor(Math.random() * 100),
      'player.profilePicture': 'dist/img/default_pp.png',
      'player.active': Math.floor(Math.random() * 10) > 5 ? 'active' : ''
    })

    
  }
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
ac.onMessage = function (deviceId, data) {
  this.dispatchEvent(deviceId, data)
}

/* Screen updater */
ac.on('VIEW_UPDATE', (deviceId, params) => {
  // eslint-disable-next-line no-undef
  view(params._filename, params)
})

ac.on('VIEW_UPDATE_REMOVE', (deviceId, params) => {
  // eslint-disable-next-line no-undef
  removeFromView(params._element)
})

/* Active player updater */
ac.on('UPDATE_ACTIVE_PLAYER', (deviceId, params) => {
  const chips = document.querySelectorAll('.chip');

  for (c in chips) {
    if(!chips[c].classList) continue;

    chips[c].classList.remove('active');

    if(chips[c].id === `bo_playerTag_${params.playerId}`)
      chips[c].classList.add('active');
  }
})

/* Drink amount updater */
ac.on('UPDATE_DRINK_AMT', (deviceId, params) => {
  const drinks = document.querySelector('#drinks_'+params.playerId);
  const drinksIcon = document.querySelector('#icon_drinks_'+params.playerId);

  drinks.innerHTML = params.drinks;
  drinksIcon.classList.add('drink-animation');

  setTimeout(() => {drinksIcon.classList.remove('drink-animation')}, 1000);
})

buzzonline.init_ = function () {
  this.gameState = {
    rounds: 0,
    phase: 0,
    subPhase: 0,
    optionJoker: false,
    optionDifficultPyramid: false,
    players: {}
  }
}

/* Init buzzOnline game vars */
buzzonline.init_()

buzzonline.start = function () {
  /* Start the airconsole listener */

  ac.on('FUNCTION', (deviceId, params) => {
    buzzonline.function[params.function](deviceId, params)
  })

  //Start the connection listener
  this.startDeviceConnectionListener()

}

/* Internal functions */
buzzonline.startDeviceConnectionListener = function () {
  ac.onConnect = function (deviceId) {
    /* Store some player data */

    var playerId =          getPlayer(deviceId)
    const nickname =        ac.getNickname(deviceId)
    const profilePicture =  ac.getProfilePicture(deviceId)
  
    /* Ensure a player ID is set */
    if(typeof playerId === "undefined") {
      ac.setActivePlayers();
      playerId = getPlayer(deviceId)
      if(typeof playerId === "undefined") {
        throw new TypeError('Could not assign a player ID')
      }
    }

    buzzonline.gameState.players[playerId] = {
      nickname:       nickname,
      playerId:       playerId,
      deviceId:       deviceId,
      profilePicture: profilePicture,
      drinkAmt:       0,
      cards:          []
    }

    /* Show player data on the screen */
    // eslint-disable-next-line no-undef
    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename:                'component_player_tag',
      _inject:                  '#bo_playerDrawer',
      _append:                  true,
      'player.id':              playerId,
      'player.name':            nickname,
      'player.profilePicture':  profilePicture,
      'player.drinkAmt':        0,
      'player.active':          ''
    })

    /* Send the start screen to the player (Either the master screen or the guest screen) */
    const gameMaster = typeof buzzonline.gameState.gameMasterNickname === 'string' ? buzzonline.gameState.gameMasterNickname : 'The gamemaster'
    let options = {}

    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _inject: '#start_gamemaster_name',
      _content: `${gameMaster}`
    })

    if (deviceId === ac.getMasterControllerDeviceId()) {
      buzzonline.gameState.gameMaster = playerId;
      buzzonline.gameState.gameMasterNickname = nickname
      options = {
        _filename:              'start',
        'btn.class':            'btn btn-primary',
        'btn.disabled':         null,
        'btn.text':             'Start Game',
        'master.hide_elements': null,
        'btn.text_smaller':     null
      }
    } else {
      options = {
        _filename:              'start',
        'btn.class':            'btn btn-outlined',
        'btn.disabled':         'disabled="disabled"',
        'btn.text':             `${gameMaster} will start the game`,
        'master.hide_elements': 'hidden',
        'btn.text_smaller':     'btn-text-smaller'
      }
    }

    ac.sendEvent(deviceId, 'VIEW_UPDATE', options)
  }

  ac.onDisconnect = function (deviceId) {
    /* Get the player ID from the game data */
    const playerId = getPlayer(deviceId)

    if (typeof playerId === "undefined") {
      throw new TypeError(`Error: Player ID is undefined. Device id is ${deviceId}. Current state of game is ${JSON.stringify(buzzonline.gameState)}`)
    }

    /* Remove player from the screen */
    // eslint-disable-next-line no-undef
    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE_REMOVE', {
      _element: `#bo_playerTag_${playerId}`
    })

    /* Remove player from the game data */
    delete buzzonline.gameState.players[playerId]
  }
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
 * @param deviceId The controller calling the function
 * @param params Parameters to change
 */
buzzonline.function.masterChangeOption = function (deviceId, optionData) {
  /* Change a game option */
  if (optionData.optionJoker) {
    buzzonline.gameState.optionJoker = optionData.optionJoker
  }

  if (optionData.optionDifficultPyramid) {
    buzzonline.gameState.optionDifficultPyramid = optionData.optionDifficultPyramid
  }
}


/**
 * Starts the buzzOnline Game
 * 
 * @param deviceId The controller calling the function
 * @param params Optional parameters to send with the request
 */

buzzonline.function.startGame = function(deviceId, params) {
  
  /* First check if the request was indeed sent by the gamemaster */
  if(deviceId === ac.getMasterControllerDeviceId()) {

    /* Generate a new deck of cards */
    buzzonline.gameState.cardStack = card_stack.generate(false);

    /*  Generate a manifest of players.
        This manifest is meant to be the reference for all joined players (when a round begins), and will only be updated at the end of a round.
        This is necessary to prevent players joined during a round to break the game (e.g. by having too little cards at the end of Phase 1.)
    */
    buzzonline.gameState.manifest = [];
    for(player in buzzonline.gameState.players) {
      buzzonline.gameState.manifest.push(buzzonline.gameState.players[player]);
    }
    
    /* Initiate a new round */
    buzzonline.gameState.rounds++;

    buzzonline.gameState.phase = buzzonline.gameState.subPhase = 1;

    /* Call the phase controller to handle the game from here on. */
    buzzonline.phase.initHandler();

    /* Start the answering handler (Only needs to be called once) */
    buzzonline.controllerInteraction.initHandler()
    return

  } else {
    console.warn('Device requesting startGame is not the master controller. Aborting...');
  }
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
buzzonline.phase = {};


buzzonline.phase.initHandler = function() {

  /* Create a player list from the manifest to track which players have completed the phase (Phase 1 only) */
  buzzonline.gameState.currentPlayer = 0

  /* Start the phaseHandler */
  buzzonline.phase.handler()
}

buzzonline.phase.handler = function() {
  /* Send the question for the current phase and subphase to the active controller and screen. */
  let currentPlayer = buzzonline.gameState.currentPlayer;
  let manifest = buzzonline.gameState.manifest[currentPlayer];
  
  console.log(buzzonline.gameState);
  
  /* If all players have played, start a new phase */
  if(currentPlayer >= buzzonline.gameState.manifest.length) {
    buzzonline.phase.next()
    return
  } else {
    const currentPlayerDeviceId = manifest.deviceId
    const currentPlayerNickname = manifest.nickname
    const componentCurrentPhase = `component_phase_${buzzonline.gameState.phase}_${buzzonline.gameState.subPhase}`
    const hostCurrentPhase      = `host_phase_${buzzonline.gameState.phase}_${buzzonline.gameState.subPhase}`
    
    /* Generate the question and answer for this phase/subphase */
    buzzonline.phase.generateQuestionAnswer(buzzonline.gameState.phase, buzzonline.gameState.subPhase)

    /* Send out the correct screen to every player */
    for(manifestPlayer in buzzonline.gameState.manifest) {
      let manifestCurrent = buzzonline.gameState.manifest[manifestPlayer]

      if(manifestCurrent.deviceId == currentPlayerDeviceId) {
        /* Current player, send the game screen */
        ac.sendEvent(manifestCurrent.deviceId, 'VIEW_UPDATE', {
          _filename: componentCurrentPhase,
          'player.name': currentPlayerNickname,
          _enlarge_view: true
        })
      } else {
        /* Waiting player, send the wait screen */
        ac.sendEvent(manifestCurrent.deviceId, 'VIEW_UPDATE', {
          _filename: 'client_wait',
          _no_fadeout: true,
          'game.currentPlayer': currentPlayerNickname
        })
      }
    }

    /* Send the screen equivalent, and update the screen to reflect the new active player. */
    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: hostCurrentPhase,
      'player.name': currentPlayerNickname
    })

    ac.sendEvent(AirConsole.SCREEN, 'UPDATE_ACTIVE_PLAYER', {
      'playerId': manifest.playerId
    })
  }
}

buzzonline.phase.generateQuestionAnswer = function(phase, subPhase) {
  const phaseC = `phase_${phase}`
  buzzonline.gameState.currentAnswer = buzzonline.phase.creator[phaseC](subPhase, card_stack.deal())
}

buzzonline.phase.answered = function() {
  console.log('Player answered, continuing...')

  /* Set the next current player */
  buzzonline.gameState.currentPlayer++

  /* Call the handler to init the next phase. */
  buzzonline.phase.handler()
  return
}

buzzonline.phase.next = function() {
  
  switch(buzzonline.gameState.phase){
    case 1:
      /* Up the phase by 1 */
      if(buzzonline.gameState.subPhase < 4) {
        buzzonline.gameState.subPhase++
      }
      break;
    case 2:
      break;
    case 3:
      break;
  }

  /* Init a new phase */
  buzzonline.phase.initHandler()
  return
}

buzzonline.phase.creator = {}

/**
 *
 * CREATORS - Create a new game phase
 *
 * @param {int} subPhase The current sub phase the game is in.
 * @param {object} card The player's card.
 * 
 * @returns {string} correctAnswer
 */
buzzonline.phase.creator.phase_1 = function(subPhase, card) {

  let correctAnswer;

  switch(subPhase) {
    case 1:
      correctAnswer = card.color
      break
    case 2:
    case 3:
      correctAnswer = card.value
      break
    case 4:
      correctAnswer = card.suit
      break
  }

  return correctAnswer
}

buzzonline.phase.creator.phase_2 = function() {

}

/**
 *
 * EVALS - Evaluates player answers
 *
 */
buzzonline.phase.evaluator = {};

buzzonline.phase.evaluator.phase_1_1 = function(playerAnswer, correctAnswer, playerCards = null){
    /* Phase 1.1: Player must choose Red or Black */
    return playerAnswer === correctAnswer;
}

buzzonline.phase.evaluator.phase_1_2 = function(playerAnswer, correctAnswer, playerCards) {
    /* Phase 1.2: Player must choose if the provided card is higher or lower than their current card */
    var playerCard = parseInt(playerCards[Object.keys(playerCards)[0]].value);
    var correctAnswer = parseInt(correctAnswer);
    return (
        (playerCard > correctAnswer && playerAnswer == "lower") ||
        (playerCard < correctAnswer && playerAnswer == "higher")
    );
}

buzzonline.phase.evaluator.phase_1_3 = function(playerAnswer, correctAnswer, playerCards) {
    /* Phase 1.3: Player must choose if the provided card has a value inside or outside the values of their current card */
    correctAnswer = parseInt(correctAnswer);
    var currValues = [];

    /* First, get the values of the current two cards in the player's hand */
    for(var card in playerCards) currValues.push(parseInt(playerCards[card].value));

    /* Next, sort the array from lowest to highest */
    currValues = currValues.sort(function(a, b){return a - b});

    /* If the value of the provided card is equal to one of the cards in the player's hand, the answer is always wrong */
    if(currValues.includes(correctAnswer)) return false;

    /* Then, evaluate if the number is between the specified values */
    if(currValues[0] < correctAnswer && correctAnswer < currValues[1]) {
        return playerAnswer == 'inside';
    } else {
        return playerAnswer == 'outside';
    }
}

buzzonline.phase.evaluator.phase_1_4 = function(playerAnswer, correctAnswer, playerCards) {
    /* Phase 1.4: Player must choose if the suit of the provided card is already in their hand */

    var currSuits = [];

    /* First, extract all the suits of the cards the player has in their hand */
    for(var card in playerCards) {
        if(currSuits.indexOf(playerCards[card].suit) == -1) {
            currSuits.push(playerCards[card].suit);
        }
    }

    /* Then, check if the suit of the provided card was in the player's hand already */
    var in_hand = false;
    if(currSuits.indexOf(correctAnswer) !== -1){
        in_hand = true;
    }

    /* Last, evaluate if the player had the same answer as in_hand */
    return playerAnswer == in_hand;

    //@TODO: Write a function for evaluating Disco
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
buzzonline.controllerInteraction = {};


buzzonline.controllerInteraction.initHandler = function(){
  /* Start the listener for controller interaction */
  ac.on('CLIENT_ANSWER', (deviceId, params) => {

    /* Check the playerlist if this controller is supposed to answer */
    const player = buzzonline.gameState.manifest[getPlayer(deviceId)];

    if(buzzonline.gameState.manifest[buzzonline.gameState.currentPlayer].deviceId !== deviceId) {
      console.warn(`Wrong player answered; expected answer from device ${buzzonline.gameState.manifest[buzzonline.gameState.currentPlayer].deviceId}, got answer from device ${deviceId}`)
      return false
    }

    /* Verify the answer with the phase handler. */
    const playerAnswer = params.query;
    const correctAnswer = buzzonline.gameState.currentAnswer;
    const playerCards = player.cards;

    const phase = `phase_${buzzonline.gameState.phase}_${buzzonline.gameState.subPhase}`

    const result = buzzonline.phase.evaluator[phase](playerAnswer, correctAnswer, playerCards)

    const card = card_stack.deal(true)

    /* Send the result to the screen and the player. */
    if(result) {
      resultFile = 'client_right_answer'
    } else {
      resultFile = 'client_wrong_answer'
      buzzonline.gameState.manifest[getPlayer(deviceId)].drinkAmt++
      ac.sendEvent(AirConsole.SCREEN, 'UPDATE_DRINK_AMT', {
        playerId: getPlayer(deviceId),
        drinks: buzzonline.gameState.manifest[getPlayer(deviceId)].drinkAmt
      })
    }

    ac.sendEvent(deviceId, 'VIEW_UPDATE_ADDCARD', {
      _filename: resultFile,
      _restore_view: true,
      'card.img_src': card.html
    })


    ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: resultFile,
      'card.img_src': card.html
    })

    /* Move the card to the players' hand (if in Phase 1) */
    buzzonline.gameState.manifest[getPlayer(deviceId)].cards.push(card)

    /* Call the continuation handler to start the next player or phase. */
    setTimeout(() => {
      buzzonline.phase.answered()
    }, 2000)

    return true
  })
}


/**
 * 
 * 
 * CARD STACK
 * 
 * Handler for the card stack. 
 * Generates and shuffles cards; handles dealing and dispatching cards, and contains all relevant representations.
 * 
 * 
 */


var card_stack = {};


/**
 * Generates a new deck of cards.
 * 
 * @param {boolean} jokers Add Jokers to the deck (Non-implemented function, todo)
 */
card_stack.generate = function(jokers) {
  var stack = [];

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
  stack = card_stack.convert(stack)
  return stack
}

/**
 * Expands cards into objects, including all necessary parameters and representations.
 * 
 * @param {array} stack A non-converted deck of cards.
 * 
 * @returns Object stack_object
 */
card_stack.convert = function(stack) {
    var stack_object = {}

    /* Shuffle the cards */
    stack = card_stack.shuffle(stack)

    /* Convert to an object with properties suit, color and value */
    for(card in stack) {
        var card_name = stack[card].split('.'), color

        /* Determine the color */
        if(['hearts', 'diamonds'].indexOf(card_name[0]) !== -1){
            color = 'red'
        } else {
            color = 'black'
        }

        /* Set the card object */
        stack_object[stack[card]] = {
            color: color,
            suit: card_name[0],
            value: card_name[1],
            html: `buzzonline__playingcard_${card_stack.imgRepresentation[card_name[0]]}${card_name[1]}.png`,
            rank: card_stack.calculateRank(card_name[0], card_name[1])
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
card_stack.calculateRank = function(suit, value) {
  sRank = {
    'clubs': 1,
    'diamonds': 2,
    'spades': 3,
    'hearts': 4
  }

  return (4 * (value - 2)) + sRank[suit]
}

/**
 * Shuffles the cards.
 * 
 * @param {object} stack A stage 2 (converted) deck of cards.
 * 
 * @returns Object stack
 */
card_stack.shuffle = function(stack){
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
 * @param {boolean} deleteCard Removes the card from the deck (needed when transferring to a players' hand.) Default 'false'
 * 
 * @returns {Object} card
 */
card_stack.deal = function(deleteCard = false) {
  
  /* Deal the card to the calling function */
  var card = buzzonline.gameState.cardStack[Object.keys(buzzonline.gameState.cardStack)[0]]
  card.name = Object.keys(buzzonline.gameState.cardStack)[0]

  /* Optional: delete the card from the stack */
  if(deleteCard) delete buzzonline.gameState.cardStack[Object.keys(buzzonline.gameState.cardStack)[0]]

  /* Pass back the card */
  return card
}

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
  * @param {int} deviceId 
  */
 function getPlayer(deviceId) {
    return ac.convertDeviceIdToPlayerNumber(deviceId)
 }
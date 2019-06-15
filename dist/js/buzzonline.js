/**
 * BuzzOnline - The AirConsole Adaptation
 *
 * Copyright (c) Power of Interest, 2019
 *
 *
 *
 * Buzzonline Screen API for BuzzOnline, the card game
 *
 * See https://github.com/JoshuaK-PoI/buzz-online-airconsole
 */


/* Init Airconsole and BuzzOnline objects */
const buzzonline = {}

// eslint-disable-next-line no-undef
buzzonline.ac = new AirConsole()

buzzonline.ac.onReady = function () {
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


/* Use the event-driven AirConsole approach to determine functions */
buzzonline.ac.onMessage = function (deviceId, data) {
  this.dispatchEvent(deviceId, data)
}

/* Screen updater */
buzzonline.ac.on('VIEW_UPDATE', (deviceId, params) => {
  // eslint-disable-next-line no-undef
  view(params._filename, params)
})
buzzonline.ac.on('VIEW_UPDATE_REMOVE', (deviceId, params) => {
  // eslint-disable-next-line no-undef
  removeFromView(params._element)
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

  this.ac.on('FUNCTION', (deviceId, params) => {
    buzzonline.function[params.function](deviceId, params)
  })

  this.startDeviceConnectionListener()
}

/* BuzzOnline functions */
buzzonline.function = {}

buzzonline.function.masterChangeOption = function (deviceId, optionData) {
  /* Change a game option */
  if (optionData.optionJoker) {
    buzzonline.gameState.optionJoker = optionData.optionJoker
  }

  if (optionData.optionDifficultPyramid) {
    buzzonline.gameState.optionDifficultPyramid = optionData.optionDifficultPyramid
  }
}

/* Internal functions */
buzzonline.startDeviceConnectionListener = function () {
  this.ac.onConnect = function (deviceId) {
    /* Store some player data */

    var playerId = buzzonline.ac.convertDeviceIdToPlayerNumber(deviceId)
    const nickname = buzzonline.ac.getNickname(deviceId)
    const profilePicture = buzzonline.ac.getProfilePicture(deviceId)
  
    /* Ensure a player ID is set */
    if(typeof playerId === "undefined") {
      buzzonline.ac.setActivePlayers();
      playerId = buzzonline.ac.convertDeviceIdToPlayerNumber(deviceId)
      if(typeof playerId === "undefined") {
        throw new TypeError('Could not assign a player ID')
      }
    }

    buzzonline.gameState.players[deviceId] = {
      nickname: nickname,
      playerId: playerId,
      profilePicture: profilePicture
    }

    /* Show player data on the screen */
    // eslint-disable-next-line no-undef
    buzzonline.ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: 'component_player_tag',
      _inject: '#bo_playerDrawer',
      _append: true,
      'player.id': deviceId,
      'player.name': nickname,
      'player.profilePicture': profilePicture,
      'player.drinkAmt': 0,
      'player.active': ''
    })

    /* Send the start screen to the player */
    const gameMaster = typeof buzzonline.gameState.gameMaster === 'string' ? buzzonline.gameState.gameMaster : 'The gamemaster'

    let options = {}

    if (deviceId === buzzonline.ac.getMasterControllerDeviceId()) {
      buzzonline.gameState.gameMaster = nickname
      options = {
        _filename: 'start',
        'btn.class': 'btn btn-primary',
        'btn.disabled': '',
        'btn.text': 'Start Game',
        'btn.hide': ''
      }
    } else {
      options = {
        _filename: 'start',
        'btn.class': 'btn btn-outline-primary',
        'btn.disabled': 'disabled="disabled"',
        'btn.text': `${gameMaster} will start the game`,
        'btn.hide': 'hidden'
      }
    }

    buzzonline.ac.sendEvent(deviceId, 'VIEW_UPDATE', options)
  }

  this.ac.onDisconnect = function (deviceId) {
    /* Get the player ID from the game data */
    const playerId = buzzonline.gameState.players[deviceId].plyerId;

    if (typeof playerId === "undefined") {
      throw new TypeError(`Error: Player ID is undefined. ${JSON.stringify(buzzonline.gameState.players[deviceId])}`)
    }

    /* Remove player from the screen */
    // eslint-disable-next-line no-undef
    buzzonline.ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE_REMOVE', {
      _element: `#bo_playerTag_${playerId}`
    })

    /* Remove player from the game data */
    delete buzzonline.gameState.players[deviceId]
  }
}

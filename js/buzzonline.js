
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

    buzzonline.gameState.players[deviceId] = {
      playerId: buzzonline.ac.convertDeviceIdToPlayerNumber(deviceId),
      nickname: buzzonline.ac.getNickname(deviceId),
      profilePicture: buzzonline.ac.getProfilePicture(deviceId)
    }

    /* Show player data on the screen */
    // eslint-disable-next-line no-undef
    buzzonline.ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE', {
      _filename: 'component_player_tag',
      _inject: '#bo_playerDrawer',
      _append: true,
      'player.id': deviceId,
      'player.name': buzzonline.ac.getNickname(deviceId),
      'player.profilePicture': buzzonline.ac.getProfilePicture(deviceId)
    })

    /* Send the start screen to the player */
    const gameMaster = typeof buzzonline.gameState.gameMaster === 'string' ? buzzonline.gameState.gameMaster : 'the gamemaster'

    let options = {
      _filename: 'start',
      'btn.class': 'btn btn-outline-primary',
      'btn.disabled': 'disabled="disabled"',
      'btn.text': `Wait until ${gameMaster} starts the game`
    }

    if (deviceId === buzzonline.ac.getMasterControllerDeviceId()) {
      buzzonline.gameState.gameMaster = buzzonline.ac.getNickname(deviceId)
      options = {
        _filename: 'start',
        'btn.class': 'btn btn-primary',
        'btn.disabled': '',
        'btn.text': 'Start Game'
      }
    }

    buzzonline.ac.sendEvent(deviceId, 'VIEW_UPDATE', options)
  }

  this.ac.onDisconnect = function (deviceId) {
    /* Remove player from the screen */
    // eslint-disable-next-line no-undef
    buzzonline.ac.sendEvent(AirConsole.SCREEN, 'VIEW_UPDATE_REMOVE', {
      _element: `#bo_playerTag_${deviceId}`
    })

    /* Remove player from the game data */
    delete buzzonline.gameState.players[deviceId]
  }
}

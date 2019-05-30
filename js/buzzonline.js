
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

buzzonline.init_ = function () {
  this.gameState = {
    rounds: 0,
    phase: 0,
    subPhase: 0,
    optionJoker: false,
    optionDifficultPyramid: false
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
    buzzonline.ac.sendEvent(deviceId, 'VIEW_UPDATE', {
      _filename: 'start'
    })
  }
}

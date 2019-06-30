
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

ac.on('VIEW_UPDATE', function (deviceId, params, context) {
    view(params._filename, params);
})

ac.on('VIEW_UPDATE_ADDCARD', function (deviceId, params, context) {
    addcard(params._filename, params);
})
    
ac.on('VIEW_UPDATE_REMOVE', function (deviceId, params, context) {
    removeFromView(params._element);
})


/**
 * Game functions - CONTROLLER ONLY
 */



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
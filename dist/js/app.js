!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.__DEBUG_MODE=!1,e._PHASE_TIMEOUT=2e3,e.N_PLAYERCONNECTED=201,e.N_PLAYERDISCONNECTED=202,e.N_PLAYERNOTIFICATION=203,e.SUIT_H="hearts",e.SUIT_S="spades",e.SUIT_C="clubs",e.SUIT_D="diamonds",e.SUIT_B="blackjoker",e.SUIT_R="redjoker",e.COLO_R="red",e.COLO_B="black",e.VALU_J=14,e.HTML_BOCARD="buzzonline__playingcard_",e.METH_GET="GET",e.RETY_ARRAYBUFFER="arraybuffer",e.RETY_TEXT="text",e.CONS_ERR_AUDIO_NOT_INSTANTIATABLE="Could not instantiate audio engine. Audio is not supported.",e.PRLD_IMG=["buzzonline-Logo4x.png","cards/buzzonline__playingcard_back.png","cards/buzzonline__playingcard_C2.png","cards/buzzonline__playingcard_C3.png","cards/buzzonline__playingcard_C4.png","cards/buzzonline__playingcard_C5.png","cards/buzzonline__playingcard_C6.png","cards/buzzonline__playingcard_C7.png","cards/buzzonline__playingcard_C8.png","cards/buzzonline__playingcard_C9.png","cards/buzzonline__playingcard_C10.png","cards/buzzonline__playingcard_C11.png","cards/buzzonline__playingcard_C12.png","cards/buzzonline__playingcard_C13.png","cards/buzzonline__playingcard_C14.png","cards/buzzonline__playingcard_D2.png","cards/buzzonline__playingcard_D3.png","cards/buzzonline__playingcard_D4.png","cards/buzzonline__playingcard_D5.png","cards/buzzonline__playingcard_D6.png","cards/buzzonline__playingcard_D7.png","cards/buzzonline__playingcard_D8.png","cards/buzzonline__playingcard_D9.png","cards/buzzonline__playingcard_D10.png","cards/buzzonline__playingcard_D11.png","cards/buzzonline__playingcard_D12.png","cards/buzzonline__playingcard_D13.png","cards/buzzonline__playingcard_D14.png","cards/buzzonline__playingcard_H2.png","cards/buzzonline__playingcard_H3.png","cards/buzzonline__playingcard_H4.png","cards/buzzonline__playingcard_H5.png","cards/buzzonline__playingcard_H6.png","cards/buzzonline__playingcard_H7.png","cards/buzzonline__playingcard_H8.png","cards/buzzonline__playingcard_H9.png","cards/buzzonline__playingcard_H10.png","cards/buzzonline__playingcard_H11.png","cards/buzzonline__playingcard_H12.png","cards/buzzonline__playingcard_H13.png","cards/buzzonline__playingcard_H14.png","cards/buzzonline__playingcard_S2.png","cards/buzzonline__playingcard_S3.png","cards/buzzonline__playingcard_S4.png","cards/buzzonline__playingcard_S5.png","cards/buzzonline__playingcard_S6.png","cards/buzzonline__playingcard_S7.png","cards/buzzonline__playingcard_S8.png","cards/buzzonline__playingcard_S9.png","cards/buzzonline__playingcard_S10.png","cards/buzzonline__playingcard_S11.png","cards/buzzonline__playingcard_S12.png","cards/buzzonline__playingcard_S13.png","cards/buzzonline__playingcard_S14.png"],e.PRLD_AUD=["playercorrect.wav","assignplayer.wav","completedistribution.wav","playermissed.wav","playerwrong.wav","startdistribution.wav","bgmusic.wav"]},function(n,e,t){"use strict";var r=this&&this.__values||function(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0});var o=t(6),a=t(0),i=function(){function n(n){this.observers=[],this._isMobile=n,this._controllerFunctions=new o.default,this.airConsole=new AirConsole}return n.prototype.attach=function(n){console.log("Attached observer."),this.observers.push(n)},n.prototype.detach=function(n){console.log("Detached an observer.");var e=this.observers.indexOf(n);this.observers.splice(e,1)},n.prototype.notify=function(n){var e,t;try{for(var o=r(this.observers),a=o.next();!a.done;a=o.next())a.value.update(n)}catch(n){e={error:n}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},n.prototype.airConsoleStartListeners=function(){this.start_device_connection_listener(),this.start_device_message_listener()},n.prototype.start_device_message_listener=function(){var n=this;this.airConsole.onMessage=function(e,t){switch(t.message_id){case"JOINED_AS_SPECTATOR":n._controllerFunctions.join(!0);break;case"JOIN_GAME":n._controllerFunctions.join(!1);break;case"CONTROLLER_VIBRATE":navigator.vibrate(t.params.time);break;case"VIEW_UPDATE_ADDCARD":break;case"PLAYER_SHOW_CARD_DRAWER":n._controllerFunctions.showCardDrawer(!0);break;case"PLAYER_HIDE_CARD_DRAWER":n._controllerFunctions.showCardDrawer(!1);break;case"VIEW_UPDATE_GAMEMASTER":case"VIEW_UPDATE_PLAYERLIST":case"CLOSE_PLAYERLIST":case"CLOSE_NOTICE":case"CLIENT_SORT_CARDS":case"VIEW_UPDATE":case"VIEW_UPDATE_REMOVE":case"UPDATE_DRINK_AMT":case"NOTICE":case"UPDATE_ACTIVE_PLAYER":case"CLIENT_REQUEST_VIEW":case"DISTRIBUTE_UPDATE":case"DISTRIBUTE_ACKNOWLEDGE":case"FUNCTION":case"CLIENT_ANSWER":case"CLIENT_CARD":break;default:throw new Error("Error: Unknown function message received in Airconsole Adapter listener: "+t.message_id)}}},n.prototype.start_device_connection_listener=function(){var n=this;this.start_device_message_listener(),this.airConsole.onConnect=function(e){return n.device_connection_handler(e)},this.airConsole.onDisconnect=function(e){return n.device_disconnection_handler(e)}},n.prototype.device_connection_handler=function(n){console.log("Device connected:",this.airConsole.getNickname(n)),this.notify(a.N_PLAYERCONNECTED)},n.prototype.device_disconnection_handler=function(n){console.log("Device disconnected:",this.airConsole.getNickname(n)),this.notify(a.N_PLAYERDISCONNECTED)},n.prototype.device_send_start=function(n){throw new Error("Method not implemented.")},n}();e.default=i;var c=function(){function n(){}return n.prototype.send=function(n,e){},n.prototype.broadcast=function(n){},n}();e.AirConsoleFunctions=c},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(3),o=t(0),a=t(1);window.onload=function(n){(new i).load()};var i=function(){function n(){}return n.prototype.load=function(){var n=this;(new r.default).load(o.PRLD_IMG,o.PRLD_AUD).then((function(e){return n.init(e)}))},n.prototype.init=function(n){this.adapter=new a.default(!1),this.adapter.attach(this),this.adapter.start_device_connection_listener()},n.prototype.start=function(){throw new Error("Method not implemented.")},n.prototype.update=function(n){console.log("BuzzonlineObserver states: "+n.toString())},n}()},function(n,e,t){"use strict";var r=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function i(n){try{s(r.next(n))}catch(n){a(n)}}function c(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}s((r=r.apply(n,e||[])).next())}))},o=this&&this.__generator||function(n,e){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(n,i)}catch(n){a=[6,n],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},a=this&&this.__values||function(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0});var i=t(4),c=function(){function n(){this._toLoad=this._loaded=0}return n.prototype.load=function(n,e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return this._toLoad=n.length+e.length,[4,this._loadSounds(e).catch((function(n){throw n}))];case 1:return t=r.sent(),[4,this._loadImages(n).catch((function(n){throw n}))];case 2:return[2,{imageBuffer:r.sent(),audioBuffer:t}]}}))}))},n.prototype._loadSounds=function(n){return r(this,void 0,void 0,(function(){var e,t,r,c,s,u,l,_,d,p;return o(this,(function(o){switch(o.label){case 0:e=Array(),o.label=1;case 1:o.trys.push([1,6,7,8]),t=a(n),r=t.next(),o.label=2;case 2:return r.done?[3,5]:(c=r.value,s=c.split("/").pop(),u=e,l=s,[4,(new i.default).preload(c).catch((function(n){throw n}))]);case 3:u[l]=o.sent(),this._updateProgressBar(),o.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return _=o.sent(),d={error:_},[3,8];case 7:try{r&&!r.done&&(p=t.return)&&p.call(t)}finally{if(d)throw d.error}return[7];case 8:return[2,e]}}))}))},n.prototype._loadImages=function(n){return r(this,void 0,void 0,(function(){var e,t,r,i,c,s,u,l,_,d;return o(this,(function(o){switch(o.label){case 0:e=Array(),o.label=1;case 1:o.trys.push([1,6,7,8]),t=a(n),r=t.next(),o.label=2;case 2:return r.done?[3,5]:(i=r.value,c=i.split("/").pop(),s=e,u=c,[4,this._loadImage(i).catch((function(n){throw n}))]);case 3:s[u]=o.sent(),this._updateProgressBar(),o.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return l=o.sent(),_={error:l},[3,8];case 7:try{r&&!r.done&&(d=t.return)&&d.call(t)}finally{if(_)throw _.error}return[7];case 8:return[2,e]}}))}))},n.prototype._loadImage=function(n){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,new Promise((function(e,t){var r=new Image;r.src="./dist/img/"+n,r.onerror=function(n){return t(n)},r.onload=function(n){return e(r)}}))]}))}))},n.prototype._updateProgressBar=function(){this._loaded++,document.querySelector(".loader-progress--bar").style.width=this._loaded/this._toLoad*100+"%",document.querySelector(".loader-text").innerHTML="Loading... "+this._loaded+"/"+this._toLoad},n}();e.default=c},function(n,e,t){"use strict";var r=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function i(n){try{s(r.next(n))}catch(n){a(n)}}function c(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}s((r=r.apply(n,e||[])).next())}))},o=this&&this.__generator||function(n,e){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(n,i)}catch(n){a=[6,n],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=t(5),i=function(){function n(){this._audioContext=new AudioContext,this._audioGain=this._audioContext.createGain()}return n.prototype.preload=function(n){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,(new a.default).fetch({method:"GET",uri:"./dist/audio/"+n,responseType:"arraybuffer"}).catch((function(n){throw n}))];case 1:return e=t.sent(),[4,this._audioContext.decodeAudioData(e)];case 2:return[2,t.sent()]}}))}))},n.prototype.play=function(n,e,t){void 0===e&&(e=!1),void 0===t&&(t=.2);var r=this._audioContext.createBufferSource();r.buffer=n,r.connect(this._audioGain),this._audioGain.connect(this._audioContext.destination),this._audioGain.gain.setValueAtTime(t,this._audioContext.currentTime),r.loop=e,r.start(0)},n}();e.default=i},function(n,e,t){"use strict";var r=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(o,a){function i(n){try{s(r.next(n))}catch(n){a(n)}}function c(n){try{s(r.throw(n))}catch(n){a(n)}}function s(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}s((r=r.apply(n,e||[])).next())}))},o=this&&this.__generator||function(n,e){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(n,i)}catch(n){a=[6,n],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function n(){}return n.prototype.fetch=function(n){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,new Promise((function(e,t){var r=new XMLHttpRequest;r.responseType=n.responseType,r.open(n.method,n.uri,!0),r.send(),r.onreadystatechange=function(){r.readyState===r.DONE&&(r.status>=200&&r.status<300?e("text"==n.responseType?r.responseText:r.response):t(r.statusText))}}))]}))}))},n}();e.default=a},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(1),o=function(){function n(){this.__acf=new r.AirConsoleFunctions,this.__ls=localStorage}return n.prototype.join=function(n){this.__ls.setItem("__bo_game_param_spectator",n.toString())},n.prototype.showCardDrawer=function(n){if("false"!=this.__ls.getItem("__bo_game_param_spectator")){var e=document.querySelector(".bo-client-cards");n?e.classList.remove("hidden"):e.classList.add("hidden")}},n.prototype.viewUpdateGamemaster=function(){"true"==this.__ls.getItem("__bo_game_param_master_controller")&&this.__acf.send(AirConsole.SCREEN,{message_id:"CLIENT_REQUEST_VIEW"})},n}();e.default=o}]);
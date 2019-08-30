const RDYSTATE_READY = 4
const HTTPRESPONSE_OK = 200

/* General helper functions */
// eslint-disable-next-line no-unused-vars
function view(file, params = {}) {

  if(typeof(file) !== "undefined") {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `dist/templates/_${file}.html?_${new Date().getTime()}`, true)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === RDYSTATE_READY && xhr.status === HTTPRESPONSE_OK) {
        const res = buildTemplate(this.responseText, params)

        let querySelector = '#bo_viewport'

        if (params._inject) {
          querySelector = params._inject
        }
        
        if (params._enlarge_view) {
          enlargeView();
        }
        if (params._restore_view) {
          restoreView();
        }

        if (params._append) {
          document.querySelector(querySelector).insertAdjacentHTML('beforeend', res)
        } else {
          /* Fade animation if view gets replaced */
          if(querySelector == '#bo_viewport' && !params._no_fadeout) {
            document.querySelector(querySelector).classList.add('fadeout');
            setTimeout(() => {
              document.querySelector(querySelector).innerHTML = res;
              document.querySelector(querySelector).classList.remove('fadeout');
              document.querySelector(querySelector).classList.add('fadein');
              document.querySelector(querySelector).classList.remove('fadein');
            }, 200);
          } else {
            document.querySelector(querySelector).innerHTML = res
          }
        }
      }
    }
  } else {
    // No file, assume _inject and _content in params:
    if(typeof(params._inject) == 'undefined' || typeof(params._content) == 'undefined') {
      throw new TypeError('Missing data for content replacement!')
    }

    if (params._append) {
      document.querySelector(params._inject).insertAdjacentHTML('beforeend', params._content)
    } else {
      document.querySelector(params._inject).innerHTML = params._content
    }
  }
}

function addcard(file, params = {}) {
  
  /* Send data to the view */
  view(file, params)
  /* Update the card drawer */
  document.querySelector('.bo-client-cards')
  .insertAdjacentHTML('beforeend', `<div class="card" id="card_${params["card.rank"]}" data-card-rank="${params["card.rank"]}" 
    data-card-properties="${params["card.properties"]}"><img src="/dist/img/cards/${params["card.img_src"]}" alt="card"></div>`)
}

function enlargeView() {
  document.querySelector('.bo-client-container').classList.add('smaller');
  document.querySelector('.bo-client-cards').classList.add('larger');
}

function restoreView() {
  document.querySelector('.bo-client-container').classList.remove('smaller');
  document.querySelector('.bo-client-cards').classList.remove('larger');
}

function buildTemplate(file, params) {
  if (typeof params === 'object') {
    for (const key in params) {
      file = file.replace(new RegExp(`{${key}}`, 'g'), params[key])
    }
  }

  return file
}

// eslint-disable-next-line no-unused-vars
function removeFromView(element) {
  element = document.querySelector(element)
  element.parentNode.removeChild(element)
}

/**
 * Image preloader
 * 
 * Checks when all images are loaded; can be tied into a client readout
 */
var preloader = {};

/**
 * Image bank
 * Pull images from here.
 */
var image_bank = {};

/**
 * Number of assets to load
 */
preloader.to_load = 0;

/**
 * Number of assets currently loaded
 */
preloader.loaded = 0;

/**
 * Check if the preloader is done
 */
preloader.done = false;
preloader.onloaded = function() {


    /**
     * Re-enable screen input
     */
    document.querySelector('body').style.pointerEvents = 'unset';

    /**
     * Hide the loader
     */
    document.querySelector('.loader-container').classList.add('hidden');

    /**
     * Show the container
     */
    document.querySelector('.container').classList.remove('hidden');
    if(document.querySelector('.bo-player-drawer'))
      document.querySelector('.bo-player-drawer').classList.remove('hidden');
      
    /** Load the master scripts */
    __master.load()
}

/**
 * Load all required images into the client's memory
 * Assumes root directory is `/dist/img/`
 * 
 * @param {Array} images All images to be preloaded
 */
preloader.loadImages = function(images) {
    preloader.to_load = images.length;

    for(i in images) {
        let current_image = images[i];
        let image = new Image();

        image.src = `/dist/img/${current_image}`;

        /* Check when the image is done loading */
        image.onload = function() {
            preloader.loaded++;
            document.querySelector('.loader-progress--bar').style.width = (100 * (preloader.loaded / preloader.to_load)) + '%';
            document.querySelector('.loader-text').innerHTML = `Loading... ${preloader.loaded}/${preloader.to_load}`;
            image_bank += image;
            if(preloader.loaded == preloader.to_load)
                preloader.onloaded();
        }
    }
}

window.onload = function() {
    /**
     * Disable any screen input while the document is loading
     */
    document.querySelector('body').style.pointerEvents = 'none';

    /**
     * Show the loader
     */
    document.querySelector('.loader-container').classList.remove('hidden');

    /**
     * Preload images
     */
    preloader.loadImages([
        "buzzonline-Logo4x.png",
        "cards/buzzonline__playingcard_back.png",
        "cards/buzzonline__playingcard_C2.png",
        "cards/buzzonline__playingcard_C3.png",
        "cards/buzzonline__playingcard_C4.png",
        "cards/buzzonline__playingcard_C5.png",
        "cards/buzzonline__playingcard_C6.png",
        "cards/buzzonline__playingcard_C7.png",
        "cards/buzzonline__playingcard_C8.png",
        "cards/buzzonline__playingcard_C9.png",
        "cards/buzzonline__playingcard_C10.png",
        "cards/buzzonline__playingcard_C11.png",
        "cards/buzzonline__playingcard_C12.png",
        "cards/buzzonline__playingcard_C13.png",
        "cards/buzzonline__playingcard_C14.png",
        "cards/buzzonline__playingcard_D2.png",
        "cards/buzzonline__playingcard_D3.png",
        "cards/buzzonline__playingcard_D4.png",
        "cards/buzzonline__playingcard_D5.png",
        "cards/buzzonline__playingcard_D6.png",
        "cards/buzzonline__playingcard_D7.png",
        "cards/buzzonline__playingcard_D8.png",
        "cards/buzzonline__playingcard_D9.png",
        "cards/buzzonline__playingcard_D10.png",
        "cards/buzzonline__playingcard_D11.png",
        "cards/buzzonline__playingcard_D12.png",
        "cards/buzzonline__playingcard_D13.png",
        "cards/buzzonline__playingcard_D14.png",
        "cards/buzzonline__playingcard_H2.png",
        "cards/buzzonline__playingcard_H3.png",
        "cards/buzzonline__playingcard_H4.png",
        "cards/buzzonline__playingcard_H5.png",
        "cards/buzzonline__playingcard_H6.png",
        "cards/buzzonline__playingcard_H7.png",
        "cards/buzzonline__playingcard_H8.png",
        "cards/buzzonline__playingcard_H9.png",
        "cards/buzzonline__playingcard_H10.png",
        "cards/buzzonline__playingcard_H11.png",
        "cards/buzzonline__playingcard_H12.png",
        "cards/buzzonline__playingcard_H13.png",
        "cards/buzzonline__playingcard_H14.png",
        "cards/buzzonline__playingcard_S2.png",
        "cards/buzzonline__playingcard_S3.png",
        "cards/buzzonline__playingcard_S4.png",
        "cards/buzzonline__playingcard_S5.png",
        "cards/buzzonline__playingcard_S6.png",
        "cards/buzzonline__playingcard_S7.png",
        "cards/buzzonline__playingcard_S8.png",
        "cards/buzzonline__playingcard_S9.png",
        "cards/buzzonline__playingcard_S10.png",
        "cards/buzzonline__playingcard_S11.png",
        "cards/buzzonline__playingcard_S12.png",
        "cards/buzzonline__playingcard_S13.png",
        "cards/buzzonline__playingcard_S14.png"
    ])
}
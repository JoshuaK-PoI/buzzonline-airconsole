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
  document.querySelector('.bo-client-cards').insertAdjacentHTML('beforeend', `<div class="card"><img src="/dist/img/cards/${params["card.img_src"]}" alt="card"></div>`)
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
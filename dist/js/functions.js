const RDYSTATE_READY = 4
const HTTPRESPONSE_OK = 200


/* General helper functions */
// eslint-disable-next-line no-unused-vars
function view(file, params = {}) {
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

      if (params._append) {
        document.querySelector(querySelector).insertAdjacentHTML('beforeend', res)
      } else {
        document.querySelector(querySelector).innerHTML = res
      }
    }
  }
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

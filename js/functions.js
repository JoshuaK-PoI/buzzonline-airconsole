const RDYSTATE_READY = 4
const HTTPRESPONSE_OK = 200

const xhr = new XMLHttpRequest()

/* General helper functions */
// eslint-disable-next-line no-unused-vars
function view(file, params = {}, callback) {
  xhr.open('GET', `dist/templates/_${file}.html`, true)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === RDYSTATE_READY && xhr.status === HTTPRESPONSE_OK) {
      const res = buildTemplate(this.responseText, params)

      let querySelector = '#bo_viewport'

      if (params.inject) {
        querySelector = params.inject
      }

      document.querySelector(querySelector).innerHTML = res
      callback()
    }
  }
}

function buildTemplate(file, params) {
  if (typeof params === 'object') {
    for (const key in params) {
      if (params[key]) {
        file = file.replace(new RegExp(`{${key}}`, 'g'), params[key])
      }
    }
  }

  return file
}

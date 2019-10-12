import Http from "./buzzonline_http";
import { ScreenHandlerOptions } from "./buzzonline_interfaces";

export default class ScreenHandler {
    async show(options: ScreenHandlerOptions) {
        if(typeof(options.file) !== "undefined") {
            const template = await new Http().fetch({
                method: "GET",
                uri: `dist/templates/_${options.file}.html?_${new Date().getTime()}`,
                responseType: "text"
            });

            const res = this.buildTemplate(template, options.params)
            let querySelector = '#bo_viewport'
            if (options.params._inject)
                querySelector = options.params._inject

            if (options.params._enlarge_view)
                this._enlargeView();

            if (options.params._restore_view)
                this._restoreView();


            if (options.params._append) {
                document.querySelector(querySelector).insertAdjacentHTML('beforeend', res)
            } else {
                /* Fade animation if view gets replaced */
                if(querySelector == '#bo_viewport' && !options.params._no_fadeout) {
                    document.querySelector(querySelector).classList.add('fadeout');
                    setTimeout(() => {
                        document.querySelector(querySelector).innerHTML = res;
                        setTimeout(() => {
                            document.querySelector(querySelector).classList.remove('fadeout');
                        }, 100)
                    }, 200)
                } else {
                    document.querySelector(querySelector).innerHTML = res
                }
            }
          } else {
            // No file, assume _inject and _content in options.params:
            if(typeof(options.params._inject) == 'undefined' || typeof(options.params._content) == 'undefined') {
              throw new TypeError('Missing data for content replacement!')
            }

            if (options.params._append) {
              document.querySelector(options.params._inject).insertAdjacentHTML('beforeend', options.params._content)
            } else {
              document.querySelector(options.params._inject).innerHTML = options.params._content
            }
          }

    }

    private _enlargeView() {
        document.querySelector('.bo-client-container').classList.add('smaller');
        document.querySelector('.bo-client-cards').classList.add('larger');
    }

    private _restoreView() {
        document.querySelector('.bo-client-container').classList.remove('smaller');
        document.querySelector('.bo-client-cards').classList.remove('larger');
    }

    buildTemplate(file: string, params: { [x: string]: any; }) {
        if (typeof params === 'object') {
          for (const key in params) {
            file = file.replace(new RegExp(`{${key}}`, 'g'), params[key])
          }
        }
        return file
      }
}
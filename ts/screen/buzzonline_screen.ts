import Http from "./buzzonline_http";
import { ScreenHandlerOptions } from "./buzzonline_interfaces";
import * as _v from "./buzzonline_vars";

export default class ScreenHandler {

    /**
     * Show the requested view. To use all parameters, use the `show` function.
     * 
     * @param {string} file The name of the screen file
     */
    public view(file: string): void {
        console.log("Showing " + file + "...");
        this.show({
            file: file,
            params: {
                _content:       "",
                _append:        false,
                _no_fadeout:    false,
                _enlarge_view:  false,
                _restore_view:  false
            }
        });
    }

    /**
     * Show the requested view file with optional parameters
     * 
     * @param {ScreenHandlerOptions} options Screen handler options
     */
    async show(options: ScreenHandlerOptions): Promise<void> {
        if(typeof(options.file) !== "undefined") {
            const template = await new Http().fetch({
                method: _v.METH_GET,
                uri: `./dist/templates/_${options.file}.html?_${new Date().getTime()}`,
                responseType: _v.RETY_TEXT
            });

            const res = this.buildTemplate(template, options.params)
            let querySelector = options.params._inject ?? '#bo_viewport';

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
            if(typeof(options.params._inject) == 'undefined' || typeof(options.params._content) == 'undefined')
              throw new Error('Missing data for content replacement!')

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
            for (const key in params)
                file = file.replace(new RegExp(`{${key}}`, 'g'), params[key]);
        }
        return file;
    }
}
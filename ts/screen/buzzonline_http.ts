import { HttpOptions } from "./buzzonline_interfaces";

export default class Http {

    /**
     * Fetches a file from the server
     * 
     * @param {HttpOptions} options HTTP options: `responseType` {XMLHttpRequestResponseType}, `method` {string}, `uri`: {string}
     */
    public async fetch(options: HttpOptions): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = options.responseType;
            xhr.open(options.method, options.uri, true);
            xhr.send();

            xhr.onreadystatechange = () => {
                if(xhr.readyState !== xhr.DONE) return;
                if(xhr.status >= 200 && xhr.status < 300)
                    resolve(options.responseType == "text" ? xhr.responseText : xhr.response);
                else
                    reject(xhr.statusText);
            }
        });
    }
}
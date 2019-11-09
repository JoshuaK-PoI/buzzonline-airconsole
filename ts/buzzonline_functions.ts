import Http from "./buzzonline_http";

export default class Functions {
    
    /**
     * View {View}
     * Fetch a view file from the server
     * 
     * 
     * @param {T} params Parameters for the content 
     */
    async v(params) {
        let response = await new Http().fetch({
            method: 'GET',
            uri: `dist/templates/_${params.fileName}.html?_${new Date().getTime()}`,
            responseType: 'document'
        });

        
    }

    /**
     * Build Template {BuildTemplate}
     * 
     * @param response The response HTML
     * @param params Parameters to change
     */
    _bt(response, params) {

    }
}
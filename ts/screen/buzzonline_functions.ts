import ScreenHandler from "./buzzonline_screen";
import { ScreenHandlerOptions } from "./buzzonline_interfaces";

export default class Functions {
    
    /**
     * View {View}
     * Fetch and build view file from the server
     * 
     * 
     * @param {ScreenHandlerOptions} params Parameters for the content 
     */
    async v(params: ScreenHandlerOptions) {
        new ScreenHandler().show(params);
    }

}
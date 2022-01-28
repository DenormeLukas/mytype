import { switchImages } from "./functions/changeBG";
import { cursor } from "./functions/cursor";
import { hover, deleteClass } from "./functions/hover";

export const init = () => {

    switchImages();
    cursor();
    hover();
    deleteClass();
    console.log('werkt');

};




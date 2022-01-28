import { switchImages } from "./functions/changeBG";
import { cursor } from "./functions/cursor";
import { warp, brands } from "./functions/gsap";
import { hover, deleteClass } from "./functions/hover";

export const init = () => {

    switchImages();
    cursor();
    hover();
    deleteClass();
    warp();
    brands();

};





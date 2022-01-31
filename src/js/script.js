import { switchImages } from "./functions/changeBG";
import { cursor } from "./functions/cursor";
import { letters, brands, fff, ending, nextWeek, alphabet1, alphabet2, alphabet3, alphabet4 } from "./functions/gsap";
import { hover, deleteClass } from "./functions/hover";

export const init = () => {

    switchImages();
    cursor();
    hover();
    deleteClass();
    letters();
    brands();
    fff();
    ending();
    nextWeek();
    alphabet1();
    alphabet2();
    alphabet3();
    alphabet4();
};







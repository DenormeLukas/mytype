import { gsap } from "gsap/dist/gsap";

export function warp() {

    gsap.from(".banner", { duration: 2, x: 500 });

}




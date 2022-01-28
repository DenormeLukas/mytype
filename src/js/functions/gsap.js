import { gsap } from "gsap/dist/gsap";
import { TimelineLite } from "gsap/dist/gsap";
import { Power2 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function warp() {

    let element = document.querySelector('.banner');

    element.addEventListener('mouseover', onMouseOver);

    function onMouseOver(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'span') {
            let tl = new TimelineLite();

            tl.to(target, 1, { yPercent: -50, ease: Power2.easeInOut });
            tl.to(target, 1, { yPercent: 0, ease: Power2.easeInOut });
        }
    }

};

export function brands() {

    gsap.to(".F", {
        scrollTrigger: {
            trigger: ".F",
            start: "top top",
            x: +500
        }
    });


};


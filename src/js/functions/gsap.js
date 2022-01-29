import { gsap } from "gsap/dist/gsap";
import { TimelineLite } from "gsap/dist/gsap";
import { Power2 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function letters() {

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

    gsap.to(".brands", {
        scrollTrigger: {
            trigger: ".brands",
            start: "top center",
            end: "top top",
            toggleActions: "play reverse none reverse",
            toggleClass: 'is-active'
        }
    })
};

export function fff() {

    gsap.to(".form-follows-function", {
        scrollTrigger: {
            trigger: ".form-follows-function",
            start: "center center",
            end: "bottom top",
            toggleActions: "play reverse none reverse",
            toggleClass: 'is-active2'
        }
    })
};

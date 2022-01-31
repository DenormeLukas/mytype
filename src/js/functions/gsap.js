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

export function ending() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".ending",
            start: "top bottom",
            end: "center center",
            scrub: true
        }
    }).from(".ending", { xPercent: -200 }, 0)
};


export function nextWeek() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".nextweek",
            start: "top bottom",
            end: "center center",
            scrub: true
        }
    }).from(".nextweek-img", { xPercent: 200 }, 0)
};

export function alphabet1() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".first",
            start: "top bottom",
            end: "top center",
            scrub: true
        }
    }).from(".first", { xPercent: 200 }, 0)
};

export function alphabet2() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".second",
            start: "top center",
            end: "top top",
            scrub: true
        }
    }).from(".second", { xPercent: -200 }, 0)
};


export function alphabet3() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".third",
            start: "top center",
            end: "top top",
            scrub: true
        }
    }).from(".third", { xPercent: 200 }, 0)
};



export function alphabet4() {

    gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth",
            start: "top center",
            end: "top top",
            scrub: true
        }
    }).from(".fourth", { xPercent: -200 }, 0)
};






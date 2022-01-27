import { gsap } from 'gsap';

function banner() {

    let element = document.querySelector('.banner');

    element.addEventListener('mouseover', onMouseOver);

    function onMouseOver(event) {
        let trg = event.target;
        if (trg.tagName.toLowerCase() === 'span') {

            let tl = new TimelineLite();

            tl.to(trg, 1, { yPercent: -50, ease: Power2.easeInOut });
            tl.to(trg, 1, { yPercent: 0, ease: Power2.easeInOut });

        }
    }
}

export const init = () => {

    banner();

}

init();


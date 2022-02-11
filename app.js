gsap.registerPlugin(ScrollTrigger);

gsap.to(".icon", {
    rotation: 1440,
    repeat: -1,
    duration: 9
});

gsap.from(".line-1", {
    y: 200,
    duration: 1.5,
    opacity: 1,
    stagger: 0.1
});

gsap.from(".line-2", {
    x: 200,
    duration: 1.5,
    opacity: 1,
    stagger: 0.1
});


gsap.to(".ball-1", {
    scrollTrigger: {
        Trigger: ".about-sec",
        start: "1200px center",
        end: () => "+=" +
        document.querySelector(".box").offsetWidth,
        scrub: true,
        toggleActions: "restart pause reverse pause"

    },
    x: 120,
    y: 350,
    duration: 4
});



gsap.to(".ball-2", {
    scrollTrigger: {
        Trigger: ".about-sec",
        start: "1200px center",
        end: () => "+=" +
        document.querySelector(".box").offsetWidth,
        scrub: true,
        toggleActions: "restart pause reverse pause"

    },
    x: -250,
    y: 320,
    duration: 4
});



gsap.to(".ball-3", {
    scrollTrigger: {
        Trigger: ".about-sec",
        start: "1200px center",
        end: () => "+=" +
        document.querySelector(".box").offsetWidth,
        scrub: true,
        toggleActions: "restart pause reverse pause"

    },
    x: 70,
    y: 390,
    duration: 4
});



//code

gsap.from(".code", {
    scrollTrigger: ".code",
    x: 250,
    duration: 2,
    opacity: 1,
    stagger: 0.5
});

//smooth scrolling using scrollerProxy.

ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    }
});
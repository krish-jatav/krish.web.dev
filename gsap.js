gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".profile img", {
        sacle: "1",
        duration: 1,
        opacity: 0,
        delay: 0.1,
        scrollTrigger: {
            trigger: ".profile img",
            scroller: "#main",
            // markers: true,
            start: "top -40%",
            end: "top 100%",
            scrub: 2,
        },

    })
    // gsap.from("#page2 h1", {
    //     duration: "5",
    //     opacity: "0",
    //     // delay: ".2"
    //     // scale: "0",
    //     y: -100,
    //     scrollTrigger: {
    //         trigger: "#page2 h1",
    //         scroller: "#main",
    //         start: "top 80%",
    //         // markers: "true",
    //         scrub: "1",
    //     },
    // });
gsap.from(".projects img", {
    duration: "1",
    opacity: "0",
    delay: ".2",
    scale: "0",
    stagger: "1",
    x: "-100",
    scrollTrigger: {
        trigger: ".projects img",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: "5",
    },
});
document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x + 15  }px`
    document.querySelector("#circle").style.top = `${dets.y + 15 }px`
})
gsap.from(".p3-img img", {
    duration: "2",
    opacity: "0",
    delay: ".2",
    scale: "0",
    scrollTrigger: {
        trigger: ".p3-img img ",
        scroller: "#main",
        start: "top 90%",
        end: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".contact h2", {
    duration: "2",
    opacity: "0",
    delay: ".2",
    scale: "0",
    stagger: "1",
    scrollTrigger: {
        trigger: ".contact h2 ",
        scroller: "#main",
        start: "top 90%",
        end: "top 20%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".contact i", {
    duration: "2",
    opacity: "0",
    delay: ".2",
    scale: "0",
    stagger: "1",
    scrollTrigger: {
        trigger: ".contact i ",
        scroller: "#main",
        start: "top 90%",
        end: "top 80%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from(".contact h1", {
    duration: "3",
    opacity: "0",
    delay: ".2",
    scale: "0",
    stagger: "1",
    scrollTrigger: {
        trigger: ".contact h1 ",
        scroller: "#main",
        start: "top 90%",
        end: "top 85%",
        // markers: "true",
        scrub: "true",
    },
});
gsap.from("#intro-div h2", {
    duration: "4",
    opacity: "0",
    scale: "0",
    scrollTrigger: {
        trigger: "#intro-div h2 ",
        scroller: "#main",
        start: "top 90%",
        end: "top 100%",
        // markers: "true",
        scrub: "1",
    },
});
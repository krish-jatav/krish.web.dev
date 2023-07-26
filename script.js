gsap.from(".nav-part-2 h4", {
    // scale: "0",
    opacity: "0",
    delay: "0.2",
    duration: ".5",
    stagger: "1",
    y: -100,
});
gsap.from(".nav h2", {
    scale: "0",
    opacity: "0",
    delay: "0.2",
    duration: ".5",
    stagger: "1",
});

gsap.from(".right h1", {
        duration: "10",
        delay: "3",
        onstart: function() {
            $('.right h1').textillate({ in: { effect: 'wobble' } });

        }
    })
    // gsap.to(".projects .hii", {
    //     duration: "2",
    //     opacity: "0",
    //     delay: ".2",
    //     scale: "0",
    //     scrollTrigger: {
    //         trigger: ".projects .hii ",
    //         scroller: "#main",
    //         start: "top 60%",
    //         markers: "true",
    //         scrub: "true",
    //     },
    // });
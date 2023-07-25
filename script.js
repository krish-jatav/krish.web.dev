gsap.from(".nav-prt-1 h1", {
    scale: "0",
    opacity: "0",
    delay: "0.2",
    duration: "0.10",
    stagger: "1",
});
gsap.from(".profile", {
    x: "-100",
    scrollTrigger: {
        trigger: ".profile",
        scroller: "#main",
        markers: true,
        start: "top 60%"
    },
    duration: 1,
    opacity: 0
})
gsap.from(".right h1", {
    y: "-100",
    scrollTrigger: {
        trigger: ".right h1",
        scroller: "#main",
        markers: true,
        start: "top 60%"
    },
    duration: 1,
    opacity: 0
})
gsap.to(".circle", {
    y: 18,
    duration: 1.3,
    repeatDelay: 0.5,
    repeat: -1,
    opacity: 0,
    ease: Power4.out,
});

gsap.registerPlugin(ScrollTrigger);
gsap.timeline(".c_circle", {
    repeat: -1,
    repeatDelay: 0.3,
    ease: "back.out(1.2)",
    yoyo: true,
    x: 820,
    rotate: 360,
});

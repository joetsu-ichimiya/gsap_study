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

const setupLenis = () => {
    const lenis = new Lenis({
        lerp: 0, // 慣性の強さ
        duration: 0.2, // スクロールアニメーションの時間
        easing: easeOutQuart, // イージング関数
        smoothTouch: true, // タッチイベントでも慣性スクロールを有効にする
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return lenis;
};

const easeOutQuart = (x) => {
    return 1 - Math.pow(1 - x, 4);
};

const lenis = setupLenis();

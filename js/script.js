// トップに戻るボタン
$(function () {
    function topanime() {
        let scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".scroll_btn").removeClass("downmove").addClass("upmove");
        } else {
            if ($(".scroll_btn").hasClass("upmove")) {
                $(".scroll_btn").removeClass("upmove").addClass("downmove");
            }
        }
    }
    $(window).scroll(topanime);
    $(".scroll_btn").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// スマホナビ関連
const snav = document.querySelector(".small_nav");
const hdr = document.getElementById("header");
const openBtn = document.querySelector(".openbtn");
const snaviMask = document.querySelector(".snavi_mask");

snaviMask.style.cursor = "pointer";
snaviMask.addEventListener("click", () => {
    if (hdr.classList.contains("headerSmall")) {
        snav.classList.toggle("navactive");
        hdr.classList.toggle("headerWide");
        snav.style.cursor = "auto";
        snaviMask.classList.toggle("navScl");
    }
});
snav.style.display = "none";
window.addEventListener("scroll", () => {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        snav.style.display = "block";
        hdr.classList.add("headerSmall");
        hdr.classList.remove("headerMid");
        snaviMask.style.display = "block";
        snaviMask.classList.remove("navScl");
    } else {
        snav.style.display = "none";
        hdr.classList.remove("headerSmall", "headerWide");
        hdr.classList.add("headerMid");
        snaviMask.style.display = "none";
        snav.classList.remove("navactive");
    }
});

// ハンバーガーメニュー開閉
if (openBtn) {
    openBtn.addEventListener("click", () => {
        snav.classList.toggle("navactive");
        hdr.classList.toggle("headerWide");
        snaviMask.classList.toggle("navScl");
        snav.style.display = snav.classList.contains("navactive")
            ? "block"
            : "none";
        snaviMask.style.display = snav.classList.contains("navactive")
            ? "block"
            : "none";
    });
}

// ナビ内リンククリックでスムーズスクロール
$('.nav a[href*="#"]').click(function () {
    let elmHash = $(this).attr("href");
    let pos = $(elmHash).offset().top - 70;
    $("body,html").animate({ scrollTop: pos }, 200);
    return false;
});

// コードコピー
const btn1 = document.querySelectorAll(".txtCopyBox");
for (let i = 0; i < btn1.length; i++) {
    codeCopy(btn1[i]);
}
function codeCopy(btn1DOM) {
    btn1DOM.addEventListener("click", () => {
        gsap.to(btn1DOM.querySelector("p"), {
            y: -2,
            duration: 0.1,
            repeat: 1,
            repeatDelay: 0,
            ease: Cubic.easeInOut,
            yoyo: true,
        });
        setTimeout(
            () => (btn1DOM.querySelector("p").textContent = "copied!"),
            0
        );
        setTimeout(
            () => btn1DOM.querySelector("i").classList.add("fa-regular"),
            0
        );
        setTimeout(
            () => btn1DOM.querySelector("i").classList.remove("fa-solid"),
            0
        );
        setTimeout(
            () => btn1DOM.querySelector("i").classList.add("fa-solid"),
            2000
        );
        setTimeout(
            () => (btn1DOM.querySelector("p").textContent = "copy"),
            2000
        );

        // 対象コードをクリップボードにコピー
        let codeBox = btn1DOM.closest(".codes").querySelector(".code");
        if (codeBox) {
            navigator.clipboard.writeText(codeBox.textContent);
        }
    });
}

// TABメニュー（クリックしたメニューの下にドットが移動）
const tabElm = document.querySelectorAll("[data-tabs]");
const menuW = document.getElementById("sec0");
const tabUl = document.getElementById("menu_ul");

if (tabElm.length > 0) {
    for (let f = 0; f < tabElm.length; f++) {
        let tab = tabElm[f];
        let tabBtnElm = tab.querySelectorAll("[data-tab]");
        let tabContentsElm = tab.querySelectorAll("[data-tab-text]");

        for (let f = 0; f < tabBtnElm.length; f++) {
            let tabBtnF = tabBtnElm[f];
            let tabTxtF = tabContentsElm[f];

            tabBtnF.addEventListener("click", (e) => {
                for (let f = 0; f < tabBtnElm.length; f++) {
                    tabBtnElm[f].classList.remove("active");
                    tabContentsElm[f].classList.remove("active");
                    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
                    tl.add(
                        gsap.to(tabContentsElm[f], {
                            autoAlpha: 0,
                            duration: 0,
                        })
                    );
                    tl.add(
                        gsap.to(tabContentsElm[f], {
                            autoAlpha: 1,
                            duration: 0.08,
                        })
                    );
                }
                tabBtnF.classList.add("active");
                tabTxtF.classList.add("active");
            });
        }
    }
}

// let active = document.querySelectorAll(".active");

// // let menuW = document.querySelector("#sec0");
// let dotTab = document.querySelector("#dot_tab");
// // let tabUl = document.querySelector("#menu_ul");
// dotTab.style.display = "none";
let active = document.getElementsByClassName(".active");
let dotTab = document.getElementById("dot_tab");
dotTab.style.display = "none";

if (tabElm.length > 0) {
    for (let d = 0; d < tabElm.length; d++) {
        let tab = tabElm[d];
        let tabBtnElm = tab.querySelectorAll("[data-tab]");

        for (let f = 0; f < tabBtnElm.length; f++) {
            let tabBtnF = tabBtnElm[f];

            tabBtnF.addEventListener("click", () => {
                // ドット取得

                if (!dotTab) return;

                let tabUlW = tabUl.getBoundingClientRect().width;
                // タブボタン自身の座標
                let btnRect = tabBtnF.getBoundingClientRect();
                // メニュー全体の左端
                let menuLeft = menuW.getBoundingClientRect().left;
                // ドットの幅
                let dotTabRect = dotTab.getBoundingClientRect();
                // タブ中央 - ドット幅/2
                let tabpoint =
                    btnRect.left -
                    menuLeft +
                    btnRect.width / 2 -
                    dotTabRect.width / 2;
                let tabpoint2 = tabpoint - tabUlW / 2 + dotTabRect.width / 2; // ドットの位置を微調整

                gsap.to(dotTab, {
                    x: tabpoint2,
                    autoAlpha: 1,
                    duration: 0.1,
                    overwrite: true,
                });

                dotTab.style.display = "block";

                // 最初の点
                let dotTabFirst = document.querySelector("#dot_tab_first");
                dotTabFirst.style.opacity = "0";
            });
        }
    }
}
// if (tabElm.length > 0) {
//     for (let d = 0; d < tabElm.length; d++) {
//         let tab = tabElm[d];
//         let tabBtnElm = tab.querySelectorAll("[data-tab]");

//         for (let f = 0; f < tabBtnElm.length; f++) {
//             let tabBtnF = tabBtnElm[f];

//             tabBtnF.addEventListener("click", () => {
//                 // ドット取得
//                 // let dotTab = tab.querySelector(".dot_tab");
//                 // if (!dotTab) return;

//                 let tabUlW = tabUl.getBoundingClientRect().width;
//                 // タブボタン自身の座標
//                 let btnRect = tabBtnF.getBoundingClientRect();
//                 // メニュー全体の左端
//                 let menuLeft = menuW.getBoundingClientRect().left;
//                 // ドットの幅
//                 let dotTabRect = dotTab.getBoundingClientRect();
//                 // タブ中央 - ドット幅/2
//                 let tabpoint =
//                     btnRect.left -
//                     menuLeft +
//                     btnRect.width / 2 -
//                     dotTabRect.width / 2;
//                 let tabpoint2 = tabpoint - tabUlW / 2 + dotTabRect.width / 2; // ドットの位置を微調整

//                 gsap.to(dotTab, {
//                     x: tabpoint2,
//                     autoAlpha: 1,
//                     duration: 0.1,
//                     overwrite: true,
//                 });

//                 // 最初の点
//                 let dotTabFirst = document.querySelector(".dot_tab_first");
//                 if (dotTabFirst) dotTabFirst.style.opacity = "0";
//                 dotTab.style.display = "block";
//             });
//         }
//     }
// }

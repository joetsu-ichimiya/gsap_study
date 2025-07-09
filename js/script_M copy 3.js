////////////////////////////////////////////////////////////

// topに戻るボタン
$(function () {
    // スクロール位置によってボタンの表示/非表示を切り替え
    function topanime() {
        let scroll = $(window).scrollTop();
        if (scroll >= 100) {
            // 100px以上スクロールしたらボタンを表示
            $(".scroll_btn").removeClass("downmove").addClass("upmove");
        } else {
            // 100px未満ならボタンを非表示
            if ($(".scroll_btn").hasClass("upmove")) {
                $(".scroll_btn").removeClass("upmove").addClass("downmove");
            }
        }
    }
    $(window).scroll(topanime); // スクロール時に実行
    $(".scroll_btn").click(function () {
        // ボタンクリックでページトップへスムーズスクロール
        $("body,html").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

///////////////////////////////////////////////////////////

// スマホナビ関連
const Snav = document.getElementById("small_nav"); // スマホ用ナビ
const hdr = document.getElementById("header"); // ヘッダー
const hdrS = document.getElementsByClassName("headerSmall");
const hdrM = document.getElementsByClassName("headerMid");
const hdrW = document.getElementsByClassName("headerWide");
const close = document.getElementsByClassName("close");
const SAtv = document.getElementById("openbtn"); // ハンバーガーボタン
const SnavMusk = document.getElementById("SnavMusk"); // ナビのマスク

SnavMusk.style.cursor = "pointer";
SnavMusk.addEventListener("click", () => {
    // ヘッダーが小さい時にナビを開閉
    if (hdr.classList.contains("headerSmall")) {
        Snav.classList.toggle("navactive");
        hdr.classList.toggle("headerWide");
        Snav.style.cursor = "auto";
        SnavMusk.classList.toggle("navScl");
    }
});

Snav.style.display = "none";
window.addEventListener("scroll", () => {
    // スクロール量によってヘッダーやナビの表示切り替え
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        Snav.style.display = "block";
        hdr.classList.add("headerSmall");
        hdr.classList.remove("headerMid");
        SnavMusk.style.display = "block";
        SnavMusk.classList.remove("navScl");
    } else if (
        (document.body.scrollTop < 0 || document.documentElement.scrollTop < 0,
        hdr.classList.contains("headerMid"))
    ) {
        Snav.classList.remove("navactive");
    } else {
        Snav.style.display = "none";
        hdr.classList.remove("headerSmall", "headerWide");
        hdr.classList.add("headerMid");
        SnavMusk.style.display = "none";
        Snav.classList.remove("navactive");
    }
});

// ナビ内リンククリックでスムーズスクロール
$('.nav a[href*="#"]').click(function () {
    let elmHash = $(this).attr("href");
    let pos = $(elmHash).offset().top - 70;
    $("body,html").animate({ scrollTop: pos }, 200);
    return false;
});

///////////////////////////////////////////////////////////

// コードコピー
const btn1 = document.querySelectorAll(".txtCopyBox");
<<<<<<< HEAD
const txt = document.querySelectorAll("#code01");
const copy_TEXT = txt.textContent;
let codeBox = document.getElementsByClassName("codeBox");
const CopyNoneAtv = document.getElementById("txtCopyNoneActive");
const CopyAtv = document.getElementById("txtCopyActive");
const copy = document.getElementById("a");
<<<<<<< HEAD
=======
const copyTxt = document.getElementById("Copy");
>>>>>>> 7a5b2bc (0704)
const copid = gsap.to("btn1", {
    duration: 1, // 秒指定
    x: 70,
    ease: Cubic.easeInOut, // 加減速の種類
});

for (i = 0; i < btn1.length; i++) {
=======
for (let i = 0; i < btn1.length; i++) {
>>>>>>> 70b6640 (Refactor layout styles and improve responsiveness; update HTML structure for consistency; enhance JavaScript functionality for navigation and tab interactions.)
    codeCopy(btn1[i], i);
}
function codeCopy(btn1DOM, btn1Id) {
    // コピーボタンをクリックしたときの処理
    btn1DOM.addEventListener("click", () => {
<<<<<<< HEAD
<<<<<<< HEAD
        gsap.to(btn1DOM, {
=======
        
=======
        // コピーアニメーション
>>>>>>> 70b6640 (Refactor layout styles and improve responsiveness; update HTML structure for consistency; enhance JavaScript functionality for navigation and tab interactions.)
        gsap.to(btn1DOM.querySelector("p"), {
>>>>>>> 7a5b2bc (0704)
            y: -2,
            duration: 0.1,
            repeat: 1,
            repeatDelay: 0,
            ease: Cubic.easeInOut,
            yoyo: true,
        });
        // テキストとアイコンの切り替え
        setTimeout(() => (btn1DOM.querySelector("p").textContent = "copied!"), 0);
        setTimeout(() => btn1DOM.querySelector("i").classList.add("fa-regular"), 0);
        setTimeout(() => btn1DOM.querySelector("i").classList.remove("fa-solid"), 0);
        setTimeout(() => btn1DOM.querySelector("i").classList.add("fa-solid"), 2000);
        setTimeout(() => (btn1DOM.querySelector("p").textContent = "copy"), 2000);

        // 対象コードをクリップボードにコピー
        let copi = btn1DOM.parentNode.nextSibling.nextSibling;
        navigator.clipboard.writeText(copi.textContent);
    });
}

///////////////////////////////////////////////////////////

// 最終更新日表示
let fv = document.querySelector("#fv");
let day = document.createTextNode(document.lastModified);
let div = document.createElement("div");
div.append("Last Update : ", day);
let dateBox = fv.appendChild(div);
dateBox.setAttribute("id", "date");
 dateBox.style.cssText = "color:#000;font-size:1.5rem;";


///////////////////////////////////////////////////////////

// TABメニュー
const tabElm = document.querySelectorAll("[data-tabs]");
const menuW = document.querySelector("#sec04");
const tabUl = document.querySelector("#menuU");

tabElm.forEach(tab => {
    const tabBtnElm = tab.querySelectorAll("[data-tab]");
    const tabContentsElm = tab.querySelectorAll("[data-tab-text]");

    tabBtnElm.forEach((tabBtnF, idx) => {
        const tabTxtF = tabContentsElm[idx];

        tabBtnF.addEventListener("click", () => {
            // タブ切り替え（activeクラスの付け替え）
            tabBtnElm.forEach(btn => btn.classList.remove("active"));
            tabContentsElm.forEach(cont => cont.classList.remove("active"));
            tabBtnF.classList.add("active");
            tabTxtF.classList.add("active");

            // ドット移動
            const dotTab = tab.querySelector(".dotTab");
            if (!dotTab || !menuW || !tabUl) return;

            const btnRect = tabBtnF.getBoundingClientRect();
            const menuLeft = menuW.getBoundingClientRect().left;
            const dotTabRect = dotTab.getBoundingClientRect();
            const tabUlW = tabUl.getBoundingClientRect().width;

            // タブ中央 - ドット幅/2（ドットをタブ中央に移動）
            const tabpoint = btnRect.left - menuLeft + btnRect.width / 2 - dotTabRect.width / 2;
            const tabpoint2 = tabpoint - tabUlW / 2 + dotTabRect.width / 2; // 微調整

            gsap.to(dotTab, {
                x: tabpoint2,
                autoAlpha: 1,
                duration: 0.1,
                overwrite: true,
            });

            dotTab.style.display = "block";

<<<<<<< HEAD
<<<<<<< HEAD
let dotTab = document.querySelector(".dotTab");
=======
let menuW = document.querySelector("#sec04");
let dotTab = document.querySelector(".dotTab");
let tabUl = document.querySelector("#menuU"); 
>>>>>>> 7a5b2bc (0704)
dotTab.style.display = "none";

if (tabElm.length > 0) {
    for (let d = 0; d < tabElm.length; d++) {
        let tab = tabElm[d];
        let tabBtnElm = tab.querySelectorAll("[data-tab]");

        for (let f = 0; f < tabBtnElm.length; f++) {
            let tabBtnF = tabBtnElm[f];

            tabBtnF.addEventListener("click", () => {
<<<<<<< HEAD
                for (let f = 0; f < tabBtnElm.length; f++) {
                    console.log("kokomadeugoku");

                    //liの左座標
                    let tabx = tabBtnF.parentNode.getBoundingClientRect().x;
                    //メニュー全体からの左余白幅
                    let getStyle = menuW.getBoundingClientRect().left;
                    //タブの幅half
                    let atvWidth_half =
                        tabBtnF.getBoundingClientRect().width / 2;
                    let tabpoint = tabx - getStyle + atvWidth_half;
                    //tabElm[d]と(let d = 0; d < tabElm.length; d++)dで連動　個別全体タブ
                    let dotTab =
                        tabElm[d].firstElementChild.firstElementChild
                            .lastElementChild.lastElementChild;
                    console.log(dotTab);

                    gsap.to(dotTab, {
                        x: tabpoint,
                        autoAlphe: 1,
                        duration: 0.1,
                        overwrite: true,
                        // ease: "power1.out,
                    });

                    //移動の点
                    dotTab.style.display = "block";
                    console.log(dotTab);

                    //最初の点
                    let dotTabFirst = tabElm[d].querySelector(".dotTabFirst");
                    dotTabFirst.style.opacity = "0";
                    // dotTabFirst.style.le = "0";
                }
=======
                // ドット取得
                let dotTab = tab.querySelector(".dotTab");
                if (!dotTab) return;

let tabUlW = tabUl.getBoundingClientRect().width; 
                // タブボタン自身の座標
                let btnRect = tabBtnF.getBoundingClientRect();
                // メニュー全体の左端
                let menuLeft = menuW.getBoundingClientRect().left;
                // ドットの幅
                let dotTabRect = dotTab.getBoundingClientRect();
                // タブ中央 - ドット幅/2
                let tabpoint = btnRect.left - menuLeft + btnRect.width / 2 - dotTabRect.width / 2;
                let tabpoint2 = tabpoint - tabUlW / 2 + dotTabRect.width / 2; // ドットの位置を微調整

                gsap.to(dotTab, {
                    x: tabpoint2,
                    autoAlpha: 1,
                    duration: 0.1,
                    overwrite: true,
                });

                dotTab.style.display = "block";

                // 最初の点
                let dotTabFirst = tab.querySelector(".dotTabFirst");
                if (dotTabFirst) dotTabFirst.style.opacity = "0";
>>>>>>> 7a5b2bc (0704)
            });
        }
    }
}
=======
            // 最初の点（dotTabFirst）があれば非表示
            const dotTabFirst = tab.querySelector(".dotTabFirst");
            if (dotTabFirst) dotTabFirst.style.opacity = "0";
        });
    });
});
>>>>>>> 70b6640 (Refactor layout styles and improve responsiveness; update HTML structure for consistency; enhance JavaScript functionality for navigation and tab interactions.)

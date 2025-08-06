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
 
$(function () {
    //topに戻るボタン
    function topanime() {
        let scroll = $(window).scrollTop();
        //300pxスクロールしたらpage_topが出てくる
        if (scroll >= 100) {
            $(".scroll_btn").removeClass("downmove"); //初期クラス名
            $(".scroll_btn").addClass("upmove"); //クラス名追加
        } else {
            if ($(".scroll_btn").hasClass("upmove")) {
                //classが存在するかを確認
                $(".scroll_btn").removeClass("upmove"); //pagetopの場合はクラス名削除
                $(".scroll_btn").addClass("downmove"); //pagetopの場合はクラス名追加
            }
        }
    }
    $(window).scroll(function () {
        topanime();
    });
    $(".scroll_btn").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            500 //スクロールスピード
        );
        return false;
    });
});
///////////////////////////////////////////////////////////
let Snav = document.getElementById("small_nav");
let hdr = document.getElementById("header");
let hdrS = document.getElementsByClassName("headerSmall");
let hdrM = document.getElementsByClassName("headerMid");
let hdrW = document.getElementsByClassName("headerWide");
let close = document.getElementsByClassName("close");
let SAtv = document.getElementById("openbtn");
let SnavMusk = document.getElementById("SnavMusk");
let scrl =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
///////////////////////////////////////////////////////////
SnavMusk.style.cursor = "pointer";

SnavMusk.addEventListener("click", () => {

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
 
    } else {
    }
    
});
///////////////////////////////////////////////////////////
Snav.style.display = "none";
window.addEventListener("scroll", () => {

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
 
const txt = document.querySelectorAll("#code01");
const copy_TEXT = txt.textContent;
let codeBox = document.getElementsByClassName("codeBox");
const CopyNoneAtv = document.getElementById("txtCopyNoneActive");
const CopyAtv = document.getElementById("txtCopyActive");
const copy = document.getElementById("a");
 
 
const copyTxt = document.getElementById("Copy");

const copid = gsap.to("btn1", {
    duration: 1, // 秒指定
    x: 70,
    ease: Cubic.easeInOut, // 加減速の種類
});

for (i = 0; i < btn1.length; i++) {
 
for (let i = 0; i < btn1.length; i++) {

    codeCopy(btn1[i], i);
}
function codeCopy(btn1DOM, btn1Id) {
    // コピーボタンをクリックしたときの処理
    btn1DOM.addEventListener("click", () => {
 
 
        gsap.to(btn1DOM, {
 
        
 
        // コピーアニメーション

        gsap.to(btn1DOM.querySelector("p"), {

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
 
        hdr.classList.remove("headerSmall");
        hdr.classList.remove("headerWide");
        hdr.classList.add("headerMid");
        SnavMusk.style.display = "none";
        querySelectorAll;
        Snav.classList.remove("navactive");
    }
});
///////////////////////////////////////////////////////////
$('.nav a[href*="#"]').click(function () {
    let elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    let pos = $(elmHash).offset().top - 70; //idの上部の距離からHeaderの高さを引いた値を取得
    $("body,html").animate({ scrollTop: pos }, 200); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});
///////////////////////////////////////////////////////////
let lang = document.getElementById("lang");

const p = document.querySelector("p");
// クリップボードへコピー（ボタンをクリックした時）
const btn1 = document.querySelectorAll(".txtCopyBox");
const txt = document.querySelectorAll("#code01");
const copy_TEXT = txt.textContent;
let codeBox = document.getElementsByClassName("codeBox");
const CopyNoneAtv = document.getElementById("txtCopyNoneActive");
const CopyAtv = document.getElementById("txtCopyActive");
const copy = document.getElementById("a");
const copyTxt = document.getElementById("Copy");
const copid = gsap.to("btn1", {
    duration: 1, // 秒指定
    x: 70,
    ease: Cubic.easeInOut, // 加減速の種類
});

for (i = 0; i < btn1.length; i++) {
    codeCopy(btn1[i], i);
}
function codeCopy(btn1DOM, btn1Id) {
    btn1DOM.addEventListener("click", () => {
        
        gsap.to(btn1DOM.querySelector("p"), {
            y: -2,
            duration: 0.1, // 秒指定
            repeat: 1,
            repeatDelay: 0,
            ease: Cubic.easeInOut, // 加減速の種類
            yoyo: true,
        });
        setTimeout(
            () => (btn1DOM.querySelector("p").textContent = "copied!"),
            0
        );
        setTimeout(
            () => btn1DOM.querySelector("i").classList.add("fa-regular"),
            btn1DOM.querySelector("i").classList.remove("fa-solid"),
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

 
 
let dotTab = document.querySelector(".dotTab");
 
let menuW = document.querySelector("#sec04");
let dotTab = document.querySelector(".dotTab");
let tabUl = document.querySelector("#menuU"); 

dotTab.style.display = "none";

if (tabElm.length > 0) {
    for (let d = 0; d < tabElm.length; d++) {
        let tab = tabElm[d];
        let tabBtnElm = tab.querySelectorAll("[data-tab]");

        for (let f = 0; f < tabBtnElm.length; f++) {
            let tabBtnF = tabBtnElm[f];

            tabBtnF.addEventListener("click", () => {
 
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
            });
        }
    }
}
 
            // 最初の点（dotTabFirst）があれば非表示
            const dotTabFirst = tab.querySelector(".dotTabFirst");
            if (dotTabFirst) dotTabFirst.style.opacity = "0";
        });
    });
 
});
 
});
 
let fv = document.querySelector("#fv");
let day = document.createTextNode(document.lastModified); //最終更新日生成＝day

let div = document.createElement("div"); //div生成=div
// let date = ((textContent = "Last Update : "), div.appendChild(day));
let days = div.append((textContent = "Last Update : "), div.appendChild(day)); //last~+最終更新日生成=days
let dateBox = fv.appendChild(div); //fvの中の最後尾に上で生成したdiv追加=dateBo
dateBox.setAttribute("id", "date"); //上で追加したdivにid="date"付与

date.style.color = "#ad0b0b"; //#dateの文字色
date.style.fontSize = "1.5rem"; //#dateの文字サイズ
let dates = document.getElementById("date"); //
date.style.color = "#000";


// let pdfBtns = document.querySelectorAll(".pdfBtn");
// //
// for (i = 0; i < pdfBtns.length; i++) {
//     downloadPdfBtn(pdfBtns[i], i);
// }
// let pdfara = document.getElementsByClassName("txt_box");
// for (i = 0; i < pdfara.length; i++) {
//     pdfaras(pdfara[i], i);
// }
// function downloadPdfBtn(pdfBtns, pdfBtnsDOM) {
//     pdfBtns.style.cursor = "pointer";
//     pdfBtns.addEventListener("click", () => {

//         let content = pdfBtns.parentNode.parentNode.innerHTML;
//         const secTtl = pdfBtns.parentNode.nextSibling;

//         const filename = secTtl + ".pdf";
//         alert(content);
//         html2pdf(content).save(filename); //CDN　html2pdf
//     });
// }
// //TABメニュー////////////////////////////////////////////////////////////

const tabElm = document.querySelectorAll("[data-tabs]");

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

let active = document.querySelectorAll(".active");

let menuW = document.querySelector("#sec04");
let dotTab = document.querySelector(".dotTab");
let tabUl = document.querySelector("#menuU"); 
dotTab.style.display = "none";

if (tabElm.length > 0) {
    for (let d = 0; d < tabElm.length; d++) {
        let tab = tabElm[d];
        let tabBtnElm = tab.querySelectorAll("[data-tab]");

        for (let f = 0; f < tabBtnElm.length; f++) {
            let tabBtnF = tabBtnElm[f];

            tabBtnF.addEventListener("click", () => {
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
            });
        }
    }
}

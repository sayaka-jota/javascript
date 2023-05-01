'use strict'

// ローディングページ

window.onload = function () {
  setTimeout(function () {
    const load = document.getElementById('loading');
    load.classList.add('loaded');
  }, 2000);
}


// ヒーロー画像切り替え

$(function () {
  const setImg = '#hero-images'; /* idを代入 */
  const fadeSpeed = 1500;
  const switchDelay = 5000;
  $(setImg).children('img').css({ opacity: '0' });  /* 子要素imgを取得し完全透明 */
  $(setImg + ' img:first').animate({ opacity: '1' }, fadeSpeed);
  setInterval(function () {
    $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed)
      .next('img')
      .animate({ opacity: '1' }, fadeSpeed)
      .end()
      .appendTo(setImg); /* end()でひとつ前の要素に戻る.appendto()でsetImgの最後の要素につける */
  }, switchDelay);
  15
});

// ヘッダー固定解除
$(function () {
  const scrollStart = $('.header').offset().top;
  const scrollEnd = $('#news-page').offset().top; /* aboutページ上部からの距離 */
  let distance = 0;

  $(document).scroll(function () {
    distance = $(this).scrollTop();  /* スクロールした距離の取得 */

    if (scrollEnd <= distance) {
      $('.header').fadeOut()/* .addClass('fixed-none') */;/* #billbornを超えたら */
    } else {
      $('.header').fadeIn()/* .removeClass('fixed-none') */;  /* 戻ってきたら */
    }
  })
})



// ハンバーガーメニュー
$(".ham-btn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
  $(".ham-btn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});


// チケットページ

// // カレンダー
const calendarContent = [
  [{ date: "1/3", title: "エンドレス・サマー", content: "夏の終わりに出会った少女との純愛物語。", img: "./images/schedule2.jpg" }, { date: "1/12", title: "漆黒の彼方へ", content: "赤裸々な青春群像劇。", img: "./images/schedule3.jpg" }, { date: "1/26", title: "魔法のバラード", content: "魔法を使える少女が悪の組織と戦う。", img: "./images/schedule7.jpg" }],
  [{ date: "2/3", title: "夢見る少女", content: "少女が自分の夢を追いかける物語。", img: "./images/schedule4.jpg" }, { date: "2/4", title: "天使の涙", content: "天使が人間に戻るために悩む物語。", img: "./images/schedule5.jpg" }, { date: "2/5", title: "失われた楽園", content: "人類が環境破壊によって失ったものを描くSFドラマ。", img: "./images/schedule6.jpg" }],
  [{ date: "3/3", title: "白鳥の池", content: "真実の愛を知る男女の物語。", img: "./images/schedule1.jpg" }, { date: "3/4", title: "ブルーノ・アース", content: "2008年シングル「Burst」で全米1位0に貢献したグループ。", img: "./images/schedule8.jpg" }, { date: "3/5", title: "クリス・ブラック", content: "アメリカ出身のR&Bシンガー。", img: "./images/schedule9.jpg" }],
  [{ date: "4/1", title: "見知らぬ国の物語", content: "旅する青年が見た国々の驚きと感動を描く。", img: "images/schedule10.jpg" }, { date: "4/2", title: "魂の叫び", content: "人々が抱える孤独や苦悩を描くドラマ。", img: "./images/schedule11.jpg" }, { date: "4/3", title: "青い鳥のいる庭", content: "未来を変えるために奮闘する少女の物語。", img: "./images/schedule12.jpg" }],
  [{ date: "5/3", title: "サバンナの風", content: "アフリカで暮らす少女たちの心温まる物語。", img: "./images/schedule13.jpg" }, { date: "5/4", title: "見知らぬ誰かの歌声", content: "人々を魅了する歌声の持ち主を巡るミステリードラマ。", img: "./images/schedule14.jpg" }, { date: "5/5", title: "オーシャンズ・ラプソディー", content: "海の王国での音楽と冒険。", img: "./images/schedule15.jpg" }],
  [{ date: "6/3", title: "シアター・オブ・ザ・ミンド", content: "想像力を刺激する幻想的なストーリー。", img: "./images/schedule16.jpg" }, { date: "6/4", title: "夢のジャングル・リズム", content: "熱帯雨林での音楽と冒険。", img: "./images/schedule17.jpg" }, { date: "6/5", title: "エレクトリック・フィーバー", content: "力満点のエレクトロニックサウンドとダンス。", img: "./images/schedule18.jpg" }],
  [{ date: "7/1", title: "ジャズ・クラブの夜", content: "ジャズの音楽と演奏家たちのドラマ。", img: "./images/schedule19.jpg" }, { date: "7/2", title: "エミリー・スミス", content: "天使のような歌声で人々を魅了するシンガーソングライター。", img: "./images/schedule20.jpg" }, { date: "7/3", title: "ジャック・ウィルソン", content: "深みのある歌声が特徴のブルースシンガー。", img: "./images/schedule21.jpg" }],
  [{ date: "8/3", title: "ジョシュ・ハリス", content: "キャッチーな曲調とパワフルな歌声が魅力のアイドル歌手。", img: "./images/schedule22.jpg" }, { date: "8/4", title: "ライアン・メイフィールド ", content: "ソウルフルな歌声と深い感性で世代を超えたファンを獲得する。", img: "./images/schedule23.jpg" }, { date: "8/5", title: "ソフィー・キム", content: "ポップな曲調と歌唱力で多くの若者から支持を得る。", img: "./images/schedule24.jpg" }],
  [{ date: "9/3", title: "ミュージカル・メモリーズ", content: "ロードウェイの名曲たちを綴る回。", img: "./images/schedule25.jpg" }, { date: "9/4", title: "タロックンロール・レボリューション", content: "60年代のロックンロールと社会変革のストーリー。", img: "./images/schedule26.jpg" }, { date: "9/5", title: "マイケル・ジョンソン", content: "シンガーソングライターとして自らの人生を歌う。", img: "./images/schedule27.jpg" }],
  [{ date: "10/3", title: "ディスコ・フィーバー ", content: "0年代のディスコ音楽とダンス", img: "./images/schedule29.jpg" }, { date: "10/4", title: "永遠のシャンソン", content: "サイバーパンクな世界観のミュージカル。", img: "./images/schedule28.jpg" }, { date: "10/5", title: "キャンドルライト", content: "キャンドルの明かりで織りなす愛の物語。", img: "./images/schedule30.jpg" }],
  [{ date: "11/1", title: "ライアン・メイフィールド", content: "深い感性で世代を超えたファンを獲得する。", img: "./images/schedule31.jpg" }, { date: "11/2", title: "ダニー・チャン", content: "ロックバンドのリードボーカリストとして活躍。", img: "./images/schedule32.jpg" }, { date: "11/3", title: "マディソン・デイヴィス", content: "繊細な歌声と歌詞で多くの人々の心を揺さぶる。", img: "./images/schedule33.jpg" }],
  [{ date: "12/1", title: "ブライト・ライト", content: "ディスコ時代の音楽とダンス。", img: "./images/schedule34.jpg" }, { date: "12/2", title: "ジョン・エバンス", content: "親みあるカントリー歌手として人気を博す。", img: "./images/schedule35.jpg" }, { date: "12/3", title: "ハーモニック・ハーモニー", content: "和声の美しさを歌うミュージカル。", img: "./images/schedule36.jpg" }]
];


// 画像を表示するためのHTMLを生成する関数 配列分繰り返す
for (let i = 0; i < calendarContent.length; i++) {
  for (let j = 0; j < calendarContent[i].length; j++) {
  }
}


// 初月3月とする
const today = new Date();
let monthNumber = today.getMonth();  /* 文字列にする 月は初期値0*/

// その月表示される項目 見た目
function loadData(number) {
  const center = number + 1 /* 月は初期値０のため */
  const centerMonth = center + '月'
  $('#centerMonth').html(centerMonth);
  let left = center - 1;
  if (left == 0) {  /* ０になったら */
    left = 12;
  }
  const leftMonth = left + '月'
  $('#leftMonth').html(leftMonth)
  let right = center + 1;
  if (right == 13) {
    right = 1;
  }
  const rightMonth = right + '月'
  $('#rightMonth').html(rightMonth);

  const setData1 = calendarContent[number][0]; /* オブジェクト１ */
  $('.sche-date1').html(setData1.date)
  $('.title1').html(setData1.title)
  $('.cast-info1').html(setData1.content)
  $('.img-1st').html(`<img src="${setData1.img}">`)
  console.log(setData1)
  const setData2 = calendarContent[number][1];
  $('.sche-date2').html(setData2.date)
  $('.title2').html(setData2.title)
  $('.cast-info2').html(setData2.content)
  $('.img-2nd').html(`<img src="${setData2.img}">`)

  const setData3 = calendarContent[number][2]
  $('.sche-date3').html(setData3.date)
  $('.title3').html(setData3.title)
  $('.cast-info3').html(setData3.content)
  $('.img-3rd').html(`<img src="${setData3.img}">`)
}
loadData(monthNumber);  /* ロード後の月(number) */

// ボタンで月移動　動き
$('#prev-btn').click(function () {
  if (monthNumber == 0) {  /* １になったら１２にする */
    monthNumber = 11
  } else {
    monthNumber--
  }
  loadData(monthNumber)
})
$('#next-btn').click(function () {
  if (monthNumber == 11) {
    monthNumber = 0
  } else {
    monthNumber++
  }
  loadData(monthNumber)
})



// //初期月
// let monthNumber = 2;
// // 1月

// function loadData(number){
//   const setData1=calendarContent[number][0];
//   $('.sche-date1').html(setData1.date);
//   $('.title1').html(setData1.title);
//   const setData2=calendarContent[number][1];
//   $('.sche-date2').html(setData2.date);
//   $('.title2').html(setData2.title);
//   const setData3=calendarContent[number][2];
//   $('.sche-date3').html(setData3.date);
//   $('.title3').html(setData3.title);
// }

// //初期表示
// loadData(monthNumber);

// $("#next-btn").click(function(){
//   //12月の場合は1月に戻す
//   if(monthNumber == 11){
//     monthNumber = 0
//   }else{
//     monthNumber++
//   }
//   loadData(monthNumber);
// })
// $("#prev-btn").click(function(){
//   //1月の場合は12月に戻す
//   if(monthNumber == 0){
//     monthNumber = 11
//   }else{
//     monthNumber--
//   }
//   loadData(monthNumber);
// })




// ポップアップ画面
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelectorAll(".close-button");
const openButton = document.querySelector(".open-button");

//閉じる。closedのdisplay:noneがついた状態
/* castでも閉じれるように繰り返す */
for (let closed of closeButton) {
  closed.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
}
//開く。closedのdisplay:noneが消える
openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

// ラジオボタンでcontainer入れ替える
const summaryBtn = document.getElementById("summary");
const castBtn = document.getElementById("cast");
const summaryContainer = document.querySelector(".summary-container");
const castContainer = document.querySelector(".cast-container");

castContainer.getElementsByClassName.display = "none"; /* 初期値 */

summaryBtn.addEventListener('change', function () {
  if (summaryBtn.checked) {
    summaryContainer.style.display = 'block';
    castContainer.style.display = 'none';
  }
});
castBtn.addEventListener('change', function () {
  if (castBtn.checked) {
    summaryContainer.style.display = 'none';
    castContainer.style.display = 'block';

  }
});

// ラジオボタン　クリック状態の表示(cssで代替中)
// function checked() {
//   console.log('開始')
//   const radios = document.getElementsByName('radio')
//   for (let i = 0; i < document.form1.radios.length; i++) {
//     if (radios[i].checked) {
//       getComputedStyle(radios[i], "::before").style.opacity = 1;
//       console.log(getComputedStyle(radios[i], "::before"))
//     }
//   }
// }


// いいねボタン
let counter, likeBtn;
let n;

window.addEventListener('load', function () {  /* 起動時のカウンターを取得 */
  counter = document.getElementById('like-counter');
  likeBtn = document.getElementById('like-btn');  /* イベント設定のために取得定義 */
  n = 0;
  likeBtn.addEventListener('click', function () {
    n++;
    counter.innerHTML = n;
  })
});

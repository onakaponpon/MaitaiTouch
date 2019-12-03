/*-------------------------------------------------*/
/*標準地図*/
const std = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(標準地図)",
  minZoom: 0,
  maxZoom: 18
});
//淡色地図
const blank = L.tileLayer(
  'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: "地理院タイル(淡色地図)",
    minZoom: 5,
    maxZoom: 18,
    opacity: 1
  });
//傾斜量図
const keisya = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png', {
  attribution: "地理院タイル(傾斜量図)",
  minZoom: 3,
  maxZoom: 15,
  opacity: 1
});
//陰影起伏図
// const ineiKifukLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png", {
//   attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル(陰影起伏図)</a>",
//   minZoom: 2,
//   maxZoom: 16
// });
//アナグリフ
const anaglypLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/anaglyphmap_gray/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(アナグリフ)",
  minZoom: 2,
  maxZoom: 16
  // options: {
  //   errorTileUrl: './tileimg/notile.png',
  // }
});
const baseLayerArray = ["std", "blank", "keisya", "anaglypLayer"];

/*
//デジタル標高地形図
var dem = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png?o", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 5,
  maxZoom: 16,
  maxNativeZoom: 14
});
*/

//色別標高図
const irobetuLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(色別標高図",
  minZoom: 5,
  maxZoom: 15
});


//治水地形分類図
const chisuiLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/lcmfc2/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(治水地形分類図 更新版)",
  minZoom: 11,
  maxZoom: 16,
  opacity: 0.7
});



//高度情報
const contourLayer = L.contourLayer("https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt", {
  attribution: "標高タイル 基盤地図情報作成数値標高モデルを使用",
  minZoom: 0,
  maxZoom: 15
});

//明治時代の低湿地
const meijiLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/swale/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(明治時代の低湿地)",
  minZoom: 10,
  maxZoom: 15
  // options: {
  //   errorTileUrl: './tileimg/notile.png',
  // }
});

//土地利用図
const tochiRiyouLayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/lum200k/{z}/{x}/{y}.png", {
  attribution: "地理院タイル(土地利用図)",
  minZoom: 11,
  maxZoom: 14
  // options: {
  //   errorTileUrl: './tileimg/notile.png',
  // }
});
// const imageBounds = [[0,960], [540,0]];
const imageBounds = [[0,0], [100,400]];
const titlemap =  L.imageOverlay('tileimg/mame.png', imageBounds, {attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>"});


//写真たち-------
//最新の写真
const pictureLayer10 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
  attribution: "ズームレベル14から18は「電子国土基本図（オルソ画像）」、「東日本大震災後正射画像」、「森林（国有林）の空中写真（林野庁）」、「簡易空中写真」、「国土画像情報」から作成。ズームレベル9から13は「データソース：Landsat8画像（GSI,TSIC,GEO Grid/AIST）, Landsat8画像（courtesy of the U.S. Geological Survey）, 海底地形（GEBCO）」、ズームレベル2から8はImages on 世界衛星モザイク画像 obtained from site https://lpdaac.usgs.gov/data_access maintained by the NASA Land Processes Distributed Active Archive Center (LP DAAC), USGS/Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, (Year). Source of image data product.",
  minZoom: 2,
  maxZoom: 18
});
//2007年〜
var pictureLayer09 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg", {
  attribution: "地理院タイル",
  minZoom: 14,
  maxZoom: 18
});
//2004年〜
const pictureLayer08 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg", {
  attribution: "地理院タイル",
  minZoom: 14,
  maxZoom: 18
});
//1988-1990写真
var pictureLayer07 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg", {
    attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1984-1986写真
const pictureLayer06 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg", {
    attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1979-1983写真
var pictureLayer05 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg", {
  attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1974-1978写真
var pictureLayer04 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg", {
  attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1961-1969写真
var pictureLayer03 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png", {
  attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1945写真
const pictureLayer02 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png", {
  attribution: "地理院タイル",
  minZoom: 10,
  maxZoom: 17
});
//1936写真
const pictureLayer01 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_riku10/{z}/{x}/{y}.png", {
  attribution: "地理院タイル",
  minZoom: 13,
  maxZoom: 18
});

// var pictureLayerArray = [pictureLayer01, pictureLayer02, pictureLayer03, pictureLayer04, pictureLayer05,
//   pictureLayer06, pictureLayer07, pictureLayer08, pictureLayer09, pictureLayer10
// ];
const pictureLayerArray = ["pictureLayer01", "pictureLayer02", "pictureLayer03", "pictureLayer04", "pictureLayer05",
  "pictureLayer06", "pictureLayer07", "pictureLayer08", "pictureLayer09", "pictureLayer10"
];

/*
数値地図25000   https://cyberjapandata.gsi.go.jp/xyz/lcm25k_2012/{z}/{x}/{y}.png
土地利用図   https://cyberjapandata.gsi.go.jp/xyz/lum200k/{z}/{x}/{y}.png

写真      https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg
1936写真    https://cyberjapandata.gsi.go.jp/xyz/ort_riku10/{z}/{x}/{y}.png
1945写真  https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png
1961-1969写真 https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png
1974-1978写真 https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg
1979-1983写真 https://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg
1984-1986写真 https://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg
1988-1990写真 https://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg
2004年〜      https://cyberjapandata.gsi.go.jp/xyz/airphoto/{z}/{x}/{y}.png
2007年〜  https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg

指定緊急避難場所(洪水)  https://cyberjapandata.gsi.go.jp/xyz/skhb01/{z}/{x}/{y}.geojson
指定緊急避難場所(内水氾濫) https://cyberjapandata.gsi.go.jp/xyz/skhb07/{z}/{x}/{y}.geojson
*/

/*
//令和元年10月の低気圧に伴う大雨  令和元年10月の低気圧に伴う大雨 正射画像（速報） 佐倉地区（千葉県千葉市、佐倉市、四街道市、印西市）佐倉地区（10/26撮影）
const disaster01 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191025oame_sakura_1026do_sokuho/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 10,
  maxZoom: 18,
  center: [35.693134, 140.216618]
});

//令和元年10月の低気圧に伴う大雨 正射画像（速報） 茂原地区（千葉県茂原市、睦沢町、長生村、長南町）茂原地区（10/26撮影）
const disaster02 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191025oame_mobara_1026do_sokuho/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 10,
  maxZoom: 18,
  center: [35.423749, 140.307426]
});

//令和元年10月の低気圧に伴う大雨 浸水推定段彩図 速報版 千葉県佐倉市周辺
const disaster03 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191025oame_mobara_1026do_sokuho/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 2,
  maxZoom: 15,
  center: [35.418993, 140.311546]
});

//令和元年10月の低気圧に伴う大雨 浸水推定段彩図 速報版 千葉県茂原市・大網白里市周辺
const disaster04 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191025oame_mobara_1026dansaizu_sokuho/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 2,
  maxZoom: 15,
  center: [35.491145, 140.318069]
});

//令和元年10月の低気圧に伴う大雨 浸水推定段彩図 空中写真判読版 一宮川水系（一宮川・豊田川・阿久川）茂原駅周辺
const disaster05 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191025oame_mobara_1028dansaizu_handoku/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 2,
  maxZoom: 15,
  center: [35.427526, 140.299444]
});

//令和元年台風第19号 正射画像 多摩川地区（東京都大田区、世田谷区、八王子市、立川市、府中市、昭島市、調布市、日野市、国立市、福生市、狛江市、多摩市、稲城市、あきる野市、神奈川県川崎市）多摩川地区（10/13撮影)
const disaster06 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191012typhoon19_tamagawa_1013do/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 10,
  maxZoom: 18,
  zoom: 11,
  center: [35.653391,139.491005]
});

//令和元年台風第19号 正射画像 都幾川地区（埼玉県川越市、東松山市、坂戸市、嵐山町、川島町）都幾川地区（10/13撮影）
const disaster07 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191012typhoon19_tokigawa_1013do/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 10,
  maxZoom: 18,
  zoom: 12,
  center: [35.997452,139.412899]
});

//令和元年台風第19号 正射画像 那珂川地区（茨城県水戸市、ひたちなか市、常陸大宮市、那珂市、城里町）那珂川地区（10/17撮影）
const disaster08 = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/20191012typhoon19_nakagawa_1017do/{z}/{x}/{y}.png", {
  attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>",
  minZoom: 10,
  maxZoom: 18,
  zoom: 11,
  center: [36.438961/140.425529]
});

const disasterLayerArray = ["disaster01","disaster02","disaster03","disaster04","disaster05","disaster06","disaster07","disaster08"];
*/

//ハザードマップ
var image_url = 'tileimg/koutouku72.png';
var migi = 139.8565;
var hidari = 139.766;
var shita =35.6055;
var ue = 35.7097;
var bounds = L.latLngBounds(
    [shita, hidari], //右下
    [ue, migi]  //左上
);

const koutouLayer = L.imageOverlay(image_url, bounds, {
    attribution: '江東区大雨ハザードマップ',
    opacity: 0.8
});

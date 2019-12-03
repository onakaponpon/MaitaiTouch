// this script is inspired from
// https://github.com/frogcat/leaflet-gsi-contour

//高度表示用のレイヤー
var ContourLayer = L.GridLayer.extend({
  initialize: function(url, options) {
    L.Util.setOptions(this, options);
    this._url = url;
    console.log("-----ContourLayer init---");
  },
  createTile: function(coords, done) {
    //console.log("createTile");
    var tile = L.DomUtil.create("canvas", "leaflet-tile");
    var ctx = tile.getContext("2d");
    var size = this.getTileSize();

    //ローディング画面表示用
    var loadingImg = new Image();
    loadingImg.src = "tileimg/newloading.gif";
    loadingImg.onload = function() {
      ctx.drawImage(loadingImg, 0, 0);
      if (done) done(null, tile);
    }

    tile.width = size.x;
    tile.height = size.y;

    if (coords.z <= 14) {
      this._url = "https://cyberjapandata.gsi.go.jp/xyz/dem/" + String(coords.z) + "/" + String(coords.x) + "/" + String(coords.y) + ".txt";
    } else if (coords.z == 15) {
      this._url = "https://cyberjapandata.gsi.go.jp/xyz/dem5a/" + String(coords.z) + "/" + String(coords.x) + "/" + String(coords.y) + ".txt";
    }




    //whereIsThisMap();
    //以下、最高点と最低点があった上での描画ルーチン
    //もしもすでにデータベースで404にタイルがあれば読み込まない。
    var getKey = String(coords.z) + "/" + String(coords.x) + "/" + String(coords.y);
    //データベースに問い合わせ
    var checkThisTileDem = localStorage.getItem(getKey);
    //結果が404なら読み込み処理を行わない。
    if (checkThisTileDem) {
      var obj = JSON.parse(checkThisTileDem);
      returnHigh = obj['h'];
      //console.log("h=" + returnHigh + "という記録があったので利用" + getKey);
      if (returnHigh == -100) {
        //さらに404だったので、空っぽのタイルを返す
        console.log(getKey + "は404だったのでエラーの画像を返す");
        var imgPic = new Image();
        imgPic.src = "./tileimg/notile.png";
        imgPic.onload = function() {
          ctx.drawImage(imgPic, 0, 0);
          console.log("エラー画像をreturn");
          if (done) done(null, tile);
        }
        //return tile; //ここでfunction関数終了
      }
    }
    //404にのっていなければ読み込み処理
    var xhr2 = new XMLHttpRequest(); //xhrへのリクエスト
    //ここより標高の取得
    xhr2.onload = function() {
      var dem = xhr2.responseText.split(/[,\n]/).map(function(a) {
        return Math.floor(parseFloat(a));
      });

      //あとの処理は読み込んだDemデータを使って行う。
      var img = ctx.createImageData(0x100, 0x100);
      let average = (_highestDem - _lowestDem) / 100;

      for (var i = 0; i <= 0xffff; i++) {
        if (dem[i] < 0) {
          //色の設定242,10,254
          img.data[i * 4 + 0] = 0xF2;
          img.data[i * 4 + 1] = 0x0A;
          img.data[i * 4 + 2] = 0xFE;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 5) {
          //色の設定153,74,255
          img.data[i * 4 + 0] = 0x99;
          img.data[i * 4 + 1] = 0x4A;
          img.data[i * 4 + 2] = 0xFF;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 10) {
          //色の設定120,114,255
          img.data[i * 4 + 0] = 0x78;
          img.data[i * 4 + 1] = 0x72;
          img.data[i * 4 + 2] = 0xFF;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 20) {
          //色の設定119,147,216
          img.data[i * 4 + 0] = 0x77;
          img.data[i * 4 + 1] = 0x93;
          img.data[i * 4 + 2] = 0xD8;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 30) {
          //色の設定121,171,179
          img.data[i * 4 + 0] = 0x79;
          img.data[i * 4 + 1] = 0xAB;
          img.data[i * 4 + 2] = 0xB3;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 40) {
          //色の設定132,206,118
          img.data[i * 4 + 0] = 0x84;
          img.data[i * 4 + 1] = 0xCE;
          img.data[i * 4 + 2] = 0x76;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 50) {
          //色の設定148,236,57
          img.data[i * 4 + 0] = 0x94;
          img.data[i * 4 + 1] = 0xEC;
          img.data[i * 4 + 2] = 0x39;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 60) {
          //色の設定 186,255,4
          img.data[i * 4 + 0] = 0xBA;
          img.data[i * 4 + 1] = 0xFF;
          img.data[i * 4 + 2] = 0x04;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 70) {
          //色の設定
          img.data[i * 4 + 0] = 0xB9;
          img.data[i * 4 + 1] = 0xF4;
          img.data[i * 4 + 2] = 0x00;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 80) {
          //色の設定
          img.data[i * 4 + 0] = 0xD2;
          img.data[i * 4 + 1] = 0xD1;
          img.data[i * 4 + 2] = 0x00;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem <= average * 90) {
          //色の設定
          img.data[i * 4 + 0] = 0xE5;
          img.data[i * 4 + 1] = 0xB0;
          img.data[i * 4 + 2] = 0x00;
          img.data[i * 4 + 3] = 0xA0;
        } else if (dem[i] - _lowestDem > average * 90) {
          //色の設定 fe8400
          img.data[i * 4 + 0] = 0xFF; //R
          img.data[i * 4 + 1] = 0x84; //G
          img.data[i * 4 + 2] = 0x00; //B
          img.data[i * 4 + 3] = 0xA0; //A
        }
      } //for文終了
      ctx.putImageData(img, 0, 0);
      if (done) done(null, tile);
    }; //onloadの締め

    xhr2.onerror = function() {
      console.log("タイル表示でエラー");
      if (done) done(null, tile);
    };
    //console.log("読み込み");
    xhr2.open('GET', L.Util.template(this._url, coords));
    xhr2.send();
    //console.log("標高の画像ををreturn");
    return tile;
  } //createTileの締め
});
L.contourLayer = function(url, options) {
  return new ContourLayer(url, options);
};


function whereIsThisMap() {
  var mapNorth = map.getBounds().getNorth();
  var mapWest = map.getBounds().getWest();
  var mapSouth = map.getBounds().getSouth();
  var mapEast = map.getBounds().getEast();
  searchDemMaxMin(mapWest, mapNorth, mapEast, mapSouth, map.getZoom());

}

//四隅の緯度経度を入れると、左上のタイル番号と座標、右下のタイル番号と座標を出す
//このルーチンが最初に呼び出される
function searchDemMaxMin(northWestTileX, northWestTileY, SouthWestTileX, SouthWestTileY, zoom) {
  //console.log("searchDemMaxMin");
  if (zoom <= 15) {
    let [xtile1, ytile1, x1, y1, zoom1] = latladToTileNumber(northWestTileX, northWestTileY, zoom);
    let [xtile2, ytile2, x2, y2, zoom2] = latladToTileNumber(SouthWestTileX, SouthWestTileY, zoom);
    //ここで高低情報を返す
    let [_highestDem, _lowestDem] = calcAreaDem(xtile1, ytile1, x1, y1, xtile2, ytile2, x2, y2, zoom);
    //console.log("最終結果searchDemMaxMin" + _highestDem + " " + _lowestDem);
    return [_highestDem, _lowestDem];
    /*  let addText = calcAreaDem(xtile1, ytile1, x1, y1, xtile2, ytile2, x2, y2, zoom);
      return (
        zoom1 + "/" + xtile1 + "/" + ytile1 + " 左上タイル内の座標は(" + x1 + "," + y1 + ")<br>" +
        zoom2 + "/" + xtile2 + "/" + ytile2 + " 右下タイル内の座標は(" + x2 + "," + y2 + ")  " +
        "横のタイルの数" + (xtile2 - xtile1 + 1) + " 縦のタイルの数" + (ytile2 - ytile1 + 1) +
        "<br>" + addText);
        */
  }
};

//緯度経度から、タイルの番号と、タイル内での座標を出す
//ファイルの読み書きはなし。
function latladToTileNumber(longitude, latitude, zoom) { //x,y,zoom 経度、緯度の順番
  var lat_rad = latitude * Math.PI / 180; //latitudeは緯度なので上下方向
  var n = Math.pow(2, zoom);
  let xtile = Math.floor((longitude + 180.0) / 360.0 * n);
  let ytile = Math.floor((1.0 - Math.log(Math.tan(lat_rad) + (1 / Math.cos(lat_rad))) / Math.PI) / 2.0 * n);
  //タイルの中での座標を求める
  //leafletの関数を使うとこんなに簡単にできるとは....
  var testLatLng = L.latLng(latitude, longitude);
  let answer = map.project(testLatLng, zoom);
  let xPixelinTile = Math.floor(answer.x % 256);
  let yPixelinTile = Math.floor(answer.y % 256);
  //return (zoom+"/"+xtile+"/"+ytile+ "タイル内の座標は " + Math.floor(answer.x % 256) + " " + Math.floor(answer.y % 256)+"<br>"+
  //"横のタイルの数"+"縦のタイルの数");
  return [xtile, ytile, xPixelinTile, yPixelinTile, zoom];
};

//左上と右下のタイル番号と座標を入れれば、全部の範囲の高さを計算する
function calcAreaDem(xtile1, ytile1, x1, y1, xtile2, ytile2, x2, y2, zoom) {
  //console.log("calcAreaDem");
  let maxDem = 0;
  let maxtileX = 0;
  let maxtileY = 0;
  let maxX = 0;
  let maxY = 0;
  //指定されたタイルの指定された座標から(座標まで)標高を合計し、最高値と最低値の値と場所を記録する
  //yokoとtateをかけた値がタイルの枚数
  let yokoTiles = xtile2 - xtile1 + 1; //横のタイルの枚数
  let tateTiles = ytile2 - ytile1 + 1; //縦のタイルの枚数
  let totalTiles = yokoTiles * tateTiles; //トータルの枚数

  let resultStr = "";

  let returnHigh = -100;
  var returnLow = 5000;

  //for文での処理
  //正式版
  /*
          for (var tate = ytile1; tate <= ytile2; tate++) {
            for (var yoko = xtile1; yoko <= xtile2; yoko++) {
              if (tate == ytile1) { //一番上の列
                if (yoko == xtile1) { //左上の角
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, x1, y1, 256, 256);
                } else if (yoko == xtile2) { //右上の角
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, y1, x2, 256);
                } else { //それ以外の部分(間のやつ)
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, y1, 256, 256);
                }
              } else if (tate == ytile2) { //最終列
                if (yoko == xtile1) { //左下の角
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, x1, 0, 256, y2);
                } else if (yoko == xtile2) { //右下の角
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, 0, x2, y2);
                } else { //それ以外のところ
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, 0, 256, y2);
                }
              } else { //それ以外
                if (yoko == xtile1) { //左のところ
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, x1, 0, 256, 256);
                } else if (yoko == xtile2) { //右下の角
                  [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, 0, x2, 256);
                } else { //それ以外のところ
                  var getKey = String(zoom) + "/" + String(yoko) + "/" + String(tate);
                  var checkThisTileDem = localStorage.getItem(getKey);
                  if (checkThisTileDem) {
                    var obj = JSON.parse(checkThisTileDem);
                    returnHigh = obj['h'];
                    returnLow = obj['l'];
                    console.log("h=" + returnHigh + "という記録があったので利用" + getKey);
                  } else {
                    console.log("記録がないので検索して決める" + getKey);
                    [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, 0, 256, 256);
                  }
                }
              }
              //高さの判定
              if (returnHigh != -100) {
                if (returnHigh > _highestDem) {
                  _highestDem = returnHigh;
                  console.log("最高標高の更新");
                }
                if (returnLow < _lowestDem) {
                  _lowestDem = returnLow;
                }
              }
            }
          } //for文の終わり
  */

  //簡易版版
  for (var tate = ytile1; tate <= ytile2; tate++) {
    for (var yoko = xtile1; yoko <= xtile2; yoko++) {

      //それ以外のところ
      var getKey = String(zoom) + "/" + String(yoko) + "/" + String(tate);
      var checkThisTileDem = localStorage.getItem(getKey);
      if (checkThisTileDem) {
        var obj = JSON.parse(checkThisTileDem);
        returnHigh = obj['h'];
        returnLow = obj['l'];
        //console.log("h=" + returnHigh + "という記録があったので利用" + getKey);
      } else {
        //  console.log("記録がないので検索して決める" + getKey);
        [returnHigh, returnLow] = searchHighDemAndXY(yoko, tate, zoom, 0, 0, 256, 256);
      }

      //高さの判定
      if (returnHigh != -100) {
        if (returnHigh > _highestDem) {
          _highestDem = returnHigh;
          //  console.log("最高標高の更新");
        }
        if (returnLow < _lowestDem) {
          _lowestDem = returnLow;
        }
      }
    }
  } //for文の終わり

  //for文を抜けたので、結果はちゃんと出ているはず。

  //return ("縦のタイル" + tateTiles + "一番高い標高は" + maxDem + "で、" + zoom + "/" + maxtileX + "/" + maxtileY + "の(" + maxX + "," + maxY + ")にあります");
  //resultStr = "_highestDem" + _highestDem + " _lowestDem" + _lowestDem;
  //  return resultStr;
  console.log("今回の範囲計算で結果は" + _highestDem + "と" + _lowestDem);
  if (_highestDem == -100) {
    showShortDialog("<center>計算中</center>", "ちょっとだけお待ち下さい<br />がんばって計算しています<br />もう一度ボタンを押してみてください", 2000);
    return [0, 0];
  } else {
    return [_highestDem, _lowestDem];
  }
};

//指定されたタイル番号と、座標から、最高点と最低点を返す
//ここで最終的な高低情報が返される
function searchHighDemAndXY(tilex, tiley, zoom, startx, starty, endx, endy) {
  var highestDem = -100; //最高標高
  var lowestDem = 5000; //最低標高
  var totalhighestDem = -100; //全部の最高標高
  var totallowestDem = 5000; //全部の最低標高


  const xhr = new XMLHttpRequest(); //xhrへのリクエストオブジェクト作成
  if (zoom <= 14) {
    var url = "https://cyberjapandata.gsi.go.jp/xyz/dem/" + String(zoom) + "/" + String(tilex) + "/" + String(tiley) + ".txt";
  } else if (zoom == 15) {
    var url = "https://cyberjapandata.gsi.go.jp/xyz/dem5a/" + String(zoom) + "/" + String(tilex) + "/" + String(tiley) + ".txt";
  }

  //データベースを確認して404のチェック
  var keyString = String(zoom) + "/" + String(tilex) + "/" + String(tiley);
  var checkThisTileDem = localStorage.getItem(keyString);

  if (checkThisTileDem) {
    //記録があった場合
    //console.log("データベースに記録あり" + keyString);
    //404かどうかチェック
    var obj = JSON.parse(checkThisTileDem);
    returnHigh = obj['h'];
    if (returnHigh == -100) {
      //404に載っている
      //console.log("hが-100で404に載っていた");
      return [0, 0];
    } else if (startx == 0 && starty == 0 && endx == 0 && endy == 0) {
      //タイルの範囲全部の問い合わせの場合、
      //すでにある記録をそのまま返す
      lowestDem = obj['l'];
      return [highestDem, lowestDem];
    }
  }

  //データベースに記録がなかった場合
  //  console.log("データベースに記録なし、読み込み処理開始");
  xhr.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
      //console.log("読み込み完了したので処理開始" + keyString);
      var dem = xhr.responseText.split(/[,\n]/).map(function(a) {
        return Math.floor(parseFloat(a));
      });

      //最初は全部計算
      for (var i = 0; i <= 0xffff; i++) {
        if (dem[i] !== "e") {
          if (dem[i] > totalhighestDem) {
            totalhighestDem = dem[i];
          }
          if (dem[i] < totallowestDem) {
            totallowestDem = dem[i];
          }
        }
      } //for終了

      //タイルまるごとの結果だったら、今後のことを考え記録する
      //console.log("まるごとの計算だったので標高データ一部を記録" + keyString);
      var obj = {
        //  demArray: dem
        h: totalhighestDem,
        l: totallowestDem
      };

      var obj = JSON.stringify(obj);
      localStorage.setItem(keyString, obj);

      if (startx != 0 || starty != 0 || endx != 256 || endy != 256) {
        //指定の場所から計算
        //console.log(keyString + "特定の場所から検索");
        for (var i = startx * starty; i <= 0xffff; i++) {
          if (Math.floor(i % 256) >= startx && Math.floor(i / 256) >= starty &&
            Math.floor(i % 256) <= endx && Math.floor(i / 256) <= endy) {
            if (dem[i] != "e") {
              if (dem[i] > highestDem) {
                highestDem = dem[i];
                //console.log("最高標高の更新");
                contourLayer.remove(map);
              }
              if (dem[i] < lowestDem) {
                lowestDem = dem[i];
              }
            }
          }
        }
        //console.log(keyString + "部分検索した結果" + highestDem + " " + lowestDem);
      } else {
        //タイル全部の範囲だった場合
        //さきほど全部計算しているのでその値を渡す
        highestDem = totalhighestDem;
        lowestDem = totallowestDem;
      }
    } else {
      //ステータス異常の時の対応
      console.log("404!!");
      //console.log("ストレージに書き込むよ");
      //localStorageに書き込み
      var obj = {
        h: -100,
        l: 5000
      };
      var obj = JSON.stringify(obj);
      // ない、というデータを書き込む
      localStorage.setItem(keyString, obj);
      console.log("404記録書き込んだよ");
      return;
    } //ステータス異常の場合のif終了
  }; //onloadの閉じるやつ
  xhr.onerror = function() {
    if (done) done(null, tile);
  };

  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', true);

  //  xhr.withCredentials = true;
  xhr.send();
  //console.log("highestDem, lowestDem]返します" + keyString + " " + highestDem + " " + lowestDem);

  //  return p;
  return [highestDem, lowestDem];
}; //function終了

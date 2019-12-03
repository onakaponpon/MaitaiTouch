// inspired from Makuhin's Home Page
// https://hakuhin.jp/js/gamepad.html

(function() {

  const platform = 0;
  // ------------------------------------------------------------
  // Gemapad API に対応しているか調べる
  // ------------------------------------------------------------
  if (!(window.Gamepad)) return;
  if (!(navigator.getGamepads)) return;

  // ------------------------------------------------------------
  // "aaa" という ID 属性のエレメントを取得する
  // ------------------------------------------------------------
  var element = document.getElementById("gamepad");

  // ------------------------------------------------------------
  // 一定時間隔で、繰り返し実行される関数
  // ------------------------------------------------------------
  setInterval(function() {
    // var str = "";

    // ゲームパッドリストを取得する
    var gamepad_list = navigator.getGamepads();

    // ゲームパッドリスト内のアイテム総数を取得する
    var num = gamepad_list.length;

    var i;
    for (i = 0; i < num; i++) {
      // ------------------------------------------------------------
      // Gamepad オブジェクトを取得する
      // ------------------------------------------------------------
      var gamepad = gamepad_list[i];
      if (!gamepad) continue;


      var buttons = gamepad.buttons;

      // str += "buttons: {\n";
      var j;
      var n = buttons.length;
      for (j = 0; j < n; j++) {

        var button = buttons[j];
      }


      // ------------------------------------------------------------
      // 軸リスト
      // ------------------------------------------------------------
      var axes = gamepad.axes;


      var j;
      var n = axes.length;
      for (j = 0; j < n; j++) {

      }

      //開発用と本番用の切り替えのための変数
      if (platform == 1) {
        var rJSX = axes[3];
        var rJSY = axes[4];
      } else {
        var rJSX = axes[2];
        var rJSY = axes[3];
      }


      //  map.panBy(Math.floor(axes[0]*1000),Math.floor(axes[1]*1000));
      if (Math.abs(axes[0]) > 0.2 || Math.abs(axes[1]) > 0.2) {
        resetMySousaTime();
        showShortDialog("移動します", "<img src='tileimg/c/idou.png'><br />", 1000);
        _nowMove = true;
        const point = L.point(Math.floor(axes[0] * 100), Math.floor(axes[1] * 100));
        map.panBy(point);
      } else {
        //止まって1秒は動いていることにしておく
        setTimeout(function() {
          _nowMove = false;
        }, 500);
      }


      if (Math.abs(rJSX) + Math.abs(rJSY) > 0.1) {
        //写真の切り替え(10種類ある)
        //-πからプラスπまでの角度を取る
        axesTheta = Math.atan2(rJSY, rJSX);
        //console.log("axesTheta is " + axesTheta.toFixed(4));
        var kizami = (Math.PI / 10);
        resetMySousaTime();
        showShortDialog("空中写真", "<img src='tileimg/c/guriguri.png'><br />スティックを時計回りに<br />グリグリ回して下さい", 500);
        if (axesTheta > kizami * -5 && axesTheta <= kizami * -4) {
          // showShortDialog("空中写真", "最新のもの", 500);
          //console.log("kizami 1");
          pictureLayer10.addTo(map);
        } else if (axesTheta > kizami * -4 && axesTheta <= kizami * -3) {
          // showShortDialog("空中写真", "2007年〜", 500);
          //console.log("kizami 2");
          pictureLayer09.addTo(map);
        } else if (axesTheta > kizami * -3 && axesTheta <= kizami * -2) {
          // showShortDialog("空中写真", "2004年〜", 500);
          // console.log("kizami 3");
          pictureLayer08.addTo(map);
        } else if (axesTheta > kizami * -2 && axesTheta <= kizami * -1) {
          // showShortDialog("空中写真", "1988-1990", 500);
          // console.log("kizami 4");
          pictureLayer07.addTo(map);
        } else if (axesTheta > kizami * -1 && axesTheta <= kizami * 0) {
          // showShortDialog("空中写真", "1984-1986", 500);
          // console.log("kizami 5");
          pictureLayer06.addTo(map);
        } else if (axesTheta > kizami * 0 && axesTheta <= kizami * 1) {
          // showShortDialog("空中写真", "1979-1983", 500);
          // console.log("kizami 6");
          pictureLayer05.addTo(map);
        } else if (axesTheta > kizami * 1 && axesTheta <= kizami * 2) {
          // showShortDialog("空中写真", "1974-1978", 500);
          // console.log("kizami 7");
          pictureLayer04.addTo(map);
        } else if (axesTheta > kizami * 2 && axesTheta <= kizami * 3) {
          // showShortDialog("空中写真", "1961-1969", 500);
          // console.log("kizami 8");
          pictureLayer03.addTo(map);
        } else if (axesTheta > kizami * 3 && axesTheta <= kizami * 4) {
          // showShortDialog("空中写真", "1945", 500);
          // console.log("kizami 9");
          pictureLayer02.addTo(map);
        } else if (axesTheta > kizami * 4 && axesTheta <= kizami * 5) {
          // showShortDialog("空中写真", "1936", 500);
          // console.log("kizami 10");
          pictureLayer01.addTo(map);
        } else if (axesTheta > kizami * 5 && axesTheta <= kizami * 6) {
          // console.log("kizami 11");
          pictureLayer01.remove(map);
        } else if (axesTheta > kizami * 6 && axesTheta <= kizami * 7) {
          // console.log("kizami 12");
          pictureLayer02.remove(map);
        } else if (axesTheta > kizami * 7 && axesTheta <= kizami * 8) {
          // console.log("kizami 13");
          pictureLayer03.remove(map);
        } else if (axesTheta > kizami * 8 && axesTheta <= kizami * 9) {
          // console.log("kizami 14");
          pictureLayer04.remove(map);
        } else if (axesTheta > kizami * 9 && axesTheta <= kizami * 10) {
          // console.log("kizami 15");
          pictureLayer05.remove(map);
        } else if (axesTheta > kizami * -6 && axesTheta <= kizami * -5) {
          // console.log("kizami 20");
          //pictureLayer10.remove(map);
        } else if (axesTheta > kizami * -7 && axesTheta <= kizami * -6) {
          // console.log("kizami 19");
          pictureLayer09.remove(map);
        } else if (axesTheta > kizami * -8 && axesTheta <= kizami * -7) {
          // console.log("kizami 18");
          pictureLayer08.remove(map);
        } else if (axesTheta > kizami * -9 && axesTheta <= kizami * -8) {
          // console.log("kizami 17");
          pictureLayer07.remove(map);
        } else if (axesTheta > kizami * -10 && axesTheta <= kizami * -9) {
          // console.log("kizami 16");
          pictureLayer06.remove(map);
        }
      } else {
        removePicturemap(0);
      }

      if (platform == 1) {
        var redBtn = buttons[1]; //赤色ボタン
        var yelBtn = buttons[3]; //黃色ボタン
        var blueBtn = buttons[2]; //青色ボタン
        var grnBtn = buttons[0]; //緑色ボタン
        var lbBtn = buttons[4]; //左奥上ボタン
        var rbBtn = buttons[5]; //右奥上ボタン
      } else {
        var redBtn = buttons[1]; //赤色ボタン
        var yelBtn = buttons[3]; //黃色ボタン
        var blueBtn = buttons[2]; //青色ボタン
        var grnBtn = buttons[0]; //緑色ボタン
        var lbBtn = buttons[4]; //左奥上ボタン
        var rbBtn = buttons[5]; //右奥上ボタン
      }
      //標高の表示の際に、移動しながらだと負荷がかかるので、静止状態のみ動作する
      //ズームは5から15
      if (redBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2 && _nowMove == false) {
        //console.log("redbtn OK");
        resetMySousaTime();
        if (map.getZoom() < 5) {
          showShortDialog("高さの地図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル5から15で表示できます", 2000);
          map.setZoom(5);
        } else if (map.getZoom() > 15) {
          showShortDialog("高さの地図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル5から15で表示できます", 2000);
          map.setZoom(15);
        } else {
          if (_highestDem == -100) {
            whereIsThisMap();
            return;
          }
          showShortDialog("高さの地図", "<img src='tileimg/c/btns.png'><br />表示されている範囲の高さを<br />色で表します<br /><img src='tileimg/demcolor.png'>", 500);
          //whereIsThisMap();
          if (map.hasLayer(contourLayer) == false) {
            contourLayer.addTo(map);
          } else {
            return;
          }
        }
      } else if (redBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2 && _nowMove == true) {
        showShortDialog("計算中", "ちょっとだけおまちください", 1000);
      } else {
        if (map.hasLayer(contourLayer) == true) {
          //contourLayer.remove(map);
          map.removeLayer(contourLayer);
        }
      }

      if (blueBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        if (map.getZoom() < 10) {
          showShortDialog("明治時代の低湿地", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル10から15で表示できます", 2000);
          map.setZoom(10);
        } else if (map.getZoom() > 15) {
          showShortDialog("明治時代の低湿地", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル10から15で表示できます", 2000);
          map.setZoom(15);
        } else {
          showShortDialog("明治時代の低湿地", "<img src='tileimg/c/btns.png'><br /><span style='color:red'>関東・中部・近畿地区のみ</span><br />明治時代の地質を色別に表示します<br /><img src='tileimg/meiji.png'><br />三角点が整備される前のデータもあり<br />地域によってズレがあります", 500);
          if (map.hasLayer(meijiLayer) == false) {
            meijiLayer.addTo(map);
          } else {
            return;
          }
        }
      } else {
        if (map.hasLayer(meijiLayer) == true) {
          meijiLayer.remove(map);
        }
      }

      //緑のボタン
      if (grnBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        if (map.getZoom() < 11) {
          showShortDialog("治水地形分類図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル11から16で表示できます", 2000);
          map.setZoom(11);
        } else if (map.getZoom() > 16) {
          showShortDialog("治水地形分類図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル11から16で表示できます", 2000);
          map.setZoom(16);
        } else {
          showShortDialog("治水地形分類図", "<img src='tileimg/c/btns.png'><br /><span style='color:red'>大きめの川周辺にデータがあります</span><br />大昔の地質を表示します<br /><img src='tileimg/chisuichikei.png'><br />レベル12ぐらいまでズームアウトすると<br />見つけやすいです", 500);
          if (map.hasLayer(chisuiLayer) == false) {
            chisuiLayer.addTo(map);
          } else {
            return;
          }
        }
      } else {
        if (map.hasLayer(chisuiLayer) == true) {
          chisuiLayer.remove(map);
        }
      }

      //黄色いボタン
      if (yelBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        if (map.getZoom() < 11) {
          showShortDialog("土地利用図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル11から14で表示できます", 2000);
          map.setZoom(11);
        } else if (map.getZoom() > 14) {
          showShortDialog("土地利用図", "<img src='tileimg/c/btns.png'><br />このレベルでは表示できません<br />レベル11から14で表示できます", 2000);
          map.setZoom(14);
        } else {
          showShortDialog("土地利用図", "<img src='tileimg/c/btns.png'><br />昔の土地の使われ方を示します<br />35年以上前の地図です<br /><img src='tileimg/tochiRiyou.png'>", 500);
          if (map.hasLayer(tochiRiyouLayer) == false) {
            tochiRiyouLayer.addTo(map);
          } else {
            return;
          }
        }
      } else {
        if (map.hasLayer(tochiRiyouLayer) == true) {
          tochiRiyouLayer.remove(map);
        }
      }

      //ズームインとズームアウト
      if (lbBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        _nowMove = true;
        showShortDialog("ズームアウト", "<img src='tileimg/c/zoom.png'><br />レベル" + String(map.getZoom() - 1) + "にします", 500);
        map.zoomOut(1);
        setTimeout(function() {
          _nowMove = false;
        }, 500);
      }
      if (rbBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        _nowMove = true;
        if (map.getZoom() > 15 && map.hasLayer(keisya)) {
          showShortDialog("ズームイン", "<img src='tileimg/c/zoom.png'><br />傾斜量図はこの倍率だと表示できません", 2000);
          //  map.setZoom(15);
        } else if (map.getZoom() > 15 && map.hasLayer(anaglypLayer)) {
          showShortDialog("ズームイン", "<img src='tileimg/c/zoom.png'><br />アナグリフはこの倍率だと表示できません", 2000);
        } else {
          showShortDialog("ズームイン", "<img src='tileimg/c/zoom.png'><br />レベル" + String(map.getZoom() + 1) + "にします", 500);
          map.zoomIn(1);
        }
        setTimeout(function() {
          _nowMove = false;
        }, 500);
      }
      if (yelBtn.pressed && Math.abs(axes[0]) < 0.2 && Math.abs(axes[1]) < 0.2) {
        //getPosition();
        //map.panTo(position.coords.latitude,position.coords.longitude);
      }

      //十字ボタンの処理-----------------------
      //baseLayerArray = ["std", "blank", "keisya", "ineiKifukLayer"];
      if (platform == 1) { //macの時
        var upBtn = buttons[11]; //上ボタン
        var lftBtn = buttons[13]; //左ボタン
        var dwnBtn = buttons[12]; //下ボタン
        var rgtBtn = buttons[14]; //右ボタン
      } else {
        var upBtn = buttons[12]; //上ボタン
        var lftBtn = buttons[14]; //左ボタン
        var dwnBtn = buttons[13]; //下ボタン
        var rgtBtn = buttons[15]; //右ボタン
      }

      if (upBtn.pressed) { //上
        if (map.getZoom() > 18) {
          showShortDialog("標準地図", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル0から18で表示できます", 2000);
          map.setZoom(18);
        } else {
          showShortDialog("標準地図", "<img src='tileimg/c/base.png'><br />詳細なところまでわかる地図", 1500);
          std.addTo(map);
          removeBaseemap(1);
        }
      }
      if (lftBtn.pressed) { //左
        if (map.getZoom() < 5) {
          showShortDialog("淡色地図", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル5から18で表示できます", 2000);
          map.setZoom(5);
        } else if (map.getZoom() > 18) {
          showShortDialog("淡色地図", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル5から18で表示できます", 2000);
          map.setZoom(18);
        } else {
          showShortDialog("淡色地図", "<img src='tileimg/c/base.png'><br />色が薄めなので<br />他の地図と重ねるのに便利", 1500);
          blank.addTo(map);
          removeBaseemap(2);
        }
      }

      if (dwnBtn.pressed) { //下
        if (map.getZoom() < 3) {
          showShortDialog("傾斜量図", "<img src='tileimg/c/base.png'><br />span style='color:red'>このレベルでは表示できません</span><br />レベル3から15で表示できます", 2000);
          map.setZoom(3);
        } else if (map.getZoom() > 15) {
          showShortDialog("傾斜量図", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル3から15で表示できます", 2000);
          map.setZoom(15);
        } else {
          showShortDialog("傾斜量図", "<img src='tileimg/c/base.png'><br />傾きの強さを<br />色の濃さで表しています<br /><img src='tileimg/ineikihuku.png'>", 1500);
          keisya.addTo(map);
          removeBaseemap(3);
        }
      }
      if (rgtBtn.pressed) { //右
        if (map.getZoom() < 2) {
          showShortDialog("アナグリフ", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル2から16で表示できます", 2000);
          map.setZoom(2);
        } else if (map.getZoom() > 16) {
          showShortDialog("アナグリフ", "<img src='tileimg/c/base.png'><br /><span style='color:red'>このレベルでは表示できません</span><br />レベル2から16で表示できます", 2000);
          map.setZoom(16);
        } else {
          showShortDialog("アナグリフ", "<img src='tileimg/c/base.png'><br />3Dメガネをかけると<br />立体的に表示されます", 1500);
          anaglypLayer.addTo(map);
          removeBaseemap(4);
        }
      }
      //セレクトボタン
      if (buttons[8].pressed) {
        //titlemap.addTo(map);
        showShortDialog("消去", "<img src='tileimg/c/selectstart.png'><br />描かれた線を消去しました", 1500);
        clearCan();
      }
      //スタートボタン
      if (buttons[9].pressed) {
        showShortDialog("重ねるハザードマップへのリンク", "<img src='tileimg/c/selectstart.png'><br />携帯のカメラで撮影してください</ br>" + "<div id='qrcodeD'>", 10000);
        var displayStr = "https://disaportal.gsi.go.jp/maps/index.html?ll=";
        displayStr += map.getCenter().lat;
        displayStr += "," + map.getCenter().lng;
        displayStr += "&z=14";
        displayStr += "&base=pale&ls=flood_list_l2%2C0.8%7Cflood_list%2C0.8%7Ctameike_raster%2C0.8%7Cdisaster1%7Cdisaster7&disp=11111&vs=c1j0l0u0";
        console.log("URL  " + displayStr);
        //makeKasaneruMapQR(map.getCenter().lat, map.getCenter().lang, map.getZoom());
        $("#qrcodeD").qrcode({
          text: displayStr
        });
      }

      //左右の下Zとセレクトボタンが同時に押されたら、現在の地図情報の記録
      if (buttons[6].pressed && buttons[7].pressed && buttons[8].pressed) {
        setMapLocation();
      }

      if (buttons[6].pressed) {
        koutouLayer.addTo(map);
      }
      if (buttons[7].pressed) {
        koutouLayer.remove(map);
      }

    } //ここが大本の終了部分
    //element.textContent = str;
  }, 1000 / 60);
})();

//引数のmymap以外を削除する命令
function removePicturemap(mymap) {
  //  resetMySousaTime();
  for (i = 1; i < 11; i++) {
    if (mymap != i) {
      var evalStgring = String(pictureLayerArray[i - 1]) + ".remove(map);";
      eval(evalStgring);
    }
  }
}

//十字ボタン部分で、引数のmymap以外を削除する命令
function removeBaseemap(mymap) {
  resetMySousaTime();
  for (i = 1; i < 5; i++) {
    if (mymap != i) {
      var evalStgring = String(baseLayerArray[i - 1]) + ".remove(map);";
      eval(evalStgring);
    }
  }
}

function setMapLocation() {
  //データベースに現在のマップの位置や倍率、初期設定のマップなどを書き込む
  // ベースレイヤーは = ["std", "blank", "keisya", "anaglypLayer"];
  var whatIsNowBaseMap = 0;
  if (map.hasLayer(blank)) {
    whatIsNowBaseMap = 1;
  } else if (map.hasLayer(keisya)) {
    whatIsNowBaseMap = 2;
  } else if (map.hasLayer(anaglypLayer)) {
    whatIsNowBaseMap = 3;
  }
  //localStorageに書き込み
  var obj = {
    x: map.getCenter().lat,
    y: map.getCenter().lng,
    z: map.getZoom(),
    defaultmap: whatIsNowBaseMap
  };
  var obj = JSON.stringify(obj);
  // ない、というデータを書き込む
  localStorage.setItem("defaultMapLocation", obj);
  console.log("マップの情報を記録しましたよ");
  showShortDialog("管理者用コマンド", "<img src='tileimg/a01.gif'><br />現在のマップの情報を記録しました", 1000);
}

function getMapLocation() {
  //位置情報の許可がない場合
  //データベースを読み込む
  var checkDefaultMapInfo = localStorage.getItem("defaultMapLocation");
  if (checkDefaultMapInfo) {
    var mapInfo = JSON.parse(checkDefaultMapInfo);
    map = L.map('mapdiv', {
      messagebox: true,
      center: [mapInfo['x'], mapInfo['y']],
      zoomControl: false, //ズームボタンの非表示
      minZoom: 5,
      maxZoom: 18,
      dragging: false, // default true
      zoom: mapInfo['z']
    });
    switch (mapInfo['defaultmap']) {
      case 0:
        std.addTo(map);
        break;
      case 1:
        blank.addTo(map);
        break;
      case 2:
        keisya.addTo(map);
        break;
      case 3:
        anaglypLayer.addTo(map);
        break;
      default:
        blank.addTo(map);
        break;
    }
    showShortDialog("まいたいタッチ起動", "こんにちは!", 1000);
  } else {
    map = L.map('mapdiv', {
      messagebox: true,
      center: [35.34341500896355, 138.72539520263675],
      zoomControl: false, //ズームボタンの非表示
      minZoom: 5,
      maxZoom: 18,
      dragging: false, // default true
      zoom: 11
    });
    std.addTo(map);
  }
}

function showShortDialog(title, mymessage, second) {
  resetMySousaTime();
  var message = '<p style="color:blue;text-align:center;">' + title + '</p>';
  // message += '<p>' + mymessage + '</p><img src="tileimg/a01.gif" style="float:left">';
  message += '<p>' + mymessage + '</p>';
  map.messagebox.setPosition('topleft'); //  'topleft', 'topright', 'bottomleft', 'bottomright'
  map.messagebox.options.timeout = second; // default timeout 3000 millisecond
  map.messagebox.show(message);
}

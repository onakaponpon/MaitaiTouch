$(function makeKasaneruMapQR(x,y,z){
	//座標を渡した文字列
    var returnString = "https://disaportal.gsi.go.jp/maps/index.html?ll="+x+","+y+"&z="+z
    +"&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdisaster1&disp=01010&vs=c1j0l0u0";

	$('#hoge').qrcode({
		text: returnString,
		width: 600, //横幅
		height: 600, //縦幅
		render: 'canvas', //tableまたはcanvas
	});
});

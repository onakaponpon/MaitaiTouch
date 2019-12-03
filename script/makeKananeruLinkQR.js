/*
https://disaportal.gsi.go.jp/maps/index.html?
ll=35.125665,136.738844&z=13
&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdisaster1&disp=01010&vs=c1j0l0u0
*/

// function makeKasaneruMapQR(x,y,z){
//   var returnString = "https://disaportal.gsi.go.jp/maps/index.html?ll="+x+","+y+"&z="+z
//   +"&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdisaster1&disp=01010&vs=c1j0l0u0";
//   return returnString;
// }

// function makeKasaneruMapQR(x,y,z){
//   var returnString = "https://disaportal.gsi.go.jp/maps/index.html?ll="+x+","+y+"&z="+z
//   +"&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdisaster1&disp=01010&vs=c1j0l0u0";
//     $('#qrcode').qrcode({
//         text: returnString,
//         width: 200,
//         height: 200,
//         background : "#fff",
//         foreground : "#000"
//     });
// }

https://disaportal.gsi.go.jp/maps/index.html?ll=35.269764,138.435974&z=14&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdosha_kiken_nadare%2C0.8%7Cdosha_kiken_jisuberi%2C0.8%7Cdosha_kiken_kyukeisha%2C0.8%7Cdosha_kiken_dosekiryu%2C0.8%7Cdosha_keikai_jisuberi%2C0.8%7Cdosha_keikai_dosekiryu%2C0.8%7Cdosha_keikai_kyukeisha%2C0.8%7Cdisaster1%7Cdisaster2&disp=0111111111111&vs=c1j0l0u0
$(function makeKasaneruMapQR(x,y,z){
	//現在表示しているページのURLをQRコード化する
    var returnString = "https://disaportal.gsi.go.jp/maps/index.html?ll="+x+","+y+"&z="+z
    +"&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cflood_list%2C0.8%7Cflood_list_l2%2C0.8%7Cdisaster1&disp=01010&vs=c1j0l0u0";

	$('#hoge').qrcode({
		text: returnString,
		width: 600, //横幅
		height: 600, //縦幅
		render: 'canvas', //tableまたはcanvas
	});
});

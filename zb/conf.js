//自动识别渠道码
var shareName = window.location.host.replace(/\./g, "");
var $_GET = (function () {
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if (typeof (u[1]) == "string") {
	u = u[1].split("&");
	var get = {};
	for (var i in u) {
	  var j = u[i].split("=");
	  get[j[0]] = j[1];
	}
	return get;
  } else {
	return {};
  }
})();
if ($_GET['channelCode']) {
  shareName = $_GET['channelCode']
}
//var o_c = '';//固定渠道码
var o_c = shareName;//自动渠道码
var android_jump_time = 5;//安卓跳转时间，单位：秒
var ios_jump_time = 5;//IOS跳转时间，单位：秒
img_data_domain = img_data_domain + '/page';//重写资源地址
var kf_url = 'https://dotx.eoeozxjglpg.xyz/index?key=a1026bde16ba8bbd307f41a900a6a4b6';//客服链接
var shangwu_url = '';//商务联系链接
var ios_jiaocheng_url = '';//苹果教程地址
var android_jiaocheng_url = '';//安卓教程地址
var app_name = '5aaZ6Imy55u05pKtQVBQ';//应用名称
var seo_title = '5aaZ6Imy';//网页title
var tg_url = '';//推广广告地址，留空不显示
load_js_css('./body.js'.replace('img_data_domain', img_data_domain), 'js');//控制版面
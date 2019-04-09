function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //var r = window.location.search.substr(1).match(reg);
  //用decodeURI解决url中文问题
  var url = decodeURI(window.location.search);
  var r = url.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}


// 判断是否是移动端
function checkPlatform() {
  var utils = {};
  var isBudge = function () {//手持设备：ipad、iphone、android、ipod
    return /mobile/i.test(navigator.userAgent);
  }()
  var isMac = function () {
    return /macintosh/i.test(navigator.userAgent);
  }();
  var isWindows = function () {
    return /windows nt/i.test(navigator.userAgent);
  }();
  var isLinux = function () {
    return /linux/i.test(navigator.userAgent);
  }();
  var isIpad = function () {
    return /ipad/i.test(navigator.userAgent);
  }()
  utils.isMobile = !(isWindows || isMac || (isLinux && !isBudge) || isIpad);
  return utils;
}
function redircetUrl() {
  var _checkPlatform = checkPlatform()
  console.log('location', location)
  var _pathname, _hash;
  if (_checkPlatform.isMobile) {
    if (location.pathname.indexOf('/pc/') > -1) {
      _pathname = location.pathname.replace('/pc/', '/h5/')
      _hash = location.hash != '' ? location.hash: "#/";
      location.href = location.origin + _pathname + location.search + _hash
    }else{
      if (location.hash == '') {
        location.href = location.href + '#/'
      }
    }
  } else {
    if (location.pathname.indexOf('/h5/') > -1) {
      _pathname = location.pathname.replace('/h5/', '/pc/')
      _hash = location.hash != '' ? location.hash : "#/";
      location.href = location.origin + _pathname + location.search + _hash
    }else{
      if (location.hash == ''){
        location.href = location.href+'#/'
      }
    } 
  }
}

/*格式化时间*/
function formateDate(date, format) {
  var dateTime = new Date(date);
  var o = {
    "y": dateTime.getFullYear(),				  //年
    "M": dateTime.getMonth() + 1,                 //月份
    "d": dateTime.getDate(),                    //日
    "h": dateTime.getHours(),                   //小时
    "m": dateTime.getMinutes(),                 //分
    "s": dateTime.getSeconds(),                 //秒
    // "q" : Math.floor((dateTime.getMonth()+3)/3), //季度
    // "S"  : dateTime.getMilliseconds()             //毫秒
  };

  var strDate = '';
  strDate = o.y + '年' + o.M + '月' + o.d + '日 ' + o.h + ':' + o.m;

  if (format == 'yy/MM/dd') {
    strDate = o.y + '年' + o.M + '月' + o.d + '日';
  }

  return strDate;
}

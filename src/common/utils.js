export function getUrlParamObj() {
  var obj = {};
  //获取url的参数部分
  var params = window.location.search.substr(1);
  //[^&=]+ 表示不含&或=的连续字符，加上()就是提取对应字符串
  params.replace(/([^&=]+)=([^&=]*)/gi, function (rs, $1, $2) {
    //decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
    obj[$1] = decodeURIComponent($2);
  });

  return obj;
}


export function formatDate(time) {
  var date = new Date(time)

  var year = date.getFullYear(),
    month = date.getMonth() + 1,//月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()
  var newTime = year + '-' +
    month + '-' +
    day + ' ' +
    hour + ':' +
    min + ':' +
    sec
  return newTime
}

export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

// export function formatArr(arr) {
//   return [...arr.splice((arr.length%2? (arr.length+1)/2 : (arr.length+2)/2 )),...arr]
// }

/**
 * 客户端检测
 */
export const BrowserInfo = function () {
  var json = {
    userAgent: navigator.userAgent.toLowerCase(),
    isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
    isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
    isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
    isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
  }

  return json;
}

export const openApp = function (openUrl, callback) {
  //检查app是否打开
  function checkOpen(cb) {
    var _clickTime = +(new Date());

    function check(elsTime) {
      if (elsTime > 3000 || document.hidden || document.webkitHidden) {
        cb(1);
      } else {
        cb(0);
      }
    }

    //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
    var _count = 0, intHandle;
    intHandle = setInterval(function () {
      _count++;
      var elsTime = +(new Date()) - _clickTime;
      if (_count >= 100 || elsTime > 3000) {
        clearInterval(intHandle);
        check(elsTime);
      }
    }, 20);
  }

  //在iframe 中打开APP
  var ifr = document.createElement('iframe');
  ifr.src = openUrl;
  ifr.style.display = 'none';

  if (callback) {

    checkOpen(function (opened) {
      callback && callback(opened);
    });

  }

  document.body.appendChild(ifr);
  setTimeout(function () {
    document.body.removeChild(ifr);
  }, 2000);

}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    // console.log(typeof fn)
    return function () {
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
};

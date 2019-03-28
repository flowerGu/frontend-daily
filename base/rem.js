(function() {
      var winW = document.documentElement.clientWidth,
        winH = document.documentElement.clientHeight,
        baseFontSize = 50,
        baseWidth = 750,
        winWidthSize = Math.min(winW, winH);
      if (winWidthSize > 560) {
        winWidthSize = 560;
      }
      if (winWidthSize < 270) {
        winWidthSize = 270;
      }
      var _html = document.getElementsByTagName('html')[0];
      _html.style.fontSize = winWidthSize / baseWidth * baseFontSize + 'px';
    })();
    //设置具体字号和宽度是 设计稿宽/50,设计稿字号/50
    
    
    
    
    (function (doc, win) {
    var docEl = doc.documentElement,dpr = win.devicePixelRatio || 1,
    isAndroid = win.navigator.userAgent.match(/android/gi),
    ismobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
    //判断手机是否旋转，新设备均支持orientationchange，不支持的用resize
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        clientWidth = clientWidth>1656?1656:clientWidth;
        clientWidth = clientWidth<320?320:clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    ismobile?dpr=2:dpr=dpr;
    docEl.setAttribute('data-dpr', dpr);
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window); 

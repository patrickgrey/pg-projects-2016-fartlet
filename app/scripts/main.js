(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fControlEffectRadomir = require('./ft-control--effect-radomir.js');
var ftAdjustLength = require('./ft-control-adjust-length.js');

fControlEffectRadomir();
ftAdjustLength();
// ftAdjustLength.init();

},{"./ft-control--effect-radomir.js":2,"./ft-control-adjust-length.js":3}],2:[function(require,module,exports){
module.exports = function () {
  (function() {
  
    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
      var check = false;
      (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
  
    var support = { animations : Modernizr.cssanimations },
      animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
      onEndAnimation = function( el, callback ) {
        var onEndCallbackFn = function( ev ) {
          if( support.animations ) {
            if( ev.target != this ) return;
            this.removeEventListener( animEndEventName, onEndCallbackFn );
          }
          if( callback && typeof callback === 'function' ) { callback.call(); }
        };
        if( support.animations ) {
          el.addEventListener( animEndEventName, onEndCallbackFn );
        }
        else {
          onEndCallbackFn();
        }
      },
      eventtype = mobilecheck() ? 'touchstart' : 'click';
  
    [].slice.call( document.querySelectorAll( '.ft-control' ) ).forEach( function( el ) {
      el.addEventListener( eventtype, function( ev ) {
        classie.add( el, 'ft-control--click' );
        onEndAnimation( classie.has( el, 'ft-control--complex' ) ? el.querySelector( '.ft-control__helper' ) : el, function() {
          classie.remove( el, 'ft-control--click' );
        } );
      } );
    } );
  
  })();
}

},{}],3:[function(require,module,exports){
module.exports = function () {
  // var module = {};
  // var init = function () {
    console.log('hi browserify!');
  // }
  // return module;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC0tZWZmZWN0LXJhZG9taXIuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZkNvbnRyb2xFZmZlY3RSYWRvbWlyID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLS1lZmZlY3QtcmFkb21pci5qcycpO1xyXG52YXIgZnRBZGp1c3RMZW5ndGggPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcycpO1xyXG5cclxuZkNvbnRyb2xFZmZlY3RSYWRvbWlyKCk7XHJcbmZ0QWRqdXN0TGVuZ3RoKCk7XHJcbi8vIGZ0QWRqdXN0TGVuZ3RoLmluaXQoKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTEzODE3MzAvOTg5NDM5XHJcbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcclxuICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKWNoZWNrID0gdHJ1ZX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuICBcclxuICAgIHZhciBzdXBwb3J0ID0geyBhbmltYXRpb25zIDogTW9kZXJuaXpyLmNzc2FuaW1hdGlvbnMgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZXMgPSB7ICdXZWJraXRBbmltYXRpb24nIDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsICdPQW5pbWF0aW9uJyA6ICdvQW5pbWF0aW9uRW5kJywgJ21zQW5pbWF0aW9uJyA6ICdNU0FuaW1hdGlvbkVuZCcsICdhbmltYXRpb24nIDogJ2FuaW1hdGlvbmVuZCcgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZSA9IGFuaW1FbmRFdmVudE5hbWVzWyBNb2Rlcm5penIucHJlZml4ZWQoICdhbmltYXRpb24nICkgXSxcclxuICAgICAgb25FbmRBbmltYXRpb24gPSBmdW5jdGlvbiggZWwsIGNhbGxiYWNrICkge1xyXG4gICAgICAgIHZhciBvbkVuZENhbGxiYWNrRm4gPSBmdW5jdGlvbiggZXYgKSB7XHJcbiAgICAgICAgICBpZiggc3VwcG9ydC5hbmltYXRpb25zICkge1xyXG4gICAgICAgICAgICBpZiggZXYudGFyZ2V0ICE9IHRoaXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggYW5pbUVuZEV2ZW50TmFtZSwgb25FbmRDYWxsYmFja0ZuICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiggY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkgeyBjYWxsYmFjay5jYWxsKCk7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCBzdXBwb3J0LmFuaW1hdGlvbnMgKSB7XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBhbmltRW5kRXZlbnROYW1lLCBvbkVuZENhbGxiYWNrRm4gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvbkVuZENhbGxiYWNrRm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xyXG4gIFxyXG4gICAgW10uc2xpY2UuY2FsbCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mdC1jb250cm9sJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudHR5cGUsIGZ1bmN0aW9uKCBldiApIHtcclxuICAgICAgICBjbGFzc2llLmFkZCggZWwsICdmdC1jb250cm9sLS1jbGljaycgKTtcclxuICAgICAgICBvbkVuZEFuaW1hdGlvbiggY2xhc3NpZS5oYXMoIGVsLCAnZnQtY29udHJvbC0tY29tcGxleCcgKSA/IGVsLnF1ZXJ5U2VsZWN0b3IoICcuZnQtY29udHJvbF9faGVscGVyJyApIDogZWwsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2xhc3NpZS5yZW1vdmUoIGVsLCAnZnQtY29udHJvbC0tY2xpY2snICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbiAgXHJcbiAgfSkoKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyB2YXIgbW9kdWxlID0ge307XHJcbiAgLy8gdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGkgYnJvd3NlcmlmeSEnKTtcclxuICAvLyB9XHJcbiAgLy8gcmV0dXJuIG1vZHVsZTtcclxufVxyXG4iXX0=

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// http://www.ryandaigle.com/a/expose-javascript-api-with-browserify

module.exports = function initApp () {
  
  var fControlEffectRadomir = require('./ft-control--effect-radomir.js');
  var ftAdjustLength = require('./ft-control-adjust-length.js');
  var ftSetsCount = require('./ft-control-sets-count.js');
  var ftStart = require('./ft-control-start.js');
  var ftUIController = require('./ft-ui-controller.js');

  fControlEffectRadomir();
  ftAdjustLength();
  ftSetsCount();
  var ftStartObj = ftStart();
  ftUIController(ftStartObj);

}

},{"./ft-control--effect-radomir.js":2,"./ft-control-adjust-length.js":3,"./ft-control-sets-count.js":4,"./ft-control-start.js":5,"./ft-ui-controller.js":6}],2:[function(require,module,exports){
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
module.exports = function ftControlAdjustLength () {
  
  var fartletTime = 30,
      currentRotation = 0,
      stepLimit = 4,
      stepCount = 0,
      minimumSeconds = 5,
      currentSets = 10;
      timeText = document.getElementById('ft-control-adjust-length-count'),
      moduleObj = {};
  
  
  moduleObj.updateTime = function (e, _rotation) {
    
    console.log(currentRotation);
    
    var rotation = this.target ? Math.round(this.target._gsTransform.rotation % 360) : _rotation;
    
    if (rotation === currentRotation) {
        // do nothing
    }
    else if (rotation > currentRotation) {
        stepCount++;
    }
    else {
        stepCount--;
    }
    
    if (stepCount > stepLimit && fartletTime < 999) {
        fartletTime++;
        stepCount = 0;
    }
    else if(stepCount < -stepLimit && fartletTime > (minimumSeconds)){
        fartletTime--;
        stepCount = 0;
    }
    else if(stepCount > stepLimit || stepCount < -stepLimit ){
        stepCount = 0;
    }
    
    currentRotation = rotation;
    
    timeText.textContent = fartletTime.toString();
    
    return fartletTime.toString();

  }
  
  TweenLite.set('#ft-control-adjust-length', {transformOrigin:'115% 108%'});
  
  Draggable.create('#ft-control-adjust-length', {
      type:'rotation',
      throwProps:true,
      dragClickables:true,
      // onDrag: function(){console.log('hi');},
      onDrag: moduleObj.updateTime,
      onThrowUpdate:moduleObj.updateTime
  });
  
  return moduleObj;
  
}

},{}],4:[function(require,module,exports){
module.exports = function () {
  
  var currentSets = 10;
      setsText = document.getElementById('ft-control-sets-count'),
      setsPlus = document.getElementById('ft-control-sets-plus'),
      setsMinus = document.getElementById('ft-control-sets-minus');
  
  
      setsPlus.addEventListener('click', function (e) {
          if (currentSets < 99) {
              currentSets++;
              updateSetsInfo();
          }
      });
      
      setsMinus.addEventListener('click', function (e) {
          if (currentSets > 1) {
              currentSets--;
              updateSetsInfo();
          }
      });
      
      function updateSetsInfo () {
          setsText.innerHTML = currentSets.toString();
      }
  
}

},{}],5:[function(require,module,exports){
module.exports = function () {
  
  var moduleObj = {},
      startButton = document.getElementById('ft-control-start'),
      playIcon = document.getElementById('ft-control-icon-play'),
      pauseIcon = document.getElementById('ft-control-icon-pause');
      
      moduleObj.START_FARTLET = 'startFartlet';
      moduleObj.PAUSE_FARTLET = 'pauseFartlet';
  
  startButton.addEventListener('click', function (e) {
    if (classie.has( playIcon, 'ft-control-hide' )) {
      classie.remove( playIcon, 'ft-control-hide' );
      classie.add( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event(moduleObj.PAUSE_FARTLET));
    }
    else {
      classie.add( playIcon, 'ft-control-hide' );
      classie.remove( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event(moduleObj.START_FARTLET));
    }
  });
  
  return moduleObj;

  
}

},{}],6:[function(require,module,exports){
module.exports = function (_ftStartObj) {
  
  var startButton = document.getElementById('ft-control-start'),
      timeButton = document.getElementById('ft-control-adjust-length'),
      resetButton = document.getElementById('ft-control-reset'),
      plusButton = document.getElementById('ft-control-sets-plus'),
      minusButton = document.getElementById('ft-control-sets-minus'),
      setText = document.getElementById('ft-control-sets-count');
      setTextWrapper = document.getElementById('ft-control-sets-count-wrapper-id');
  
  var hideUITimeline = new TimelineLite();
  
  var createTimeline = function () {
    hideUITimeline.to(resetButton, 0.05, {autoAlpha:0})
                  .to(timeButton, 0.05, {autoAlpha:0})
                  .to(plusButton, 0.05, {autoAlpha:0})
                  .to(minusButton, 0.05, {autoAlpha:0})
                  .to(setText, 0.1, {scale: '+=1.2'});
    hideUITimeline.stop();
    // http://codepen.io/jonathan/pen/LKacj
    // http://codepen.io/jonathan/pen/pqwrs/
    // http://greensock.com/forums/topic/9173-scaling-an-element-becomes-pixelated/
  };
  
  createTimeline();
  
  var hideUI = function () {
    hideUITimeline.play();
  };
  
  var showUI = function () {
    hideUITimeline.reverse();
  };
  
  // console.log(_ftStartObj.START_FARTLET);
  // console.log(_ftStartObj);
  
  startButton.addEventListener(_ftStartObj.START_FARTLET, function (e) {
    // console.log('start');
    hideUI();
  });
  
  startButton.addEventListener(_ftStartObj.PAUSE_FARTLET, function (e) {
    // console.log('pause');
    showUI();
  });

  
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC0tZWZmZWN0LXJhZG9taXIuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC1zZXRzLWNvdW50LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC1jb250cm9sLXN0YXJ0LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC11aS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGh0dHA6Ly93d3cucnlhbmRhaWdsZS5jb20vYS9leHBvc2UtamF2YXNjcmlwdC1hcGktd2l0aC1icm93c2VyaWZ5XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaXRBcHAgKCkge1xyXG4gIFxyXG4gIHZhciBmQ29udHJvbEVmZmVjdFJhZG9taXIgPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtLWVmZmVjdC1yYWRvbWlyLmpzJyk7XHJcbiAgdmFyIGZ0QWRqdXN0TGVuZ3RoID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLWFkanVzdC1sZW5ndGguanMnKTtcclxuICB2YXIgZnRTZXRzQ291bnQgPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtc2V0cy1jb3VudC5qcycpO1xyXG4gIHZhciBmdFN0YXJ0ID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLXN0YXJ0LmpzJyk7XHJcbiAgdmFyIGZ0VUlDb250cm9sbGVyID0gcmVxdWlyZSgnLi9mdC11aS1jb250cm9sbGVyLmpzJyk7XHJcblxyXG4gIGZDb250cm9sRWZmZWN0UmFkb21pcigpO1xyXG4gIGZ0QWRqdXN0TGVuZ3RoKCk7XHJcbiAgZnRTZXRzQ291bnQoKTtcclxuICB2YXIgZnRTdGFydE9iaiA9IGZ0U3RhcnQoKTtcclxuICBmdFVJQ29udHJvbGxlcihmdFN0YXJ0T2JqKTtcclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTEzODE3MzAvOTg5NDM5XHJcbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcclxuICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKWNoZWNrID0gdHJ1ZX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuICBcclxuICAgIHZhciBzdXBwb3J0ID0geyBhbmltYXRpb25zIDogTW9kZXJuaXpyLmNzc2FuaW1hdGlvbnMgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZXMgPSB7ICdXZWJraXRBbmltYXRpb24nIDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsICdPQW5pbWF0aW9uJyA6ICdvQW5pbWF0aW9uRW5kJywgJ21zQW5pbWF0aW9uJyA6ICdNU0FuaW1hdGlvbkVuZCcsICdhbmltYXRpb24nIDogJ2FuaW1hdGlvbmVuZCcgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZSA9IGFuaW1FbmRFdmVudE5hbWVzWyBNb2Rlcm5penIucHJlZml4ZWQoICdhbmltYXRpb24nICkgXSxcclxuICAgICAgb25FbmRBbmltYXRpb24gPSBmdW5jdGlvbiggZWwsIGNhbGxiYWNrICkge1xyXG4gICAgICAgIHZhciBvbkVuZENhbGxiYWNrRm4gPSBmdW5jdGlvbiggZXYgKSB7XHJcbiAgICAgICAgICBpZiggc3VwcG9ydC5hbmltYXRpb25zICkge1xyXG4gICAgICAgICAgICBpZiggZXYudGFyZ2V0ICE9IHRoaXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggYW5pbUVuZEV2ZW50TmFtZSwgb25FbmRDYWxsYmFja0ZuICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiggY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkgeyBjYWxsYmFjay5jYWxsKCk7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCBzdXBwb3J0LmFuaW1hdGlvbnMgKSB7XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBhbmltRW5kRXZlbnROYW1lLCBvbkVuZENhbGxiYWNrRm4gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvbkVuZENhbGxiYWNrRm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xyXG4gIFxyXG4gICAgW10uc2xpY2UuY2FsbCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mdC1jb250cm9sJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudHR5cGUsIGZ1bmN0aW9uKCBldiApIHtcclxuICAgICAgICBjbGFzc2llLmFkZCggZWwsICdmdC1jb250cm9sLS1jbGljaycgKTtcclxuICAgICAgICBvbkVuZEFuaW1hdGlvbiggY2xhc3NpZS5oYXMoIGVsLCAnZnQtY29udHJvbC0tY29tcGxleCcgKSA/IGVsLnF1ZXJ5U2VsZWN0b3IoICcuZnQtY29udHJvbF9faGVscGVyJyApIDogZWwsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2xhc3NpZS5yZW1vdmUoIGVsLCAnZnQtY29udHJvbC0tY2xpY2snICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbiAgXHJcbiAgfSkoKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ0Q29udHJvbEFkanVzdExlbmd0aCAoKSB7XHJcbiAgXHJcbiAgdmFyIGZhcnRsZXRUaW1lID0gMzAsXHJcbiAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDAsXHJcbiAgICAgIHN0ZXBMaW1pdCA9IDQsXHJcbiAgICAgIHN0ZXBDb3VudCA9IDAsXHJcbiAgICAgIG1pbmltdW1TZWNvbmRzID0gNSxcclxuICAgICAgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLWNvdW50JyksXHJcbiAgICAgIG1vZHVsZU9iaiA9IHt9O1xyXG4gIFxyXG4gIFxyXG4gIG1vZHVsZU9iai51cGRhdGVUaW1lID0gZnVuY3Rpb24gKGUsIF9yb3RhdGlvbikge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24pO1xyXG4gICAgXHJcbiAgICB2YXIgcm90YXRpb24gPSB0aGlzLnRhcmdldCA/IE1hdGgucm91bmQodGhpcy50YXJnZXQuX2dzVHJhbnNmb3JtLnJvdGF0aW9uICUgMzYwKSA6IF9yb3RhdGlvbjtcclxuICAgIFxyXG4gICAgaWYgKHJvdGF0aW9uID09PSBjdXJyZW50Um90YXRpb24pIHtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyb3RhdGlvbiA+IGN1cnJlbnRSb3RhdGlvbikge1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RlcENvdW50LS07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzdGVwQ291bnQgPiBzdGVwTGltaXQgJiYgZmFydGxldFRpbWUgPCA5OTkpIHtcclxuICAgICAgICBmYXJ0bGV0VGltZSsrO1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHN0ZXBDb3VudCA8IC1zdGVwTGltaXQgJiYgZmFydGxldFRpbWUgPiAobWluaW11bVNlY29uZHMpKXtcclxuICAgICAgICBmYXJ0bGV0VGltZS0tO1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHN0ZXBDb3VudCA+IHN0ZXBMaW1pdCB8fCBzdGVwQ291bnQgPCAtc3RlcExpbWl0ICl7XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudFJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICBcclxuICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gZmFydGxldFRpbWUudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZhcnRsZXRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gIH1cclxuICBcclxuICBUd2VlbkxpdGUuc2V0KCcjZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoJywge3RyYW5zZm9ybU9yaWdpbjonMTE1JSAxMDglJ30pO1xyXG4gIFxyXG4gIERyYWdnYWJsZS5jcmVhdGUoJyNmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnLCB7XHJcbiAgICAgIHR5cGU6J3JvdGF0aW9uJyxcclxuICAgICAgdGhyb3dQcm9wczp0cnVlLFxyXG4gICAgICBkcmFnQ2xpY2thYmxlczp0cnVlLFxyXG4gICAgICAvLyBvbkRyYWc6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2hpJyk7fSxcclxuICAgICAgb25EcmFnOiBtb2R1bGVPYmoudXBkYXRlVGltZSxcclxuICAgICAgb25UaHJvd1VwZGF0ZTptb2R1bGVPYmoudXBkYXRlVGltZVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBtb2R1bGVPYmo7XHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgdmFyIGN1cnJlbnRTZXRzID0gMTA7XHJcbiAgICAgIHNldHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudCcpLFxyXG4gICAgICBzZXRzUGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtcGx1cycpLFxyXG4gICAgICBzZXRzTWludXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLW1pbnVzJyk7XHJcbiAgXHJcbiAgXHJcbiAgICAgIHNldHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50U2V0cyA8IDk5KSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFNldHMrKztcclxuICAgICAgICAgICAgICB1cGRhdGVTZXRzSW5mbygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHNldHNNaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFNldHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFNldHMtLTtcclxuICAgICAgICAgICAgICB1cGRhdGVTZXRzSW5mbygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHNJbmZvICgpIHtcclxuICAgICAgICAgIHNldHNUZXh0LmlubmVySFRNTCA9IGN1cnJlbnRTZXRzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICB2YXIgbW9kdWxlT2JqID0ge30sXHJcbiAgICAgIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc3RhcnQnKSxcclxuICAgICAgcGxheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1pY29uLXBsYXknKSxcclxuICAgICAgcGF1c2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtaWNvbi1wYXVzZScpO1xyXG4gICAgICBcclxuICAgICAgbW9kdWxlT2JqLlNUQVJUX0ZBUlRMRVQgPSAnc3RhcnRGYXJ0bGV0JztcclxuICAgICAgbW9kdWxlT2JqLlBBVVNFX0ZBUlRMRVQgPSAncGF1c2VGYXJ0bGV0JztcclxuICBcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoY2xhc3NpZS5oYXMoIHBsYXlJY29uLCAnZnQtY29udHJvbC1oaWRlJyApKSB7XHJcbiAgICAgIGNsYXNzaWUucmVtb3ZlKCBwbGF5SWNvbiwgJ2Z0LWNvbnRyb2wtaGlkZScgKTtcclxuICAgICAgY2xhc3NpZS5hZGQoIHBhdXNlSWNvbiwgJ2Z0LWNvbnRyb2wtaGlkZScgKTtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtb2R1bGVPYmouUEFVU0VfRkFSVExFVCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNsYXNzaWUuYWRkKCBwbGF5SWNvbiwgJ2Z0LWNvbnRyb2wtaGlkZScgKTtcclxuICAgICAgY2xhc3NpZS5yZW1vdmUoIHBhdXNlSWNvbiwgJ2Z0LWNvbnRyb2wtaGlkZScgKTtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtb2R1bGVPYmouU1RBUlRfRkFSVExFVCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBtb2R1bGVPYmo7XHJcblxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9mdFN0YXJ0T2JqKSB7XHJcbiAgXHJcbiAgdmFyIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc3RhcnQnKSxcclxuICAgICAgdGltZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnKSxcclxuICAgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1yZXNldCcpLFxyXG4gICAgICBwbHVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1wbHVzJyksXHJcbiAgICAgIG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1taW51cycpLFxyXG4gICAgICBzZXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudCcpO1xyXG4gICAgICBzZXRUZXh0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtY291bnQtd3JhcHBlci1pZCcpO1xyXG4gIFxyXG4gIHZhciBoaWRlVUlUaW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcclxuICBcclxuICB2YXIgY3JlYXRlVGltZWxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRlVUlUaW1lbGluZS50byhyZXNldEJ1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHRpbWVCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhwbHVzQnV0dG9uLCAwLjA1LCB7YXV0b0FscGhhOjB9KVxyXG4gICAgICAgICAgICAgICAgICAudG8obWludXNCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhzZXRUZXh0LCAwLjEsIHtzY2FsZTogJys9MS4yJ30pO1xyXG4gICAgaGlkZVVJVGltZWxpbmUuc3RvcCgpO1xyXG4gICAgLy8gaHR0cDovL2NvZGVwZW4uaW8vam9uYXRoYW4vcGVuL0xLYWNqXHJcbiAgICAvLyBodHRwOi8vY29kZXBlbi5pby9qb25hdGhhbi9wZW4vcHF3cnMvXHJcbiAgICAvLyBodHRwOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvOTE3My1zY2FsaW5nLWFuLWVsZW1lbnQtYmVjb21lcy1waXhlbGF0ZWQvXHJcbiAgfTtcclxuICBcclxuICBjcmVhdGVUaW1lbGluZSgpO1xyXG4gIFxyXG4gIHZhciBoaWRlVUkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRlVUlUaW1lbGluZS5wbGF5KCk7XHJcbiAgfTtcclxuICBcclxuICB2YXIgc2hvd1VJID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaGlkZVVJVGltZWxpbmUucmV2ZXJzZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgLy8gY29uc29sZS5sb2coX2Z0U3RhcnRPYmouU1RBUlRfRkFSVExFVCk7XHJcbiAgLy8gY29uc29sZS5sb2coX2Z0U3RhcnRPYmopO1xyXG4gIFxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoX2Z0U3RhcnRPYmouU1RBUlRfRkFSVExFVCwgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCcpO1xyXG4gICAgaGlkZVVJKCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihfZnRTdGFydE9iai5QQVVTRV9GQVJUTEVULCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3BhdXNlJyk7XHJcbiAgICBzaG93VUkoKTtcclxuICB9KTtcclxuXHJcbiAgXHJcbn1cclxuIl19

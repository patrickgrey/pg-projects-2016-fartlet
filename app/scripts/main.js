(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
module.exports = function () {
  
  var fartletTime = 30,
      currentRotation = 0,
      stepLimit = 4,
      stepCount = 0,
      minimumSeconds = 5,
      currentSets = 10;
      timeText = document.getElementById('ft-control-adjust-length-count');
  
  
  var  updateTime = function (e) {
    
    var rotation = Math.round(this.target._gsTransform.rotation % 360);
    
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

  }
  
  TweenLite.set('#ft-control-adjust-length', {transformOrigin:'115% 108%'});
  
  Draggable.create('#ft-control-adjust-length', {
      type:'rotation',
      throwProps:true,
      dragClickables:true,
      // onDrag: function(){console.log('hi');},
      onDrag: updateTime,
      onThrowUpdate:updateTime
  });
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC0tZWZmZWN0LXJhZG9taXIuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC1zZXRzLWNvdW50LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC1jb250cm9sLXN0YXJ0LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC11aS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBmQ29udHJvbEVmZmVjdFJhZG9taXIgPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtLWVmZmVjdC1yYWRvbWlyLmpzJyk7XHJcbnZhciBmdEFkanVzdExlbmd0aCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLmpzJyk7XHJcbnZhciBmdFNldHNDb3VudCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1zZXRzLWNvdW50LmpzJyk7XHJcbnZhciBmdFN0YXJ0ID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLXN0YXJ0LmpzJyk7XHJcbnZhciBmdFVJQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZnQtdWktY29udHJvbGxlci5qcycpO1xyXG5cclxuZkNvbnRyb2xFZmZlY3RSYWRvbWlyKCk7XHJcbmZ0QWRqdXN0TGVuZ3RoKCk7XHJcbmZ0U2V0c0NvdW50KCk7XHJcbnZhciBmdFN0YXJ0T2JqID0gZnRTdGFydCgpO1xyXG5mdFVJQ29udHJvbGxlcihmdFN0YXJ0T2JqKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTEzODE3MzAvOTg5NDM5XHJcbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcclxuICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKWNoZWNrID0gdHJ1ZX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuICBcclxuICAgIHZhciBzdXBwb3J0ID0geyBhbmltYXRpb25zIDogTW9kZXJuaXpyLmNzc2FuaW1hdGlvbnMgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZXMgPSB7ICdXZWJraXRBbmltYXRpb24nIDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsICdPQW5pbWF0aW9uJyA6ICdvQW5pbWF0aW9uRW5kJywgJ21zQW5pbWF0aW9uJyA6ICdNU0FuaW1hdGlvbkVuZCcsICdhbmltYXRpb24nIDogJ2FuaW1hdGlvbmVuZCcgfSxcclxuICAgICAgYW5pbUVuZEV2ZW50TmFtZSA9IGFuaW1FbmRFdmVudE5hbWVzWyBNb2Rlcm5penIucHJlZml4ZWQoICdhbmltYXRpb24nICkgXSxcclxuICAgICAgb25FbmRBbmltYXRpb24gPSBmdW5jdGlvbiggZWwsIGNhbGxiYWNrICkge1xyXG4gICAgICAgIHZhciBvbkVuZENhbGxiYWNrRm4gPSBmdW5jdGlvbiggZXYgKSB7XHJcbiAgICAgICAgICBpZiggc3VwcG9ydC5hbmltYXRpb25zICkge1xyXG4gICAgICAgICAgICBpZiggZXYudGFyZ2V0ICE9IHRoaXMgKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggYW5pbUVuZEV2ZW50TmFtZSwgb25FbmRDYWxsYmFja0ZuICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiggY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkgeyBjYWxsYmFjay5jYWxsKCk7IH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCBzdXBwb3J0LmFuaW1hdGlvbnMgKSB7XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBhbmltRW5kRXZlbnROYW1lLCBvbkVuZENhbGxiYWNrRm4gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvbkVuZENhbGxiYWNrRm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xyXG4gIFxyXG4gICAgW10uc2xpY2UuY2FsbCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mdC1jb250cm9sJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudHR5cGUsIGZ1bmN0aW9uKCBldiApIHtcclxuICAgICAgICBjbGFzc2llLmFkZCggZWwsICdmdC1jb250cm9sLS1jbGljaycgKTtcclxuICAgICAgICBvbkVuZEFuaW1hdGlvbiggY2xhc3NpZS5oYXMoIGVsLCAnZnQtY29udHJvbC0tY29tcGxleCcgKSA/IGVsLnF1ZXJ5U2VsZWN0b3IoICcuZnQtY29udHJvbF9faGVscGVyJyApIDogZWwsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2xhc3NpZS5yZW1vdmUoIGVsLCAnZnQtY29udHJvbC0tY2xpY2snICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbiAgXHJcbiAgfSkoKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICB2YXIgZmFydGxldFRpbWUgPSAzMCxcclxuICAgICAgY3VycmVudFJvdGF0aW9uID0gMCxcclxuICAgICAgc3RlcExpbWl0ID0gNCxcclxuICAgICAgc3RlcENvdW50ID0gMCxcclxuICAgICAgbWluaW11bVNlY29uZHMgPSA1LFxyXG4gICAgICBjdXJyZW50U2V0cyA9IDEwO1xyXG4gICAgICB0aW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWFkanVzdC1sZW5ndGgtY291bnQnKTtcclxuICBcclxuICBcclxuICB2YXIgIHVwZGF0ZVRpbWUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgXHJcbiAgICB2YXIgcm90YXRpb24gPSBNYXRoLnJvdW5kKHRoaXMudGFyZ2V0Ll9nc1RyYW5zZm9ybS5yb3RhdGlvbiAlIDM2MCk7XHJcbiAgICBcclxuICAgIGlmIChyb3RhdGlvbiA9PT0gY3VycmVudFJvdGF0aW9uKSB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocm90YXRpb24gPiBjdXJyZW50Um90YXRpb24pIHtcclxuICAgICAgICBzdGVwQ291bnQrKztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0ZXBDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc3RlcENvdW50ID4gc3RlcExpbWl0ICYmIGZhcnRsZXRUaW1lIDwgOTk5KSB7XHJcbiAgICAgICAgZmFydGxldFRpbWUrKztcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGVwQ291bnQgPCAtc3RlcExpbWl0ICYmIGZhcnRsZXRUaW1lID4gKG1pbmltdW1TZWNvbmRzKSl7XHJcbiAgICAgICAgZmFydGxldFRpbWUtLTtcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGVwQ291bnQgPiBzdGVwTGltaXQgfHwgc3RlcENvdW50IDwgLXN0ZXBMaW1pdCApe1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGN1cnJlbnRSb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgXHJcbiAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9IGZhcnRsZXRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gIH1cclxuICBcclxuICBUd2VlbkxpdGUuc2V0KCcjZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoJywge3RyYW5zZm9ybU9yaWdpbjonMTE1JSAxMDglJ30pO1xyXG4gIFxyXG4gIERyYWdnYWJsZS5jcmVhdGUoJyNmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnLCB7XHJcbiAgICAgIHR5cGU6J3JvdGF0aW9uJyxcclxuICAgICAgdGhyb3dQcm9wczp0cnVlLFxyXG4gICAgICBkcmFnQ2xpY2thYmxlczp0cnVlLFxyXG4gICAgICAvLyBvbkRyYWc6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2hpJyk7fSxcclxuICAgICAgb25EcmFnOiB1cGRhdGVUaW1lLFxyXG4gICAgICBvblRocm93VXBkYXRlOnVwZGF0ZVRpbWVcclxuICB9KTtcclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICB2YXIgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgc2V0c1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLWNvdW50JyksXHJcbiAgICAgIHNldHNQbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1wbHVzJyksXHJcbiAgICAgIHNldHNNaW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtbWludXMnKTtcclxuICBcclxuICBcclxuICAgICAgc2V0c1BsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTZXRzIDwgOTkpIHtcclxuICAgICAgICAgICAgICBjdXJyZW50U2V0cysrO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHNJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgc2V0c01pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50U2V0cyA+IDEpIHtcclxuICAgICAgICAgICAgICBjdXJyZW50U2V0cy0tO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHNJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2V0c0luZm8gKCkge1xyXG4gICAgICAgICAgc2V0c1RleHQuaW5uZXJIVE1MID0gY3VycmVudFNldHMudG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gIHZhciBtb2R1bGVPYmogPSB7fSxcclxuICAgICAgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zdGFydCcpLFxyXG4gICAgICBwbGF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWljb24tcGxheScpLFxyXG4gICAgICBwYXVzZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1pY29uLXBhdXNlJyk7XHJcbiAgICAgIFxyXG4gICAgICBtb2R1bGVPYmouU1RBUlRfRkFSVExFVCA9ICdzdGFydEZhcnRsZXQnO1xyXG4gICAgICBtb2R1bGVPYmouUEFVU0VfRkFSVExFVCA9ICdwYXVzZUZhcnRsZXQnO1xyXG4gIFxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChjbGFzc2llLmhhcyggcGxheUljb24sICdmdC1jb250cm9sLWhpZGUnICkpIHtcclxuICAgICAgY2xhc3NpZS5yZW1vdmUoIHBsYXlJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICBjbGFzc2llLmFkZCggcGF1c2VJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1vZHVsZU9iai5QQVVTRV9GQVJUTEVUKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2xhc3NpZS5hZGQoIHBsYXlJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICBjbGFzc2llLnJlbW92ZSggcGF1c2VJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1vZHVsZU9iai5TVEFSVF9GQVJUTEVUKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIG1vZHVsZU9iajtcclxuXHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX2Z0U3RhcnRPYmopIHtcclxuICBcclxuICB2YXIgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zdGFydCcpLFxyXG4gICAgICB0aW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcpLFxyXG4gICAgICByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXJlc2V0JyksXHJcbiAgICAgIHBsdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLXBsdXMnKSxcclxuICAgICAgbWludXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLW1pbnVzJyksXHJcbiAgICAgIHNldFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLWNvdW50Jyk7XHJcbiAgICAgIHNldFRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudC13cmFwcGVyLWlkJyk7XHJcbiAgXHJcbiAgdmFyIGhpZGVVSVRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG4gIFxyXG4gIHZhciBjcmVhdGVUaW1lbGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnRvKHJlc2V0QnV0dG9uLCAwLjA1LCB7YXV0b0FscGhhOjB9KVxyXG4gICAgICAgICAgICAgICAgICAudG8odGltZUJ1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHBsdXNCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhtaW51c0J1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHNldFRleHQsIDAuMSwge3NjYWxlOiAnKz0xLjInfSk7XHJcbiAgICBoaWRlVUlUaW1lbGluZS5zdG9wKCk7XHJcbiAgICAvLyBodHRwOi8vY29kZXBlbi5pby9qb25hdGhhbi9wZW4vTEthY2pcclxuICAgIC8vIGh0dHA6Ly9jb2RlcGVuLmlvL2pvbmF0aGFuL3Blbi9wcXdycy9cclxuICAgIC8vIGh0dHA6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy85MTczLXNjYWxpbmctYW4tZWxlbWVudC1iZWNvbWVzLXBpeGVsYXRlZC9cclxuICB9O1xyXG4gIFxyXG4gIGNyZWF0ZVRpbWVsaW5lKCk7XHJcbiAgXHJcbiAgdmFyIGhpZGVVSSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnBsYXkoKTtcclxuICB9O1xyXG4gIFxyXG4gIHZhciBzaG93VUkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRlVUlUaW1lbGluZS5yZXZlcnNlKCk7XHJcbiAgfTtcclxuICBcclxuICAvLyBjb25zb2xlLmxvZyhfZnRTdGFydE9iai5TVEFSVF9GQVJUTEVUKTtcclxuICAvLyBjb25zb2xlLmxvZyhfZnRTdGFydE9iaik7XHJcbiAgXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihfZnRTdGFydE9iai5TVEFSVF9GQVJUTEVULCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcbiAgICBoaWRlVUkoKTtcclxuICB9KTtcclxuICBcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKF9mdFN0YXJ0T2JqLlBBVVNFX0ZBUlRMRVQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncGF1c2UnKTtcclxuICAgIHNob3dVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBcclxufVxyXG4iXX0=

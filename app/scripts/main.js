(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// http://www.ryandaigle.com/a/expose-javascript-api-with-browserify

module.exports = (function initApp () {
  
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

})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC0tZWZmZWN0LXJhZG9taXIuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC1zZXRzLWNvdW50LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC1jb250cm9sLXN0YXJ0LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC11aS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGh0dHA6Ly93d3cucnlhbmRhaWdsZS5jb20vYS9leHBvc2UtamF2YXNjcmlwdC1hcGktd2l0aC1icm93c2VyaWZ5XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBpbml0QXBwICgpIHtcclxuICBcclxuICB2YXIgZkNvbnRyb2xFZmZlY3RSYWRvbWlyID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLS1lZmZlY3QtcmFkb21pci5qcycpO1xyXG4gIHZhciBmdEFkanVzdExlbmd0aCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLmpzJyk7XHJcbiAgdmFyIGZ0U2V0c0NvdW50ID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLXNldHMtY291bnQuanMnKTtcclxuICB2YXIgZnRTdGFydCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1zdGFydC5qcycpO1xyXG4gIHZhciBmdFVJQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZnQtdWktY29udHJvbGxlci5qcycpO1xyXG5cclxuICBmQ29udHJvbEVmZmVjdFJhZG9taXIoKTtcclxuICBmdEFkanVzdExlbmd0aCgpO1xyXG4gIGZ0U2V0c0NvdW50KCk7XHJcbiAgdmFyIGZ0U3RhcnRPYmogPSBmdFN0YXJ0KCk7XHJcbiAgZnRVSUNvbnRyb2xsZXIoZnRTdGFydE9iaik7XHJcblxyXG59KSgpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTM4MTczMC85ODk0MzlcclxuICAgIGZ1bmN0aW9uIG1vYmlsZWNoZWNrKCkge1xyXG4gICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGt8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpY2hlY2sgPSB0cnVlfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdmFyIHN1cHBvcnQgPSB7IGFuaW1hdGlvbnMgOiBNb2Rlcm5penIuY3NzYW5pbWF0aW9ucyB9LFxyXG4gICAgICBhbmltRW5kRXZlbnROYW1lcyA9IHsgJ1dlYmtpdEFuaW1hdGlvbicgOiAnd2Via2l0QW5pbWF0aW9uRW5kJywgJ09BbmltYXRpb24nIDogJ29BbmltYXRpb25FbmQnLCAnbXNBbmltYXRpb24nIDogJ01TQW5pbWF0aW9uRW5kJywgJ2FuaW1hdGlvbicgOiAnYW5pbWF0aW9uZW5kJyB9LFxyXG4gICAgICBhbmltRW5kRXZlbnROYW1lID0gYW5pbUVuZEV2ZW50TmFtZXNbIE1vZGVybml6ci5wcmVmaXhlZCggJ2FuaW1hdGlvbicgKSBdLFxyXG4gICAgICBvbkVuZEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCBlbCwgY2FsbGJhY2sgKSB7XHJcbiAgICAgICAgdmFyIG9uRW5kQ2FsbGJhY2tGbiA9IGZ1bmN0aW9uKCBldiApIHtcclxuICAgICAgICAgIGlmKCBzdXBwb3J0LmFuaW1hdGlvbnMgKSB7XHJcbiAgICAgICAgICAgIGlmKCBldi50YXJnZXQgIT0gdGhpcyApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCBhbmltRW5kRXZlbnROYW1lLCBvbkVuZENhbGxiYWNrRm4gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCBjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7IGNhbGxiYWNrLmNhbGwoKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoIHN1cHBvcnQuYW5pbWF0aW9ucyApIHtcclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoIGFuaW1FbmRFdmVudE5hbWUsIG9uRW5kQ2FsbGJhY2tGbiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9uRW5kQ2FsbGJhY2tGbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXZlbnR0eXBlID0gbW9iaWxlY2hlY2soKSA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XHJcbiAgXHJcbiAgICBbXS5zbGljZS5jYWxsKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZ0LWNvbnRyb2wnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50dHlwZSwgZnVuY3Rpb24oIGV2ICkge1xyXG4gICAgICAgIGNsYXNzaWUuYWRkKCBlbCwgJ2Z0LWNvbnRyb2wtLWNsaWNrJyApO1xyXG4gICAgICAgIG9uRW5kQW5pbWF0aW9uKCBjbGFzc2llLmhhcyggZWwsICdmdC1jb250cm9sLS1jb21wbGV4JyApID8gZWwucXVlcnlTZWxlY3RvciggJy5mdC1jb250cm9sX19oZWxwZXInICkgOiBlbCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjbGFzc2llLnJlbW92ZSggZWwsICdmdC1jb250cm9sLS1jbGljaycgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH0gKTtcclxuICBcclxuICB9KSgpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnRDb250cm9sQWRqdXN0TGVuZ3RoICgpIHtcclxuICBcclxuICB2YXIgZmFydGxldFRpbWUgPSAzMCxcclxuICAgICAgY3VycmVudFJvdGF0aW9uID0gMCxcclxuICAgICAgc3RlcExpbWl0ID0gNCxcclxuICAgICAgc3RlcENvdW50ID0gMCxcclxuICAgICAgbWluaW11bVNlY29uZHMgPSA1LFxyXG4gICAgICBjdXJyZW50U2V0cyA9IDEwO1xyXG4gICAgICB0aW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWFkanVzdC1sZW5ndGgtY291bnQnKSxcclxuICAgICAgbW9kdWxlT2JqID0ge307XHJcbiAgXHJcbiAgXHJcbiAgbW9kdWxlT2JqLnVwZGF0ZVRpbWUgPSBmdW5jdGlvbiAoZSwgX3JvdGF0aW9uKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbik7XHJcbiAgICBcclxuICAgIHZhciByb3RhdGlvbiA9IHRoaXMudGFyZ2V0ID8gTWF0aC5yb3VuZCh0aGlzLnRhcmdldC5fZ3NUcmFuc2Zvcm0ucm90YXRpb24gJSAzNjApIDogX3JvdGF0aW9uO1xyXG4gICAgXHJcbiAgICBpZiAocm90YXRpb24gPT09IGN1cnJlbnRSb3RhdGlvbikge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJvdGF0aW9uID4gY3VycmVudFJvdGF0aW9uKSB7XHJcbiAgICAgICAgc3RlcENvdW50Kys7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGVwQ291bnQtLTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHN0ZXBDb3VudCA+IHN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA8IDk5OSkge1xyXG4gICAgICAgIGZhcnRsZXRUaW1lKys7XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50IDwgLXN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA+IChtaW5pbXVtU2Vjb25kcykpe1xyXG4gICAgICAgIGZhcnRsZXRUaW1lLS07XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50ID4gc3RlcExpbWl0IHx8IHN0ZXBDb3VudCA8IC1zdGVwTGltaXQgKXtcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjdXJyZW50Um90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIFxyXG4gICAgdGltZVRleHQudGV4dENvbnRlbnQgPSBmYXJ0bGV0VGltZS50b1N0cmluZygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmFydGxldFRpbWUudG9TdHJpbmcoKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIFR3ZWVuTGl0ZS5zZXQoJyNmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnLCB7dHJhbnNmb3JtT3JpZ2luOicxMTUlIDEwOCUnfSk7XHJcbiAgXHJcbiAgRHJhZ2dhYmxlLmNyZWF0ZSgnI2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcsIHtcclxuICAgICAgdHlwZToncm90YXRpb24nLFxyXG4gICAgICB0aHJvd1Byb3BzOnRydWUsXHJcbiAgICAgIGRyYWdDbGlja2FibGVzOnRydWUsXHJcbiAgICAgIC8vIG9uRHJhZzogZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaGknKTt9LFxyXG4gICAgICBvbkRyYWc6IG1vZHVsZU9iai51cGRhdGVUaW1lLFxyXG4gICAgICBvblRocm93VXBkYXRlOm1vZHVsZU9iai51cGRhdGVUaW1lXHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIG1vZHVsZU9iajtcclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICB2YXIgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgc2V0c1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLWNvdW50JyksXHJcbiAgICAgIHNldHNQbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1wbHVzJyksXHJcbiAgICAgIHNldHNNaW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtbWludXMnKTtcclxuICBcclxuICBcclxuICAgICAgc2V0c1BsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTZXRzIDwgOTkpIHtcclxuICAgICAgICAgICAgICBjdXJyZW50U2V0cysrO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHNJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgc2V0c01pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50U2V0cyA+IDEpIHtcclxuICAgICAgICAgICAgICBjdXJyZW50U2V0cy0tO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVNldHNJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2V0c0luZm8gKCkge1xyXG4gICAgICAgICAgc2V0c1RleHQuaW5uZXJIVE1MID0gY3VycmVudFNldHMudG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gIHZhciBtb2R1bGVPYmogPSB7fSxcclxuICAgICAgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zdGFydCcpLFxyXG4gICAgICBwbGF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWljb24tcGxheScpLFxyXG4gICAgICBwYXVzZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1pY29uLXBhdXNlJyk7XHJcbiAgICAgIFxyXG4gICAgICBtb2R1bGVPYmouU1RBUlRfRkFSVExFVCA9ICdzdGFydEZhcnRsZXQnO1xyXG4gICAgICBtb2R1bGVPYmouUEFVU0VfRkFSVExFVCA9ICdwYXVzZUZhcnRsZXQnO1xyXG4gIFxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChjbGFzc2llLmhhcyggcGxheUljb24sICdmdC1jb250cm9sLWhpZGUnICkpIHtcclxuICAgICAgY2xhc3NpZS5yZW1vdmUoIHBsYXlJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICBjbGFzc2llLmFkZCggcGF1c2VJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1vZHVsZU9iai5QQVVTRV9GQVJUTEVUKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2xhc3NpZS5hZGQoIHBsYXlJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICBjbGFzc2llLnJlbW92ZSggcGF1c2VJY29uLCAnZnQtY29udHJvbC1oaWRlJyApO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1vZHVsZU9iai5TVEFSVF9GQVJUTEVUKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIG1vZHVsZU9iajtcclxuXHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX2Z0U3RhcnRPYmopIHtcclxuICBcclxuICB2YXIgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zdGFydCcpLFxyXG4gICAgICB0aW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcpLFxyXG4gICAgICByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXJlc2V0JyksXHJcbiAgICAgIHBsdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLXBsdXMnKSxcclxuICAgICAgbWludXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLW1pbnVzJyksXHJcbiAgICAgIHNldFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLWNvdW50Jyk7XHJcbiAgICAgIHNldFRleHRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudC13cmFwcGVyLWlkJyk7XHJcbiAgXHJcbiAgdmFyIGhpZGVVSVRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG4gIFxyXG4gIHZhciBjcmVhdGVUaW1lbGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnRvKHJlc2V0QnV0dG9uLCAwLjA1LCB7YXV0b0FscGhhOjB9KVxyXG4gICAgICAgICAgICAgICAgICAudG8odGltZUJ1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHBsdXNCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhtaW51c0J1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHNldFRleHQsIDAuMSwge3NjYWxlOiAnKz0xLjInfSk7XHJcbiAgICBoaWRlVUlUaW1lbGluZS5zdG9wKCk7XHJcbiAgICAvLyBodHRwOi8vY29kZXBlbi5pby9qb25hdGhhbi9wZW4vTEthY2pcclxuICAgIC8vIGh0dHA6Ly9jb2RlcGVuLmlvL2pvbmF0aGFuL3Blbi9wcXdycy9cclxuICAgIC8vIGh0dHA6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy85MTczLXNjYWxpbmctYW4tZWxlbWVudC1iZWNvbWVzLXBpeGVsYXRlZC9cclxuICB9O1xyXG4gIFxyXG4gIGNyZWF0ZVRpbWVsaW5lKCk7XHJcbiAgXHJcbiAgdmFyIGhpZGVVSSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnBsYXkoKTtcclxuICB9O1xyXG4gIFxyXG4gIHZhciBzaG93VUkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRlVUlUaW1lbGluZS5yZXZlcnNlKCk7XHJcbiAgfTtcclxuICBcclxuICAvLyBjb25zb2xlLmxvZyhfZnRTdGFydE9iai5TVEFSVF9GQVJUTEVUKTtcclxuICAvLyBjb25zb2xlLmxvZyhfZnRTdGFydE9iaik7XHJcbiAgXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihfZnRTdGFydE9iai5TVEFSVF9GQVJUTEVULCBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0Jyk7XHJcbiAgICBoaWRlVUkoKTtcclxuICB9KTtcclxuICBcclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKF9mdFN0YXJ0T2JqLlBBVVNFX0ZBUlRMRVQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncGF1c2UnKTtcclxuICAgIHNob3dVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBcclxufVxyXG4iXX0=

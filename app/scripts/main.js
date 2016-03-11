(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fControlEffectRadomir = require('./ft-control--effect-radomir.js');
var ftAdjustLength = require('./ft-control-adjust-length.js');
var ftSetsCount = require('./ft-control-sets-count.js');
var ftStart = require('./ft-control-start.js');
var ftUIController = require('./ft-ui-controller.js');

fControlEffectRadomir();
ftAdjustLength();
ftSetsCount();
ftStart();
ftUIController();

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
  
  var startButton = document.getElementById('ft-control-start'),
      playIcon = document.getElementById('ft-control-icon-play'),
      pauseIcon = document.getElementById('ft-control-icon-pause');
  
  startButton.addEventListener('click', function (e) {
    if (classie.has( playIcon, 'ft-control-hide' )) {
      classie.remove( playIcon, 'ft-control-hide' );
      classie.add( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event('pauseFartlet'));
    }
    else {
      classie.add( playIcon, 'ft-control-hide' );
      classie.remove( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event('startFartlet'));
    }
  });

  
}

},{}],6:[function(require,module,exports){
module.exports = function () {
  
  var startButton = document.getElementById('ft-control-start'),
      timeButton = document.getElementById('ft-control-adjust-length'),
      resetButton = document.getElementById('ft-control-reset'),
      plusButton = document.getElementById('ft-control-sets-plus'),
      minusButton = document.getElementById('ft-control-sets-minus'),
      setText = document.getElementById('ft-control-sets-count');
  
  var hideUITimeline = new TimelineLite();
  
  var createTimeline = function () {
    hideUITimeline.to(resetButton, 0.05, {autoAlpha:0})
                  .to(timeButton, 0.05, {autoAlpha:0})
                  .to(plusButton, 0.05, {autoAlpha:0})
                  .to(minusButton, 0.05, {autoAlpha:0})
                  .to(setText, 0.1, {x:'-=90', y: '+=20', scale: '+=2'});
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
  
  startButton.addEventListener('startFartlet', function (e) {
    console.log('start');
    hideUI();
  });
  
  startButton.addEventListener('pauseFartlet', function (e) {
    console.log('pause');
    showUI();
  });

  
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC0tZWZmZWN0LXJhZG9taXIuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC1zZXRzLWNvdW50LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC1jb250cm9sLXN0YXJ0LmpzIiwiYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC11aS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZkNvbnRyb2xFZmZlY3RSYWRvbWlyID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLS1lZmZlY3QtcmFkb21pci5qcycpO1xyXG52YXIgZnRBZGp1c3RMZW5ndGggPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcycpO1xyXG52YXIgZnRTZXRzQ291bnQgPSByZXF1aXJlKCcuL2Z0LWNvbnRyb2wtc2V0cy1jb3VudC5qcycpO1xyXG52YXIgZnRTdGFydCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1zdGFydC5qcycpO1xyXG52YXIgZnRVSUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2Z0LXVpLWNvbnRyb2xsZXIuanMnKTtcclxuXHJcbmZDb250cm9sRWZmZWN0UmFkb21pcigpO1xyXG5mdEFkanVzdExlbmd0aCgpO1xyXG5mdFNldHNDb3VudCgpO1xyXG5mdFN0YXJ0KCk7XHJcbmZ0VUlDb250cm9sbGVyKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gIChmdW5jdGlvbigpIHtcclxuICBcclxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzExMzgxNzMwLzk4OTQzOVxyXG4gICAgZnVuY3Rpb24gbW9iaWxlY2hlY2soKSB7XHJcbiAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsa3xiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSljaGVjayA9IHRydWV9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB2YXIgc3VwcG9ydCA9IHsgYW5pbWF0aW9ucyA6IE1vZGVybml6ci5jc3NhbmltYXRpb25zIH0sXHJcbiAgICAgIGFuaW1FbmRFdmVudE5hbWVzID0geyAnV2Via2l0QW5pbWF0aW9uJyA6ICd3ZWJraXRBbmltYXRpb25FbmQnLCAnT0FuaW1hdGlvbicgOiAnb0FuaW1hdGlvbkVuZCcsICdtc0FuaW1hdGlvbicgOiAnTVNBbmltYXRpb25FbmQnLCAnYW5pbWF0aW9uJyA6ICdhbmltYXRpb25lbmQnIH0sXHJcbiAgICAgIGFuaW1FbmRFdmVudE5hbWUgPSBhbmltRW5kRXZlbnROYW1lc1sgTW9kZXJuaXpyLnByZWZpeGVkKCAnYW5pbWF0aW9uJyApIF0sXHJcbiAgICAgIG9uRW5kQW5pbWF0aW9uID0gZnVuY3Rpb24oIGVsLCBjYWxsYmFjayApIHtcclxuICAgICAgICB2YXIgb25FbmRDYWxsYmFja0ZuID0gZnVuY3Rpb24oIGV2ICkge1xyXG4gICAgICAgICAgaWYoIHN1cHBvcnQuYW5pbWF0aW9ucyApIHtcclxuICAgICAgICAgICAgaWYoIGV2LnRhcmdldCAhPSB0aGlzICkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGFuaW1FbmRFdmVudE5hbWUsIG9uRW5kQ2FsbGJhY2tGbiApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoIGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHsgY2FsbGJhY2suY2FsbCgpOyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiggc3VwcG9ydC5hbmltYXRpb25zICkge1xyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lciggYW5pbUVuZEV2ZW50TmFtZSwgb25FbmRDYWxsYmFja0ZuICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgb25FbmRDYWxsYmFja0ZuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBldmVudHR5cGUgPSBtb2JpbGVjaGVjaygpID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcclxuICBcclxuICAgIFtdLnNsaWNlLmNhbGwoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnQtY29udHJvbCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnR0eXBlLCBmdW5jdGlvbiggZXYgKSB7XHJcbiAgICAgICAgY2xhc3NpZS5hZGQoIGVsLCAnZnQtY29udHJvbC0tY2xpY2snICk7XHJcbiAgICAgICAgb25FbmRBbmltYXRpb24oIGNsYXNzaWUuaGFzKCBlbCwgJ2Z0LWNvbnRyb2wtLWNvbXBsZXgnICkgPyBlbC5xdWVyeVNlbGVjdG9yKCAnLmZ0LWNvbnRyb2xfX2hlbHBlcicgKSA6IGVsLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNsYXNzaWUucmVtb3ZlKCBlbCwgJ2Z0LWNvbnRyb2wtLWNsaWNrJyApO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgfSApO1xyXG4gICAgfSApO1xyXG4gIFxyXG4gIH0pKCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgdmFyIGZhcnRsZXRUaW1lID0gMzAsXHJcbiAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDAsXHJcbiAgICAgIHN0ZXBMaW1pdCA9IDQsXHJcbiAgICAgIHN0ZXBDb3VudCA9IDAsXHJcbiAgICAgIG1pbmltdW1TZWNvbmRzID0gNSxcclxuICAgICAgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLWNvdW50Jyk7XHJcbiAgXHJcbiAgXHJcbiAgdmFyICB1cGRhdGVUaW1lID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIHJvdGF0aW9uID0gTWF0aC5yb3VuZCh0aGlzLnRhcmdldC5fZ3NUcmFuc2Zvcm0ucm90YXRpb24gJSAzNjApO1xyXG4gICAgXHJcbiAgICBpZiAocm90YXRpb24gPT09IGN1cnJlbnRSb3RhdGlvbikge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJvdGF0aW9uID4gY3VycmVudFJvdGF0aW9uKSB7XHJcbiAgICAgICAgc3RlcENvdW50Kys7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGVwQ291bnQtLTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHN0ZXBDb3VudCA+IHN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA8IDk5OSkge1xyXG4gICAgICAgIGZhcnRsZXRUaW1lKys7XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50IDwgLXN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA+IChtaW5pbXVtU2Vjb25kcykpe1xyXG4gICAgICAgIGZhcnRsZXRUaW1lLS07XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50ID4gc3RlcExpbWl0IHx8IHN0ZXBDb3VudCA8IC1zdGVwTGltaXQgKXtcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjdXJyZW50Um90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIFxyXG4gICAgdGltZVRleHQudGV4dENvbnRlbnQgPSBmYXJ0bGV0VGltZS50b1N0cmluZygpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgVHdlZW5MaXRlLnNldCgnI2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcsIHt0cmFuc2Zvcm1PcmlnaW46JzExNSUgMTA4JSd9KTtcclxuICBcclxuICBEcmFnZ2FibGUuY3JlYXRlKCcjZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoJywge1xyXG4gICAgICB0eXBlOidyb3RhdGlvbicsXHJcbiAgICAgIHRocm93UHJvcHM6dHJ1ZSxcclxuICAgICAgZHJhZ0NsaWNrYWJsZXM6dHJ1ZSxcclxuICAgICAgLy8gb25EcmFnOiBmdW5jdGlvbigpe2NvbnNvbGUubG9nKCdoaScpO30sXHJcbiAgICAgIG9uRHJhZzogdXBkYXRlVGltZSxcclxuICAgICAgb25UaHJvd1VwZGF0ZTp1cGRhdGVUaW1lXHJcbiAgfSk7XHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgdmFyIGN1cnJlbnRTZXRzID0gMTA7XHJcbiAgICAgIHNldHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudCcpLFxyXG4gICAgICBzZXRzUGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtcGx1cycpLFxyXG4gICAgICBzZXRzTWludXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLW1pbnVzJyk7XHJcbiAgXHJcbiAgXHJcbiAgICAgIHNldHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50U2V0cyA8IDk5KSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFNldHMrKztcclxuICAgICAgICAgICAgICB1cGRhdGVTZXRzSW5mbygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHNldHNNaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFNldHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFNldHMtLTtcclxuICAgICAgICAgICAgICB1cGRhdGVTZXRzSW5mbygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHNJbmZvICgpIHtcclxuICAgICAgICAgIHNldHNUZXh0LmlubmVySFRNTCA9IGN1cnJlbnRTZXRzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICB2YXIgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zdGFydCcpLFxyXG4gICAgICBwbGF5SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWljb24tcGxheScpLFxyXG4gICAgICBwYXVzZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1pY29uLXBhdXNlJyk7XHJcbiAgXHJcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGNsYXNzaWUuaGFzKCBwbGF5SWNvbiwgJ2Z0LWNvbnRyb2wtaGlkZScgKSkge1xyXG4gICAgICBjbGFzc2llLnJlbW92ZSggcGxheUljb24sICdmdC1jb250cm9sLWhpZGUnICk7XHJcbiAgICAgIGNsYXNzaWUuYWRkKCBwYXVzZUljb24sICdmdC1jb250cm9sLWhpZGUnICk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3BhdXNlRmFydGxldCcpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjbGFzc2llLmFkZCggcGxheUljb24sICdmdC1jb250cm9sLWhpZGUnICk7XHJcbiAgICAgIGNsYXNzaWUucmVtb3ZlKCBwYXVzZUljb24sICdmdC1jb250cm9sLWhpZGUnICk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N0YXJ0RmFydGxldCcpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgdmFyIHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc3RhcnQnKSxcclxuICAgICAgdGltZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnKSxcclxuICAgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1yZXNldCcpLFxyXG4gICAgICBwbHVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1wbHVzJyksXHJcbiAgICAgIG1pbnVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1taW51cycpLFxyXG4gICAgICBzZXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudCcpO1xyXG4gIFxyXG4gIHZhciBoaWRlVUlUaW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcclxuICBcclxuICB2YXIgY3JlYXRlVGltZWxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRlVUlUaW1lbGluZS50byhyZXNldEJ1dHRvbiwgMC4wNSwge2F1dG9BbHBoYTowfSlcclxuICAgICAgICAgICAgICAgICAgLnRvKHRpbWVCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhwbHVzQnV0dG9uLCAwLjA1LCB7YXV0b0FscGhhOjB9KVxyXG4gICAgICAgICAgICAgICAgICAudG8obWludXNCdXR0b24sIDAuMDUsIHthdXRvQWxwaGE6MH0pXHJcbiAgICAgICAgICAgICAgICAgIC50byhzZXRUZXh0LCAwLjEsIHt4OictPTkwJywgeTogJys9MjAnLCBzY2FsZTogJys9Mid9KTtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnN0b3AoKTtcclxuICAgIC8vIGh0dHA6Ly9jb2RlcGVuLmlvL2pvbmF0aGFuL3Blbi9MS2FjalxyXG4gICAgLy8gaHR0cDovL2NvZGVwZW4uaW8vam9uYXRoYW4vcGVuL3Bxd3JzL1xyXG4gICAgLy8gaHR0cDovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzkxNzMtc2NhbGluZy1hbi1lbGVtZW50LWJlY29tZXMtcGl4ZWxhdGVkL1xyXG4gIH07XHJcbiAgXHJcbiAgY3JlYXRlVGltZWxpbmUoKTtcclxuICBcclxuICB2YXIgaGlkZVVJID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaGlkZVVJVGltZWxpbmUucGxheSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdmFyIHNob3dVSSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGVVSVRpbWVsaW5lLnJldmVyc2UoKTtcclxuICB9O1xyXG4gIFxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXJ0RmFydGxldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcclxuICAgIGhpZGVVSSgpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlRmFydGxldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGF1c2UnKTtcclxuICAgIHNob3dVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBcclxufVxyXG4iXX0=

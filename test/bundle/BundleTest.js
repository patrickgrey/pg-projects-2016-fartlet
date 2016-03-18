(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.AppTestAPI = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./libTest');

},{"./libTest":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var ftAdjustLength = require('./ft-control-adjust-length.js');

module.exports = MyLibrary;
// module.exports = MyOtherLibrary;

function MyLibrary() {
  this.aSetting = true;
};

MyLibrary.prototype.doFtAdjustLength = function(_rotation) {
  var myObj = ftAdjustLength();
  var time = myObj.updateTime(null, _rotation);
  return time;
}

MyLibrary.prototype.doWork = function() {
  console.log(this.aSetting);
}

},{"./ft-control-adjust-length.js":2}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcFRlc3QuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvbGliVGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliVGVzdCcpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ0Q29udHJvbEFkanVzdExlbmd0aCAoKSB7XHJcbiAgXHJcbiAgdmFyIGZhcnRsZXRUaW1lID0gMzAsXHJcbiAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDAsXHJcbiAgICAgIHN0ZXBMaW1pdCA9IDQsXHJcbiAgICAgIHN0ZXBDb3VudCA9IDAsXHJcbiAgICAgIG1pbmltdW1TZWNvbmRzID0gNSxcclxuICAgICAgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLWNvdW50JyksXHJcbiAgICAgIG1vZHVsZU9iaiA9IHt9O1xyXG4gIFxyXG4gIFxyXG4gIG1vZHVsZU9iai51cGRhdGVUaW1lID0gZnVuY3Rpb24gKGUsIF9yb3RhdGlvbikge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50Um90YXRpb24pO1xyXG4gICAgXHJcbiAgICB2YXIgcm90YXRpb24gPSB0aGlzLnRhcmdldCA/IE1hdGgucm91bmQodGhpcy50YXJnZXQuX2dzVHJhbnNmb3JtLnJvdGF0aW9uICUgMzYwKSA6IF9yb3RhdGlvbjtcclxuICAgIFxyXG4gICAgaWYgKHJvdGF0aW9uID09PSBjdXJyZW50Um90YXRpb24pIHtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyb3RhdGlvbiA+IGN1cnJlbnRSb3RhdGlvbikge1xyXG4gICAgICAgIHN0ZXBDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RlcENvdW50LS07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzdGVwQ291bnQgPiBzdGVwTGltaXQgJiYgZmFydGxldFRpbWUgPCA5OTkpIHtcclxuICAgICAgICBmYXJ0bGV0VGltZSsrO1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHN0ZXBDb3VudCA8IC1zdGVwTGltaXQgJiYgZmFydGxldFRpbWUgPiAobWluaW11bVNlY29uZHMpKXtcclxuICAgICAgICBmYXJ0bGV0VGltZS0tO1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHN0ZXBDb3VudCA+IHN0ZXBMaW1pdCB8fCBzdGVwQ291bnQgPCAtc3RlcExpbWl0ICl7XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudFJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICBcclxuICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gZmFydGxldFRpbWUudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZhcnRsZXRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gIH1cclxuICBcclxuICBUd2VlbkxpdGUuc2V0KCcjZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoJywge3RyYW5zZm9ybU9yaWdpbjonMTE1JSAxMDglJ30pO1xyXG4gIFxyXG4gIERyYWdnYWJsZS5jcmVhdGUoJyNmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnLCB7XHJcbiAgICAgIHR5cGU6J3JvdGF0aW9uJyxcclxuICAgICAgdGhyb3dQcm9wczp0cnVlLFxyXG4gICAgICBkcmFnQ2xpY2thYmxlczp0cnVlLFxyXG4gICAgICAvLyBvbkRyYWc6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ2hpJyk7fSxcclxuICAgICAgb25EcmFnOiBtb2R1bGVPYmoudXBkYXRlVGltZSxcclxuICAgICAgb25UaHJvd1VwZGF0ZTptb2R1bGVPYmoudXBkYXRlVGltZVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBtb2R1bGVPYmo7XHJcbiAgXHJcbn1cclxuIiwidmFyIGZ0QWRqdXN0TGVuZ3RoID0gcmVxdWlyZSgnLi9mdC1jb250cm9sLWFkanVzdC1sZW5ndGguanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXlMaWJyYXJ5O1xyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE15T3RoZXJMaWJyYXJ5O1xyXG5cclxuZnVuY3Rpb24gTXlMaWJyYXJ5KCkge1xyXG4gIHRoaXMuYVNldHRpbmcgPSB0cnVlO1xyXG59O1xyXG5cclxuTXlMaWJyYXJ5LnByb3RvdHlwZS5kb0Z0QWRqdXN0TGVuZ3RoID0gZnVuY3Rpb24oX3JvdGF0aW9uKSB7XHJcbiAgdmFyIG15T2JqID0gZnRBZGp1c3RMZW5ndGgoKTtcclxuICB2YXIgdGltZSA9IG15T2JqLnVwZGF0ZVRpbWUobnVsbCwgX3JvdGF0aW9uKTtcclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuTXlMaWJyYXJ5LnByb3RvdHlwZS5kb1dvcmsgPSBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZyh0aGlzLmFTZXR0aW5nKTtcclxufVxyXG4iXX0=

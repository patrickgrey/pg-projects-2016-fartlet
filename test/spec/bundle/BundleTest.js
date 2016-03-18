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
  
  
  moduleObj.updateTime = function (e) {
    
    var rotation = this.target ? Math.round(this.target._gsTransform.rotation % 360) : 190;
    
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

MyLibrary.prototype.doFtAdjustLength = function() {
  var myObj = ftAdjustLength();
  console.log(myObj);
  console.log('hiyaa ooyaa');
  var time = myObj.updateTime();
  console.log(time);
}

MyLibrary.prototype.doWork = function() {
  console.log(this.aSetting);
}

},{"./ft-control-adjust-length.js":2}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2FwcFRlc3QuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsImFwcC9zY3JpcHRzL21vZHVsZXMvbGliVGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliVGVzdCcpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ0Q29udHJvbEFkanVzdExlbmd0aCAoKSB7XHJcbiAgXHJcbiAgdmFyIGZhcnRsZXRUaW1lID0gMzAsXHJcbiAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDAsXHJcbiAgICAgIHN0ZXBMaW1pdCA9IDQsXHJcbiAgICAgIHN0ZXBDb3VudCA9IDAsXHJcbiAgICAgIG1pbmltdW1TZWNvbmRzID0gNSxcclxuICAgICAgY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLWNvdW50JyksXHJcbiAgICAgIG1vZHVsZU9iaiA9IHt9O1xyXG4gIFxyXG4gIFxyXG4gIG1vZHVsZU9iai51cGRhdGVUaW1lID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIHJvdGF0aW9uID0gdGhpcy50YXJnZXQgPyBNYXRoLnJvdW5kKHRoaXMudGFyZ2V0Ll9nc1RyYW5zZm9ybS5yb3RhdGlvbiAlIDM2MCkgOiAxOTA7XHJcbiAgICBcclxuICAgIGlmIChyb3RhdGlvbiA9PT0gY3VycmVudFJvdGF0aW9uKSB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocm90YXRpb24gPiBjdXJyZW50Um90YXRpb24pIHtcclxuICAgICAgICBzdGVwQ291bnQrKztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0ZXBDb3VudC0tO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc3RlcENvdW50ID4gc3RlcExpbWl0ICYmIGZhcnRsZXRUaW1lIDwgOTk5KSB7XHJcbiAgICAgICAgZmFydGxldFRpbWUrKztcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGVwQ291bnQgPCAtc3RlcExpbWl0ICYmIGZhcnRsZXRUaW1lID4gKG1pbmltdW1TZWNvbmRzKSl7XHJcbiAgICAgICAgZmFydGxldFRpbWUtLTtcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGVwQ291bnQgPiBzdGVwTGltaXQgfHwgc3RlcENvdW50IDwgLXN0ZXBMaW1pdCApe1xyXG4gICAgICAgIHN0ZXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGN1cnJlbnRSb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgXHJcbiAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9IGZhcnRsZXRUaW1lLnRvU3RyaW5nKCk7XHJcbiAgICBcclxuICAgIHJldHVybiBmYXJ0bGV0VGltZS50b1N0cmluZygpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgVHdlZW5MaXRlLnNldCgnI2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcsIHt0cmFuc2Zvcm1PcmlnaW46JzExNSUgMTA4JSd9KTtcclxuICBcclxuICBEcmFnZ2FibGUuY3JlYXRlKCcjZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoJywge1xyXG4gICAgICB0eXBlOidyb3RhdGlvbicsXHJcbiAgICAgIHRocm93UHJvcHM6dHJ1ZSxcclxuICAgICAgZHJhZ0NsaWNrYWJsZXM6dHJ1ZSxcclxuICAgICAgLy8gb25EcmFnOiBmdW5jdGlvbigpe2NvbnNvbGUubG9nKCdoaScpO30sXHJcbiAgICAgIG9uRHJhZzogbW9kdWxlT2JqLnVwZGF0ZVRpbWUsXHJcbiAgICAgIG9uVGhyb3dVcGRhdGU6bW9kdWxlT2JqLnVwZGF0ZVRpbWVcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gbW9kdWxlT2JqO1xyXG4gIFxyXG59XHJcbiIsInZhciBmdEFkanVzdExlbmd0aCA9IHJlcXVpcmUoJy4vZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLmpzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE15TGlicmFyeTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBNeU90aGVyTGlicmFyeTtcclxuXHJcbmZ1bmN0aW9uIE15TGlicmFyeSgpIHtcclxuICB0aGlzLmFTZXR0aW5nID0gdHJ1ZTtcclxufTtcclxuXHJcbk15TGlicmFyeS5wcm90b3R5cGUuZG9GdEFkanVzdExlbmd0aCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBteU9iaiA9IGZ0QWRqdXN0TGVuZ3RoKCk7XHJcbiAgY29uc29sZS5sb2cobXlPYmopO1xyXG4gIGNvbnNvbGUubG9nKCdoaXlhYSBvb3lhYScpO1xyXG4gIHZhciB0aW1lID0gbXlPYmoudXBkYXRlVGltZSgpO1xyXG4gIGNvbnNvbGUubG9nKHRpbWUpO1xyXG59XHJcblxyXG5NeUxpYnJhcnkucHJvdG90eXBlLmRvV29yayA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKHRoaXMuYVNldHRpbmcpO1xyXG59XHJcbiJdfQ==

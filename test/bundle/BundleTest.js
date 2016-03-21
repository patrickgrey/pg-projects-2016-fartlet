(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.AppTestAPI = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
module.exports = require('./libTest');

},{"./libTest":3}],3:[function(require,module,exports){
var ftAdjustLength = require('D:/Offline/patrickgrey/projects/2016/pg-projects-2016-fartlet/app/scripts/modules/ft-control-adjust-length.js');

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

},{"D:/Offline/patrickgrey/projects/2016/pg-projects-2016-fartlet/app/scripts/modules/ft-control-adjust-length.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aC5qcyIsInRlc3Qvc3BlYy9tb2R1bGVzL2FwcFRlc3QuanMiLCJ0ZXN0L3NwZWMvbW9kdWxlcy9saWJUZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnRDb250cm9sQWRqdXN0TGVuZ3RoICgpIHtcclxuICBcclxuICB2YXIgZmFydGxldFRpbWUgPSAzMCxcclxuICAgICAgY3VycmVudFJvdGF0aW9uID0gMCxcclxuICAgICAgc3RlcExpbWl0ID0gNCxcclxuICAgICAgc3RlcENvdW50ID0gMCxcclxuICAgICAgbWluaW11bVNlY29uZHMgPSA1LFxyXG4gICAgICBjdXJyZW50U2V0cyA9IDEwO1xyXG4gICAgICB0aW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLWFkanVzdC1sZW5ndGgtY291bnQnKSxcclxuICAgICAgbW9kdWxlT2JqID0ge307XHJcbiAgXHJcbiAgXHJcbiAgbW9kdWxlT2JqLnVwZGF0ZVRpbWUgPSBmdW5jdGlvbiAoZSwgX3JvdGF0aW9uKSB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRSb3RhdGlvbik7XHJcbiAgICBcclxuICAgIHZhciByb3RhdGlvbiA9IHRoaXMudGFyZ2V0ID8gTWF0aC5yb3VuZCh0aGlzLnRhcmdldC5fZ3NUcmFuc2Zvcm0ucm90YXRpb24gJSAzNjApIDogX3JvdGF0aW9uO1xyXG4gICAgXHJcbiAgICBpZiAocm90YXRpb24gPT09IGN1cnJlbnRSb3RhdGlvbikge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJvdGF0aW9uID4gY3VycmVudFJvdGF0aW9uKSB7XHJcbiAgICAgICAgc3RlcENvdW50Kys7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGVwQ291bnQtLTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHN0ZXBDb3VudCA+IHN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA8IDk5OSkge1xyXG4gICAgICAgIGZhcnRsZXRUaW1lKys7XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50IDwgLXN0ZXBMaW1pdCAmJiBmYXJ0bGV0VGltZSA+IChtaW5pbXVtU2Vjb25kcykpe1xyXG4gICAgICAgIGZhcnRsZXRUaW1lLS07XHJcbiAgICAgICAgc3RlcENvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RlcENvdW50ID4gc3RlcExpbWl0IHx8IHN0ZXBDb3VudCA8IC1zdGVwTGltaXQgKXtcclxuICAgICAgICBzdGVwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjdXJyZW50Um90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIFxyXG4gICAgdGltZVRleHQudGV4dENvbnRlbnQgPSBmYXJ0bGV0VGltZS50b1N0cmluZygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmFydGxldFRpbWUudG9TdHJpbmcoKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIFR3ZWVuTGl0ZS5zZXQoJyNmdC1jb250cm9sLWFkanVzdC1sZW5ndGgnLCB7dHJhbnNmb3JtT3JpZ2luOicxMTUlIDEwOCUnfSk7XHJcbiAgXHJcbiAgRHJhZ2dhYmxlLmNyZWF0ZSgnI2Z0LWNvbnRyb2wtYWRqdXN0LWxlbmd0aCcsIHtcclxuICAgICAgdHlwZToncm90YXRpb24nLFxyXG4gICAgICB0aHJvd1Byb3BzOnRydWUsXHJcbiAgICAgIGRyYWdDbGlja2FibGVzOnRydWUsXHJcbiAgICAgIC8vIG9uRHJhZzogZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaGknKTt9LFxyXG4gICAgICBvbkRyYWc6IG1vZHVsZU9iai51cGRhdGVUaW1lLFxyXG4gICAgICBvblRocm93VXBkYXRlOm1vZHVsZU9iai51cGRhdGVUaW1lXHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIG1vZHVsZU9iajtcclxuICBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliVGVzdCcpO1xyXG4iLCJ2YXIgZnRBZGp1c3RMZW5ndGggPSByZXF1aXJlKCdEOi9PZmZsaW5lL3BhdHJpY2tncmV5L3Byb2plY3RzLzIwMTYvcGctcHJvamVjdHMtMjAxNi1mYXJ0bGV0L2FwcC9zY3JpcHRzL21vZHVsZXMvZnQtY29udHJvbC1hZGp1c3QtbGVuZ3RoLmpzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE15TGlicmFyeTtcclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBNeU90aGVyTGlicmFyeTtcclxuXHJcbmZ1bmN0aW9uIE15TGlicmFyeSgpIHtcclxuICB0aGlzLmFTZXR0aW5nID0gdHJ1ZTtcclxufTtcclxuXHJcbk15TGlicmFyeS5wcm90b3R5cGUuZG9GdEFkanVzdExlbmd0aCA9IGZ1bmN0aW9uKF9yb3RhdGlvbikge1xyXG4gIHZhciBteU9iaiA9IGZ0QWRqdXN0TGVuZ3RoKCk7XHJcbiAgdmFyIHRpbWUgPSBteU9iai51cGRhdGVUaW1lKG51bGwsIF9yb3RhdGlvbik7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn1cclxuXHJcbk15TGlicmFyeS5wcm90b3R5cGUuZG9Xb3JrID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc29sZS5sb2codGhpcy5hU2V0dGluZyk7XHJcbn1cclxuIl19

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.AppTestAPI = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
  
  'use strict'
  
  var moduleObj = {},
      setsText = document.getElementById('ft-control-sets-count'),
      setsPlus = document.getElementById('ft-control-sets-plus'),
      setsMinus = document.getElementById('ft-control-sets-minus');
      
      moduleObj.currentSets = 10;
      
      moduleObj.getCurrentSets = function () {
        return moduleObj.currentSets;
      };
      
      moduleObj.updateCount = function (_crement) {
        var currentCount = moduleObj.currentSets;
        if ((currentCount += _crement) > 1 && (currentCount += _crement) < 99) {
          moduleObj.currentSets += _crement;
          updateSetsInfo();
        }
        
        return moduleObj.currentSets;
      };
  
  
      setsPlus.addEventListener('click', function (e) {
        moduleObj.updateCount(1);
      });
      
      setsMinus.addEventListener('click', function (e) {
        moduleObj.updateCount(-1);
      });
      
      function updateSetsInfo () {
          setsText.innerHTML = moduleObj.currentSets.toString();
      }
      
      return moduleObj;
  
}

},{}],2:[function(require,module,exports){
module.exports = require('./libTest');

},{"./libTest":3}],3:[function(require,module,exports){
var ftSetsCount = require('D:/Offline/patrickgrey/projects/2016/pg-projects-2016-fartlet/app/scripts/modules/ft-control-sets-count.js');

module.exports = TestLibrary;

function TestLibrary() {
  this.ftSetsCount = ftSetsCount();
}

// TestLibrary.prototype.doWork = function() {
//   console.log(this.aSetting);
// }

},{"D:/Offline/patrickgrey/projects/2016/pg-projects-2016-fartlet/app/scripts/modules/ft-control-sets-count.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tb2R1bGVzL2Z0LWNvbnRyb2wtc2V0cy1jb3VudC5qcyIsInRlc3Qvc3BlYy9tb2R1bGVzL2FwcFRlc3QuanMiLCJ0ZXN0L3NwZWMvbW9kdWxlcy9saWJUZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICAndXNlIHN0cmljdCdcclxuICBcclxuICB2YXIgbW9kdWxlT2JqID0ge30sXHJcbiAgICAgIHNldHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z0LWNvbnRyb2wtc2V0cy1jb3VudCcpLFxyXG4gICAgICBzZXRzUGx1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdC1jb250cm9sLXNldHMtcGx1cycpLFxyXG4gICAgICBzZXRzTWludXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnQtY29udHJvbC1zZXRzLW1pbnVzJyk7XHJcbiAgICAgIFxyXG4gICAgICBtb2R1bGVPYmouY3VycmVudFNldHMgPSAxMDtcclxuICAgICAgXHJcbiAgICAgIG1vZHVsZU9iai5nZXRDdXJyZW50U2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbW9kdWxlT2JqLmN1cnJlbnRTZXRzO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgbW9kdWxlT2JqLnVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKF9jcmVtZW50KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRDb3VudCA9IG1vZHVsZU9iai5jdXJyZW50U2V0cztcclxuICAgICAgICBpZiAoKGN1cnJlbnRDb3VudCArPSBfY3JlbWVudCkgPiAxICYmIChjdXJyZW50Q291bnQgKz0gX2NyZW1lbnQpIDwgOTkpIHtcclxuICAgICAgICAgIG1vZHVsZU9iai5jdXJyZW50U2V0cyArPSBfY3JlbWVudDtcclxuICAgICAgICAgIHVwZGF0ZVNldHNJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtb2R1bGVPYmouY3VycmVudFNldHM7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgXHJcbiAgICAgIHNldHNQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtb2R1bGVPYmoudXBkYXRlQ291bnQoMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgc2V0c01pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtb2R1bGVPYmoudXBkYXRlQ291bnQoLTEpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHNJbmZvICgpIHtcclxuICAgICAgICAgIHNldHNUZXh0LmlubmVySFRNTCA9IG1vZHVsZU9iai5jdXJyZW50U2V0cy50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbW9kdWxlT2JqO1xyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWJUZXN0Jyk7XHJcbiIsInZhciBmdFNldHNDb3VudCA9IHJlcXVpcmUoJ0Q6L09mZmxpbmUvcGF0cmlja2dyZXkvcHJvamVjdHMvMjAxNi9wZy1wcm9qZWN0cy0yMDE2LWZhcnRsZXQvYXBwL3NjcmlwdHMvbW9kdWxlcy9mdC1jb250cm9sLXNldHMtY291bnQuanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGVzdExpYnJhcnk7XHJcblxyXG5mdW5jdGlvbiBUZXN0TGlicmFyeSgpIHtcclxuICB0aGlzLmZ0U2V0c0NvdW50ID0gZnRTZXRzQ291bnQoKTtcclxufVxyXG5cclxuLy8gVGVzdExpYnJhcnkucHJvdG90eXBlLmRvV29yayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKHRoaXMuYVNldHRpbmcpO1xyXG4vLyB9XHJcbiJdfQ==

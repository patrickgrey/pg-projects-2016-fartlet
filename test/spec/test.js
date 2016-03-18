// var adjustLength = require("/app/scripts/modules/ft-control-adjust-length.js");
var appTestAPI = new AppTestAPI();
// console.log(appTestAPI);
// appTestAPI.doWork();
appTestAPI.doFtAdjustLength(90);
var time = appTestAPI.doFtAdjustLength(270);
console.log('time: '+time);
// import * as Module from '/app/scripts/modules/ft-control-adjust-length.js';

(function () {
  'use strict';
  

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });
  
  
})();

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

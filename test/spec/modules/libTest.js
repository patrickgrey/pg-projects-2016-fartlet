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

module.exports = function () {
  
  TweenLite.set('#ft-control-adjust-length', {transformOrigin:'100% 100%'});
  
  Draggable.create('#ft-control-adjust-length', {
      type:'rotation',
      throwProps:true,
      dragClickables:true
      // onDrag: updateTime,
      // onThrowUpdate:updateTime
  });
  // TweenLite.to("#ft-control-adjust-length", 1, {x:100});
  //
  //
  //
  // http://greensock.com/forums/topic/8189-problem-with-new-draggable-plugin/
  //
  // Draggable.create("#ft-control-adjust-length", {dragClickables:true});
  
}

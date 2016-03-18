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

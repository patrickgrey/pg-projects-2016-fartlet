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

module.exports = function () {
  
  var moduleObj = {},
      startButton = document.getElementById('ft-control-start'),
      playIcon = document.getElementById('ft-control-icon-play'),
      pauseIcon = document.getElementById('ft-control-icon-pause');
      
      moduleObj.START_FARTLET = 'startFartlet';
      moduleObj.PAUSE_FARTLET = 'pauseFartlet';
  
  startButton.addEventListener('click', function (e) {
    if (classie.has( playIcon, 'ft-control-hide' )) {
      classie.remove( playIcon, 'ft-control-hide' );
      classie.add( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event(moduleObj.PAUSE_FARTLET));
    }
    else {
      classie.add( playIcon, 'ft-control-hide' );
      classie.remove( pauseIcon, 'ft-control-hide' );
      this.dispatchEvent(new Event(moduleObj.START_FARTLET));
    }
  });
  
  return moduleObj;

  
}

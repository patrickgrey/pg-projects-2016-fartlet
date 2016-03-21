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

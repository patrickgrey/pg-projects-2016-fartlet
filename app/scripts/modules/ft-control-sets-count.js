module.exports = function () {
  
  var currentSets = 10;
      setsText = document.getElementById('ft-control-sets-count'),
      setsPlus = document.getElementById('ft-control-sets-plus'),
      setsMinus = document.getElementById('ft-control-sets-minus');
  
  
      setsPlus.addEventListener('click', function (e) {
          if (currentSets < 99) {
              currentSets++;
              updateSetsInfo();
          }
      });
      
      setsMinus.addEventListener('click', function (e) {
          if (currentSets > 1) {
              currentSets--;
              updateSetsInfo();
          }
      });
      
      function updateSetsInfo () {
          setsText.innerHTML = currentSets.toString();
      }
  
}

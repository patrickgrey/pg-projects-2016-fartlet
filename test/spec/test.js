// RESEARCH:
// http://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai


var appTestAPI = new AppTestAPI();

var setsCount = appTestAPI.ftSetsCount,
    currentCount,
    upperLimit = 99,
    lowerLimit = 1;

(function () {
  'use strict';
  

  describe('Set fartlet count buttons', function () {
    
    it('should increment the fartlet set count when the plus button triggers the updateCount.', function () {
      currentCount = setsCount.getCurrentSets();
      expect(setsCount.updateCount(1)).to.be.greaterThan(currentCount);
    });
    
    it('should decrement the fartlet set count when the minus button triggers the updateCount.', function () {
      currentCount = setsCount.getCurrentSets();
      expect(setsCount.updateCount(-1)).to.be.lessThan(currentCount);
    });
    
    it('should not allow count to go above '+upperLimit+'.', function () {
      setsCount.updateCount(upperLimit);
      expect(setsCount.getCurrentSets()).to.be.lessThan(upperLimit);
    });
    
    it('should not allow count to go below '+lowerLimit+'.', function () {
      setsCount.updateCount(-upperLimit);
      expect(setsCount.getCurrentSets()).to.be.greaterThan(lowerLimit);
    });
    
  });
  
  
})();

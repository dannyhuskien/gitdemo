const expect = require('chai').expect;
require('../lib/array');

describe('Array', function(){
  describe('#myMap', function(){
    it('should transform  array into array of powers', function(){
      const output1 = [1, 2, 3].myMap(n => n * n);
      expect(output1).to.deep.equal([1, 4, 9]);
      const output2 = [1, 2, 3].myMap((n, i) => n * n * n + i);
      expect(output2).to.deep.equal([1, 9, 29]);
    });
  });

  describe('#myFilter', function(){
    it('should get odd values from input array', function(){
      const output1 = [1, 2, 3, 4, 5].myFilter(n => n % 2 === 1);
      expect(output1).to.deep.equal([1, 3, 5]);
    });
    it('should get even values from input array', function(){
      const output2 = [1, 2, 3, 4, 5].myFilter(n => n % 2 === 0);
      expect(output2).to.deep.equal([2, 4]);
    });
  });

  describe('#myReduce', function(){
    it('should sum all values in an array when you start with an accumulator equal to zero', function(){
      const output1 = [1, 2, 3, 4, 5].myReduce((prev, current) => prev + current);
      expect(output1).to.equal(15);
    });
    it('should sum all values in array when you start with an accumulator that does not equal zero', function(){
      const output2 = [1, 2, 3, 4, 5].myReduce((prev, current) => prev + current, 10);
      expect(output2).to.equal(25);
    });
  });


});

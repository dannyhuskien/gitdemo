const expect = require('chai').expect;
const Calc = require('../lib/calc');

describe('Calc', function(){
  describe('.factorial', function(){
    it('should compute the factorial of a number', function(){
      expect(Calc.factorial(5)).to.equal(120);
      expect(Calc.factorial(-5)).to.equal(1);
      expect(Calc.factorial(0)).to.equal(1);
    });
  });
  describe('.sum', function(){
    it('should return the sum of two numbers', function(){
      expect(Calc.sum(2,3)).to.equal(5);
      expect(Calc.sum(3,4)).to.equal(7);
      expect(Calc.sum(-2 , 6)).to.equal(4);
    });
  });
  describe('.distance', function(){
    it('should return the distance b/w two points', function(){
      expect(Calc.distance({x:3,y:4},{x:6,y:8})).to.equal(5);
      //expect(Calc.distance({x:2,y:4},{x:4,y:8})).to.equal(5);
    });
  });
  describe('.fib',function(){
    it('should return the nth fib number', function(){
      expect(Calc.fib(9)).to.equal(21);
      expect(Calc.fib(12)).to.equal(89);
      expect(Calc.fib(1)).to.equal(0);
    })
  })
  describe('.factor',function(){
    it('should return the array of factors', function(){
      expect(Calc.factor(100)).to.eql([1,2,4,5,10,20,25,50,100]);
      expect(Calc.factor(10)).to.eql([1,2,5,10]);
    })
  })
  describe('.isPrime',function(){
    it('should tell you if a number is prime', function(){
      expect(Calc.isPrime(9)).to.be.false;
      expect(Calc.isPrime(7)).to.be.true;
      expect(Calc.isPrime(61)).to.be.true;
      expect(Calc.isPrime(63)).to.be.false;
    });
  });
  describe('.max',function(){
    it('should return the Max number', function(){
      expect(Calc.max([1,2,3,4])).to.equal(4);
      expect(Calc.max([1,50,20,-1])).to.equal(50);
    });
  });
  describe('.palindrome',function(){
    it('should tell you if a word is a palindrome', function(){
      expect(Calc.palindrome('racecar')).to.be.true;
      expect(Calc.palindrome('sldkghwor')).to.be.false;
      expect(Calc.palindrome('pizzaisgood')).to.be.false;
      expect(Calc.palindrome('tacocat')).to.be.true;
    })
  })
  describe('.piglatin',function(){
    it('should convert value to piglatin', function(){
      expect(Calc.piglatin('hello world')).to.equal('elloha orldwa');
      expect(Calc.piglatin('good night')).to.equal('oodga ightna');
      expect(Calc.piglatin('pizzaisgood')).to.not.equal('oodga ightna');
    })
  })
});

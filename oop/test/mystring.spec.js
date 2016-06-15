const str = require('../mystring')
const expect = require('chai').expect;
describe('mystring', function(){
  describe('upperCase', function(){
    it('should convert text to uppercase', function(){
      const result = str.upperCase('cat');
      expect(result).to.equal('CAT');
    });
  });
  describe('stringToArray', function(){
    it('should convert text to an array of words', function(){
      const result = str.stringToArray('cat bird frog');
      expect(result).to.deep.equal(['cat','bird','frog']);
      expect(result).to.have.length(3);
      expect(result[1]).to.equal('bird');
    });
  });
  describe('convertToNumber', function(){
    it('should convert text to number', function(){
      const result = str.convertToNumber('3');
      expect(result).to.equal(3);
      expect(result).to.be.a('number');
      expect(result).to.not.be.null;
      expect(result).not.to.be.NaN;
      expect(result).not.to.be.empty;
    });
  });
});

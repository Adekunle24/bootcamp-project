 
 
 import chai   from 'chai';
import aritGeo from '../src/main.js';

const assert = chai.assert;

describe('AritGeo', () => {

    describe("Handle input value type",()=>{
        it("Provided input must not be a number. An array is required",()=>{
            assert.equal(aritGeo(20),'number');
        });
         it("Provided input must not be a string. An array is required",()=>{
            assert.equal(aritGeo('andela'),'string');
        });
         it("Provided input must not be a an object. An array is required",()=>{
            assert.equal(aritGeo({"name":"Andela"}),'object');
        });
          it("Provided input is an empty array. The array must have child elements",()=>{
            assert.equal(aritGeo([]),0);
        });
          it("Array elements must be greater than two",()=>{
            assert.equal(aritGeo([1]),1);
        });
           it("All elements must be a number",()=>{
            assert.equal(aritGeo(["name",1]),"type error");
        });
            it("All elements must be a number",()=>{
            assert.equal(aritGeo(["name",1,[2,3,4]]),"type error");
        });
    });

     describe("Check validation of output",()=>{
        it("Result must be Geometric.",()=>{
            assert.equal(aritGeo([2,6,18]),'Geometric');
        });
         it("Result must be Arithmetric",()=>{
            assert.equal(aritGeo([1,3,5]),'Arithmetic');
        });
          it("Result must be -1",()=>{
            assert.equal(aritGeo([1,2,5]),-1);
        });
    });
console.log(aritGeo([2,6,18]))

});
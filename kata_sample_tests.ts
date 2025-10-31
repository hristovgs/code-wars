import assert from "assert";



// ++++++++ KATA2 -  Basic Mathematical Operations

// sample tests 
import { basicOp } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";

describe('basicOp', () => {
    it('basic tests', () => {
        assert.strictEqual(basicOp('+', 4, 7), 11);
        assert.strictEqual(basicOp('-', 15, 18), -3);
        assert.strictEqual(basicOp('*', 5, 5), 25);
        assert.strictEqual(basicOp('/', 49, 7), 7);
    })
})



// +++++++ KATA4 - Is he gonna survive

//Sample Test
import { hero } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";

describe("Tests:", function() {
  it("Basic tests:", function() {
    assert.equal(hero(10, 5), true);
    assert.equal(hero(7, 4), false);
    assert.equal(hero(4, 5), false);
    assert.equal(hero(100, 40), true);
    assert.equal(hero(1500, 751), false);
    assert.equal(hero(0, 1), false);
  });
});



// +++++++ KATA5 - Convert a String to a Number!

// samplet test
import { stringToNumber } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";

describe("stringToNumber", function() {
  it("should work for the examples", function() {
    assert.strictEqual(stringToNumber("1234"),1234);
    assert.strictEqual(stringToNumber("605"), 605);
    assert.strictEqual(stringToNumber("1405"),1405);
    assert.strictEqual(stringToNumber("-7"),  -7);
  });
});



// +++++ KATA6 - Sum of positive in an array


//sample tests
import { positiveSum }  from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";


describe("solution", function(){
  it("Basic Tests", function(){
    assert.equal(positiveSum([1,2,3,4,5]),15);
    assert.equal(positiveSum([1,-2,3,4,5]),13);
    assert.equal(positiveSum([]),0);
    assert.equal(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.equal(positiveSum([-1,2,3,4,-5]),9);
  });
});
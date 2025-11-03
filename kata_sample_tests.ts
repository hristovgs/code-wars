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



// +++++ KATA7 - If you can't sleep, just count sheeps!! 

//sample test
import {countSheep}  from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";


describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(countSheep(0), '');
    assert.equal(countSheep(1), '1 sheep...');
    assert.equal(countSheep(2), '1 sheep...2 sheep...');
    assert.equal(countSheep(3), '1 sheep...2 sheep...3 sheep...');
  });
});


// ++++++ KATA8 - Write a function which converts the input string to uppercase.

import { makeUpperCase } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";

describe("MakeUpperCase", () => {
  it("Fixed tests", () => {
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("hello world"), "HELLO WORLD");
    assert.strictEqual(makeUpperCase("hello world !"), "HELLO WORLD !");
    assert.strictEqual(makeUpperCase("heLlO wORLd !"), "HELLO WORLD !");
    assert.strictEqual(makeUpperCase("1,2,3 hello world!"), "1,2,3 HELLO WORLD!");
  });
});


// ++++++  KATA9 - Will you make it?

//sample test 

import {zeroFuel} from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";
//import {assert} from "chai";

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});



// +++++ KATA10 - Breaking chocolate problem


// sample test
import { breakChocolate } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";

describe( "Breaking chocolate", ()=>{
  it( "Fixed tests", ()=>{
    assert.strictEqual( breakChocolate(5,5), 24 );
    assert.strictEqual( breakChocolate(7,4), 27 );
    assert.strictEqual( breakChocolate(1,1), 0 );
    assert.strictEqual( breakChocolate(0,0), 0, "What If I Told You There is No Chocolate?" );
    assert.strictEqual( breakChocolate(6,1), 5 );
  });
});



// +++++ KATA11 - Descending Order

//sample test

import { descendingOrder } from "e:/Pragmatic_AT_PT/repository/Code_Wars/Kata_typescript";


describe("descendingOrder", function() {
  it("should return some sample numbers in descending order", function() {
    assert.strictEqual(descendingOrder(0), 0);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});
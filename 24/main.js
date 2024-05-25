"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create variables:
let A = "apple";
let UppercaseA = "APPLE";
let F = 5;
let T = 10;
let fruity = ["Mango", "Orange", "Pineapple"];
//Equality test:
console.log("\nIs A is Equal to apple?");
console.log(A == "apple");
console.log("Is A is not Equal to apple?");
console.log(A != "apple");
//case test:
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(UppercaseA.toLocaleLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(UppercaseA.toLocaleLowerCase() != "apple");
//numerical testing:
console.log("\nIs F is not Equal to T?");
console.log(F != T);
console.log("Is F is Equal to T?");
console.log(F == T);
console.log("\nIs T is Greater than 0?");
console.log(T > 0);
console.log("Is T is lesser than F?");
console.log(T < 5);
console.log("\nIs T is Greater than or Equal to F?");
console.log(T >= 5);
console.log("Is T is lesser than or Equal to F?");
console.log(T <= 5);
//AND Part:
console.log("\nT is not Equal to 5 and T is greater than 5");
console.log(T != 5 && T > 5);
console.log(" T is not Equal to 5 and T is Lesser than 5");
console.log(T != 5 && T < 5);
//OR part:
console.log("\n10 is greater than 50 OR 10 is equal to 10");
console.log(10 > 50 || 10 == 10);
console.log("10 is greater than 50 OR 10 is not equal to 10");
console.log(10 > 50 || 10 != 10);
//testing whether an item in array:
console.log("\nIs Pineapple include in fruity Array");
console.log(fruity.includes("Pineapple"));
console.log("\nIs Orange not include in fruity Array");
console.log(!fruity.includes("Orange"));

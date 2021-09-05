console.log(5 + 5);
console.log(6 - 6);
console.log(7 * 7);
console.log(8 / 8);
console.log(2 ** 3);

console.log(10 % 5);
console.log(10 % 4);
console.log(10 % 9);

let x = 5;
let y = 2;
let z = 7;
console.log(x, y, z);

x = y = z;
console.log(x, y, z);

console.log("Equality operators:\n");
let numTwo = 2;
let two = "2";
console.log(numTwo == two);
console.log(numTwo === two);

console.log("Inequality operators:\n");
let name = "Paul";
let age = 30;
console.log(name != age);

age = 27;
let strAge = "27";
console.log(age !== strAge);

console.log("Shorthand operators:\n");

let count = 2;
count = count + 1;
console.log(count);
count += 1;
console.log(count);

y = 5;
y = y + 1;
y += 1; // What does y = here?
console.log(y);

let w = 10;
console.log(w);
w += 1;
console.log(w);

let a = 20;
a -= 1;

let b = 25;
b *= 2;

let c = 50;
c /= 2;

console.log("a = ", a, " b = ", b, " c = ", c);

let age = 40;
age += 1;
age -= 20;
age *= 20;
console.log("age = ", age);

// Printing values
console.log(2 > 1);
console.log(3 < 2);

let test = 2 >= 3;
console.log(test);
console.log("Two is greated than one? " + (2 > 1));
console.log(3 >= 1);

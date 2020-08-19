////////////////////////////////////////////////////////////
// Iterating over an array #
////////////////////////////////////////////////////////////
const fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i ++) {
    console.log(fruits[i]);
}

////////////////////////////////////////////////////////////
// Iterating over an object #
////////////////////////////////////////////////////////////
for (const fruit of fruits) {
    console.log(fruit)
}

////////////////////////////////////////////////////////////
// The for in loop
////////////////////////////////////////////////////////////
const car = {
    maker: "BMW",
    color: "red",
    year : "2010",
}
for (const prop in car){
    console.log(prop, car[prop]);
}

////////////////////////////////////////////////////////////
// Difference between for of and for in
////////////////////////////////////////////////////////////
let list = [4, 5, 6];

// for...in returns a list of keys
for (let i in list) {
    console.log(i); // "0", "1", "2",
}

// for ...of returns the values
for (let i of list) {
    console.log(i); // "4", "5", "6"
}
for (var i = 0; i < 10; i++) {
    var leak = " I am available outside of the loop";
}
console.log(leak)

function myFunc() {
    var functionScoped = "I am available inside this function";
    console.log(functionScoped);
}
myFunc();
// console.log(functionScoped);

let x = "global";
if (x === "global"){
    let x = "blocked-scoped";
    console.log(x);
}

console.log(x); // global

var y = "global";
if (y === "global") {
    var y = "block-scoped";
    console.log(y);
}

console.log(y); // block-scoped

//////////////////////////////////////////////////////////// 
// const
////////////////////////////////////////////////////////////

const constant = 'I am a constant';
// constant = " I can't be reassigned";

const person = {
    name: 'Alberto',
    age: 25,
}

person.age = 26;
console.log(person.age);

Object.freeze(person)
person.age = 30;
console.log(person.age);

////////////////////////////////////////////////////////////
// The temporal dead zone
////////////////////////////////////////////////////////////

console.log(i);
var i = "I am a variable";


console.log(j);
let j = " I am a let";
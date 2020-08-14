////////////////////////////////////////////////////////////
// arrow functions 
////////////////////////////////////////////////////////////

const greeting1 = function (name) {
    console.log("hello " + name);
}

greeting1('Sid')

let greeting2 = (name) => {
    console.log(`hello ${name}`);
}

greeting2('Sid')

var greeting3 = name => {
    console.log(`hello ${name}`);
}

greeting3('Sid')

var greeting4 = () => {
    console.log(`hello ${name}`);
}

greeting4('Sid')

////////////////////////////////////////////////////////////
// Implicitly return
////////////////////////////////////////////////////////////

const oldFunction = function (name) {
    return `hello ${name}`
}
console.log(oldFunction("sid"))

const arrowFunction = name => `hello ${name}`
console.log(arrowFunction("sid"))

const race = '100m dash'
const runners = ["Usain Bolt", "Justin Gatlin", "Asafa Powell"];
const results = runners.map((runner, i) => ({ name: runner, race, place: i + 1 }));
console.log(results);

const greeting = name => console.log(`hello ${name}`);
greeting("Tom")

////////////////////////////////////////////////////////////
// Arrow functions are anonymous
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// this keyword
////////////////////////////////////////////////////////////
const person1 = {
    age: 10,
    grow: function() {
        this.age++;
        console.log(this.age);
    }
}
person1.grow();

const person2 = {
    age: 10,
    grow: () => {
        this.age--;
        console.log(this.age);
    }
}
person2.grow();


////////////////////////////////////////////////////////////
// Class not using class keyword
////////////////////////////////////////////////////////////
function Person1(name, age) {
    this.name = name;
    this.age = age
}

Person1.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
}

const alberto = new Person1("Alberto", 26)
const caroline = new Person1("Caroline", 26)

alberto.greet()
caroline.greet()

////////////////////////////////////////////////////////////
// Create a class
// Setter and Getter
////////////////////////////////////////////////////////////
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
    farewell() {
        console.log("goodbyt friend")
    }
    static info() {
        console.log("I am a Person class, nice to meet you")
    }
    set name(value) {
       this.name = value
       console.log(this.name)
    }
    get name() {
        console.log(`Your name is ${this.name}`)
    }
}
const alberto2 = new Person2("Alberto", 26)
alberto2.greet();
alberto2.farewell();
Person2.info()

alberto2.name= "Albi"
alberto2.name;
alberto2.name = "Sid"

////////////////////////////////////////////////////////////
// Extending our class
////////////////////////////////////////////////////////////
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log()
    }
}

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

const alberto1 = new Person1("Alberto", 26)
const caroline1 = new Person1("Caroline", 26)

alberto1.greet()
caroline1.greet()

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

    set names(value) {
        this.name = value
        console.log(this.name)
    }

    get names() {
        console.log(`Your name is ${this.name}`)
    }
}

const alberto2 = new Person2("Alberto", 26)
alberto2.greet();
alberto2.farewell();
Person2.info()

alberto2.names = "Albi";
console.log(alberto2.names)
////////////////////////////////////////////////////////////
// Extending our class
////////////////////////////////////////////////////////////
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

class Adult extends Person3 {
    constructor(name, age, work) {
        super(name, age)
        this.work = work;
    }
}

const alberto3 = new Adult("Alberto", 26, "software developer")
console.log(alberto3.age)

console.log(alberto3.work)

alberto3.greet()
////////////////////////////////////////////////////////////
// Extending Arrays
////////////////////////////////////////////////////////////
class Classroom extends Array {
    constructor(name, ...students) {
        super(...students);
        this.name = name;
    }

    add(student) {
        this.push(student)
    }
}

const myClass = new Classroom('1A',
    {name: "Tim", mark: 6},
    {name: "Tom", mark: 3},
    {name: "Jim", mark: 8},
    {name: "Jon", mark: 10}
);
myClass.add({name: "Timmy", mark: 7})
myClass[4];

for (const student of myClass) {
    console.log(student)
}
////////////////////////////////////////////////////////////
// Deconstructing variables into keys and values
////////////////////////////////////////////////////////////
let name = "Alberto"
const surname = "Montalesi"
const age = 25
const nationality = "Italian"

let person = {
    name: name,
    surname: surname,
    age: age,
    nationality: nationality,
}
console.log(person)

person = {
    name,
    surname,
    age,
    nationality
}
console.log(person)

////////////////////////////////////////////////////////////
// Add functions to our Objects
////////////////////////////////////////////////////////////
person = {
    name: "Alberto",
    greet: function() {
        console.log("Hello")
    },
}
person.greet()

person = {
    name: "Alberto",
    greet() {
        console.log("Hello")
    }
}
person.greet();

////////////////////////////////////////////////////////////
// Dynamically define properties of an object
////////////////////////////////////////////////////////////

name = "myname"
person = {}
person[name] = "Alberto"
console.log(person.myname)

const name = "myname"
const person = {
    [name]: "Alberto"
}
console.log(person.myname)
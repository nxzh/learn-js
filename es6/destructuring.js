var person = {
    first: "Sid",
    last: "Zhang",
    links: {
        social: {
            facebook: "https://www.facebook.com/nxzh"
        },
        website: "http://nxzh.github.io"
    }
}

// var first = person.first
// var last = person.last
// console.log(first, last)

const {first, last} = person
console.log(first, last)

const {twitter = "https://www.twitter.com"} = person.links.social
console.log(twitter)

const {facebook: fb} = person.links.social
console.log(fb)

const szh = ["Sid", "Zhang", 25]
const [name, surname, age] = szh
console.log(name)

const info = ["Alberto", "Montalesi", "pizza", "ice cream", "cheese cake"];
// we use the **rest operator** to grab all the remaining values
const [name2, surname2, ...food] = info;
console.log(food);
// Array [ "pizza", "ice cream", "cheese cake" ]

let hungry = "yes"
let full = "no";

[hungry, full] = [full, hungry]
console.log(hungry, full)
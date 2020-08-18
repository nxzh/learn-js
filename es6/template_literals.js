////////////////////////////////////////////////////////////
// Interpolating strings
////////////////////////////////////////////////////////////
const name = "Sid";
const greeting = 'Hello my name is ' + name;

console.log(greeting);

const greetingWithBackticks = `Hello my name is ${name}`;
console.log(greetingWithBackticks);

////////////////////////////////////////////////////////////
// Expression interpolations
////////////////////////////////////////////////////////////
const a = 1;
const b = 10;
console.log(`1 * 10 is ${a * b}`);

////////////////////////////////////////////////////////////
// Create HTML fragments
////////////////////////////////////////////////////////////
const text = "hello, \
my name is Sid \
how are you ?\ ";
console.log(text)

const textMultiLines = `hello,
my name is Sid
how are you?`;
console.log(textMultiLines)

////////////////////////////////////////////////////////////
// Nesting templates
////////////////////////////////////////////////////////////
const people = [{
    name: 'Alberto',
    age: 27
}, {
    name: 'Caroline',
    age: 27
}, {
    name: 'Josh',
    age: 31
}];
const markup = `
<ul>
${people.map(person => `<li> ${person.name}</li>`)}
</ul>
`;
console.log(markup)

////////////////////////////////////////////////////////////
// Add a ternary operator
////////////////////////////////////////////////////////////
const isDiscounted = false

function getPrice() {
    console.log(isDiscounted ? "$10" : "$20");
}

getPrice()

let artiest = {
    name: "Bon Jovi",
    age: 56
};

const text2 = `
<div>
    <p>
${artiest.name} is ${artiest.age} years old ${artiest.song ? `and wrote the song ${artiest.song}` : ''}
    </p>
</div>
`;
console.log(text2)

////////////////////////////////////////////////////////////
// Pass a function inside a template literal
////////////////////////////////////////////////////////////
const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit: "apple",
    others: ['mushrooms', 'instant noodles', 'instant soup'],
}

function groceryList(others) {
    return `
     <p>
     ${others.map(other => ` <span ${other}</span>`).join('\n')}
     </p>
    `;
}

const markup2 = `
<div>
    <p>${groceries.meat}</p>
    <p>${groceries.veggie}</p>
    <p>${groceries.fruit}</p>
    <p>${groceryList(groceries.others)}</p>
</div>
`;

console.log(markup2)

////////////////////////////////////////////////////////////
// Tagged template literals
////////////////////////////////////////////////////////////
let person = "Sid";
let age = 25;

function myTag(strings, personName, personAge) {
    let str = strings[1];
    let ageStr;
    personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";
    return personName + str + ageStr;
}
let sentence = myTag`${person} is a ${age}`;
console.log(sentence)

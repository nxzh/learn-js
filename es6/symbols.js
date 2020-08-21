////////////////////////////////////////////////////////////
// The unique property of Symbols
////////////////////////////////////////////////////////////
const me = Symbol("Alberto")
console.log(me)

const clone = Symbol("Alberto")
console.log(clone)

console.log(me == clone)
console.log(me === clone)

////////////////////////////////////////////////////////////
// Identifiers for object properties
////////////////////////////////////////////////////////////
const office = {
    "Tom": "CEO",
    "Mark": "CTO",
    "Mark": "CIO",
}

for (const person in office) {
    console.log(person)
}
const office2 = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",
}
const symbols = Object.getOwnPropertySymbols(office2);
console.log(symbols);
for (const person of symbols) {
   console.log(office2[person])
}

const value = symbols.map(symbol => office2[symbol]);
console.log(value);
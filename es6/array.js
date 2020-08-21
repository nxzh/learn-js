const digits = Array.of(1, 2, 3, 4, 5);
console.log(digits)

let found = digits.find(e => e > 3);
console.log(found)

const greetings = ["hello", "hi", "byebye", "goodbye", "hi"]
let foundIndex = greetings.findIndex(e => e === "hi");
console.log(foundIndex)


const array = Array.of(1, 2, 3, 4, 5, 6, 1, 2, 3, 1);

let arraySome = array.some(e => e > 2);
console.log(arraySome)

let arrayEvery = array.every(e => e > 2);
console.log(arrayEvery)
////////////////////////////////////////////////////////////
// Generator
////////////////////////////////////////////////////////////
function* fruitList() {
    yield "Banana";
    yield "Apple";
    yield "Orange";
}

const fruits = fruitList();
console.log(fruits);

console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

////////////////////////////////////////////////////////////
// Looping over an array with a generator
////////////////////////////////////////////////////////////
const fruitListArray = ['Banana', 'Apple', 'Orange', 'Melon', 'Cherry', 'Mango'];
function* loop(arr) {
    for (const item of arr) {
        yield `I like to eat ${item}s`;
    }
}

const fruitGenerator = loop(fruitListArray);

let next = fruitGenerator.next();
while (!next.done) {
    console.log(next.value)
    next = fruitGenerator.next();
}

////////////////////////////////////////////////////////////
// Finish the generator with .return()
////////////////////////////////////////////////////////////

console.log(fruits.return((data => {
    console.log(data)
})));

////////////////////////////////////////////////////////////
// Catching errors with .throw()
////////////////////////////////////////////////////////////
function* gen() {
    try {
        yield "Trying...";
        yield "Trying harder...";
        yield "Trying even harder..";
    } catch(err) {
        console.log("Error: " + err)
    }
}

const myGen = gen();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.throw("ooops"))

////////////////////////////////////////////////////////////
// Combining Generators with Promises
////////////////////////////////////////////////////////////
const myPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("our value is ...")
    }, 2000);
    // resolve("our value is ...")
});

function* gen2() {
    let result = "";
    yield myPromise().then(data=>{result = data});
    yield result + ' 2';
}

const asyncFunc = gen2();
const val1 = asyncFunc.next();
console.log(val1);
val1.value.then(() => {
    console.log(asyncFunc.next())
})
// use typeof to determine the type of variables at runtime
const sid = {
    name: "Sid",
    age: 18,
    "is single": false,
    accent: null,
    drive: function() {
        console.log("wroom wroom")
    }
}

console.log(typeof sid)
console.log(typeof sid.name)
console.log(typeof sid.age)
console.log(typeof sid["is single"])
console.log(typeof sid.accent) // Object
console.log(typeof sid.address)

let action = "drive"
console.log(typeof sid[action])

// reference copy
const car = {};
car.color = 'red';
console.log(car);

const secondCar = car;
console.log(secondCar);

console.log(car == secondCar);
console.log(car === secondCar);

// quick way to clone
const thirdCar = Object.assign({}, car);
car.wheels = 4;
console.log(car);
console.log(thirdCar);
console.log(car == thirdCar);
console.log(car === thirdCar);

// Arrays
// Array is an object
const fruitBasket = ['apple', 'banana', 'orange'];
console.log(typeof fruitBasket);

console.log(fruitBasket[0])
console.log(fruitBasket[1])
console.log(fruitBasket[2])

console.log(fruitBasket.length)
// add to back
fruitBasket.push('pear')
console.log(fruitBasket)
// add at the front 
fruitBasket.unshift('melon')
console.log(fruitBasket)

// remove from last
fruitBasket.pop()
console.log(fruitBasket)

// remove from front
fruitBasket.shift()
console.log(fruitBasket)
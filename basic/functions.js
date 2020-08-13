// function greet(name) {
//     console.log("hello " + name)
// }
// greet("Sid");
//
// // primitive types are passed by value
// function increase(value) {
//     return ++value;
// }
//
// let aInt = 1;
// console.log(increase(aInt));
// console.log(aInt);
//
// // primitive types are passed by reference
// let myCar = {
//     make: "bmw",
//     color: "red"
// }
//
// console.log(myCar)
// function changeColor(car) {
//     car.color = "blue"
// }
// changeColor(myCar)
// console.log(myCar)
//
// // assign function
// const greeter = function greet(name) {
//     console.log("hello " + name);
// }
// greeter("Sid")
//
// // anonymous
// const greeterAnonymous = function(name) {
//     console.log("hello " + name)
// }
// greeterAnonymous("Sid")
//
// // arrow function
// const greeterArrow = (name) => {
//     console.log("hello " + name);
// }
// greeterArrow("Sid")
//
// //--------------------------------------------------------------
//
// var myInt = 1;
// if (myInt == 1) {
//     var mySecondInt = 2;
//     console.log(mySecondInt);
// }
// console.log(mySecondInt)
//
// //--------------------------------------------------------------
//
// var myInt2 = 1;
// if (myInt2 == 1) {
//     let mySecondInt2 = 2;
//     console.log(mySecondInt2);
// }
// // console.log(mySecondInt2); // mySecondInt2 is used out of its scope.
//
// //--------------------------------------------------------------
//
// const myCar1 = {
//     color: 'red',
//     logColor: function() {
//         console.log(this.color)
//     }
// }
// myCar1.logColor();
//
// function logThis() {
//     console.log(this);
// }
// logThis();
//
const myCar2 = {
    color: 'red',
    logColor: function() {
        console.log(this.color)
    }
}
const unboundGetColor = myCar2.logColor;
console.log(unboundGetColor())

const boundGetColor = unboundGetColor.bind(myCar2)
console.log(boundGetColor())
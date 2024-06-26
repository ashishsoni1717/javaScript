// Primitive
//- 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // JavaScript is Dynamically Typed
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 45454545454445n
// Reference / Non Primitive
//- Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dooga"];

let myObj = {
    name:"ashish",
    age: 30
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof bigNumber);
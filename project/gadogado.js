// let funllName = (lastName = "Suha anton")
// middleName = "Kumala"
// console.log(lastName)
// console.log(middleName)

// variable bigInt
const regularNumber = 1234567890123456789012345678901234567890n;
const bigIntExample = 1234567890123456789012345678901234567890;

console.log(regularNumber)
console.log(bigIntExample)

// Symbol type data, it is used as unique identifier, even though we declare 2 symbol with same name/descriotion and so on.
// it will be treated as 2 different symbol
const id = Symbol("id")
console.log(id)


// Truthy and Falsy 
// basically every value in JS is also inherits boolean value, so it can be passed to if as condition
// the value treated as falsy -> Number 0, BigInt On, String "" atau '', null, undefined, Not a Number
let myName = ""
if (myName) {
    console.log("This is value belonging in truthy")
} else {
    console.log("This is value belonging in falsy")
}

// Delete object property
const spaceShip = {
    name: "",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: "",
    color: "Light gray"
}

console.log(spaceShip)
delete spaceShip.color
console.log(spaceShip)

// Array
// if you access index out of array you will get undefined
// using pop and push to manipulate array at the end
// using shift and unshift to manipulate array at the beginning
// to delete element in array using delete if you want the index is filled by empty value
// another option to delete index and its value, using spa
const myArray = ['Orange', 42.5, 22, true, "Programming"]
console.log(myArray)
myArray.push({firstName: "Suha"})
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift("begin initial")
console.log(myArray)
myArray.shift()
console.log(myArray)
delete myArray[2]
console.log(myArray)
myArray.splice(1, 2)
console.log(myArray)

// Note
// - using map you can use any data type as key, but for object you can only use string as a key
// - don't forget to declare variable using const or let in the function body if you don't want to refer global variables
function nomer(a, b, c) {
    return Math.max(a, b, c);
}

let nommess = nomer(1,2,3)
console.log(nommess)
// using var the variable you declare in function or scope can be accessed outside of it

if (true) {
    var exampleVar = 4
}
console.log(exampleVar)

// this below happen under the hood if you using var
/*
var example

if (true) {
    example = 3
}
*/

// Using const you can't modify the value
// but using let you can
const firstArray = [1, 2, 3, 4]
// firstArray = [20] -> this will make an error
console.log(firstArray)

// both let and const can't be access outside of the scope
if (true) {
    let exampleConst = 2
}

// console.log(exampleConst) -> this will make error the program
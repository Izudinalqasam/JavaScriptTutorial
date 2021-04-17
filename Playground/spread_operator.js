// unwrap a object or array (...)
// so example below will unwrap and put example array to example2, if you change value in example2
// the example one will not affected
let example =  [1, 2, 3, 4, 5]
let example2 = [...example]
example2.push(true)

console.log(example2)
console.log("This is example 1 ===============")
console.log(example)


// spread to an object
let objectEx1 = { 
    firstName: 'Suha',
    lastName: "Baharudin"
}

let objectEx2 = {
    ...objectEx1
}

console.log(`${objectEx2.firstName} ${objectEx2.lastName}`)
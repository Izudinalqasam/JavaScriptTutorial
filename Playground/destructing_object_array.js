// Distructing Object
const personalInformation = {
    firstName: "Suha",
    lastName: "Bernad",
    city: "Jakarta",
    state: "Texas",
    zipCode: 78921
}

// you can do destructing like this and giving default value, if the property doesn't exist it will use the default value
const { firstName, lastName, alias = "SH" } = personalInformation
console.log(alias)

// or add naming variable like this
const { firstName: fn, lastName: ln } = personalInformation
console.log(`${firstName} and ${lastName}`)
console.log(`${fn} and ${ln} using naming variable destruction`)

// Destructuring assignment let you change value of exisiting varibale to value from distructuring
let zipCode = "No Zip";
({ zipCode } = personalInformation)
console.log(`the zip code is ${zipCode}`)


// Distructing Array
let [firstCourse, middleCourse, advanceCourse] = ['The first', 'The second', 'The third']
console.log(`${firstCourse} ${middleCourse} ${advanceCourse}`)

// you can destructing the array valie only specific index
let [, , expectedIndex] = [11, 201, 3981]
console.log(`the value is ${expectedIndex}`) 

// you can change the value
firstCourse = "Android"
console.log(firstCourse)

// Destructuring assignment let you change value of exisiting varibale to value from distructuring
let firstIndex = 'Legacy First Index';
[firstIndex, , ,outIndex = "The out of index"] = ['The first', 'The second', 'The third']
console.log(`the value of distructuring array is ${firstIndex}`)
console.log(outIndex)

// Note:
// - if you destructuring object or array which doesn't exist the value will be undefined', so you can prevent it by giving default value
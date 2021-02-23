// Distructing Object
const personalInformation = {
    firstName: "Suha",
    lastName: "Bernad",
    city: "Jakarta",
    state: "Texas",
    zipCode: 78921
}

// you can do destructing like this
const { firstName, lastName } = personalInformation

// or add naming variable like this
const { firstName: fn, lastName: ln } = personalInformation
console.log(`${firstName} and ${lastName}`)
console.log(`${fn} and ${ln} using naming variable destruction`)


// Distructing Array
let [firstCourse, middleCourse, advanceCourse] = ['The first', 'The second', 'The third']
console.log(`${firstCourse} ${middleCourse} ${advanceCourse}`)

// you can change the value
firstCourse = "Android"
console.log(firstCourse)
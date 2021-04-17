// Immutability variable
// below is the way to change the value by duplicating object with the new value
const user = {
    firstName: "Harry",
    lastName: "Protter",
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName("Potter", user)

console.log(user, newUser)

// High Order Functions
// First Class Function lets us save function into variable, give function as parameters or as function return value
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (array, fn) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }

    return newArray;
}

const newNames = arrayMap(names, (name) => `${name} from HOF`);
console.log(newNames);


// Built in reusable function in Functional Programming
// below is a few of built in function, there are more than this
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) =>`${name}!`);
console.log(newArray); 

const truthyArray = [1, '', 'Hallo', 0, null,  'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);

const namesArray = ['Harry', 'Ron', 'Jeff', 'Thomas'];
namesArray.forEach((name) => console.log(name));
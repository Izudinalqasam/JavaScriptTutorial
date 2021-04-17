let yourScore = 5
switch (yourScore) {
    case 10:
        console.log("Your score is passed")
        break;
    case 6.5:
    case 6:
    case 5:
    case 4:
        console.log("Your score is Remed")
    default:
        break;
}

const yourBill = [11000, 23000, 42000]

for (let i = 0; i < yourBill.length; i++) {
    const element = yourBill[i];
    console.log(`The elemen of index ${i} => ${element}`)
}

for (const item in yourBill) {
    console.log(`item in for in => ${item}`)
}

for (const item of yourBill) {
    console.log(`item in for of => ${item}`)
}

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0

while (cars[i]) {
    console.log(`While loop for array entries => ${cars[i]}`)
    i++
}

i = 0;
do {
    console.log(`do while loop for array entries => ${cars[i]}`)
    i++
} while (i < cars.length);
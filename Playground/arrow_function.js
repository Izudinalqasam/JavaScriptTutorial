// arrow function is shorthand of callback function

// this is using callback function
function add(...params) {
    let total = params.reduce(function(x, y) {
        return x + y;
    })

    console.log(total)
}

add(4, 3, 6, 7, 8, 9, 19)

// this is using arrow function
function addWithArrow(...params) {
    let total = params.reduce((x, y) => x + y)
    console.log(`using arrow funtion -> ${total}`)
}

addWithArrow(1, 2, 3, 6, 7, 8, 10)

// Arrow function with default parameters
// remember Rest Operator can use default parameters
function addWithArrow2(params = []) {
    let total = 0

    params.forEach((value) => {
        total += value
    })

    console.log(`using arrow funtion with defualt param -> ${total}`)
}

addWithArrow2([21, 32, 13, 6, 7])
addWithArrow2()


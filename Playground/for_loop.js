let incomes = [62000, 67000, 75000]
let fullName = "Suha Baharudin"
let total = 0

for (const income of incomes) {
    console.log(income)
    total += income
}

console.log(total)
console.log("================================================")

// we can iterate  each of string to
for (const charac of fullName) {
    console.log(charac)
}
// Set is unique list
const exampleSets = new Set([1, 2, 1, 2, 2, 1, 1, 2]);

exampleSets.add(5)
exampleSets.add(16).add(20)

if (exampleSets.has(1)) {
    exampleSets.delete(1)
}

console.log(exampleSets.size)

exampleSets.clear()

console.log(exampleSets.size)
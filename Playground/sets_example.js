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

// WeakMap
// it means Value in the map if it is not used anymore it will be gerbage collected by javascript interpreter
// because weakmap can change later so it doesn't have size() method
let preDefineObj = { user: "aku padamu" };
let visitCountWeakMap = new WeakMap([
    [preDefineObj, 20]
]);

function contentUser(user) {
    let count = visitCountWeakMap.get(user) || 0;
    visitCountWeakMap.set(user, count + 1);
}

let jones = { name: "Jones" };
contentUser(jones);
console.log(visitCountWeakMap); 
console.log(visitCountWeakMap.get(preDefineObj));
console.log(visitCountWeakMap.get(jones));

visitCountWeakMap.delete(preDefineObj);
console.log(visitCountWeakMap.get(preDefineObj));

jones = null;
console.log(visitCountWeakMap);
const simpleMap = new Map()

const simpleMapWithValue = new Map([
    ['1', 'a String key'],
    [1, 'a nummber key'],
    [true, true]
])

console.log(simpleMapWithValue)

// add and get value
console.log(simpleMapWithValue.get(1))
simpleMapWithValue.set("second", 12345)
console.log(simpleMapWithValue.get('second'))

// Note
// - dont access or manipulate map using [] (mapVar[mapKey]) because it will not laverage the function of the map itself
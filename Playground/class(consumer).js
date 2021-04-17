import { Animal, Horse } from './class.js'

let cat = new Animal('Cat', 4)
cat.legs = 3
console.log(`Cat -> ${cat.type} ${cat.legs}`)
cat.makeNoise()
console.log(cat.metaData)
console.log(Animal.getType())

let horse = new Horse('Horse', 4, true)
console.log(horse.metaData)
horse.makeNoise()
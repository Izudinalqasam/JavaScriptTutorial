export class Animal {
    constructor(type, legs) {
        this.type = type
        this.legs = legs
    }

    makeNoise(sound = "") {
        console.log(sound)
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }

    static getType() {
        return "Animal"
    }
}

export class Horse extends Animal {
    constructor(type, legs, tail) {
        super(type, legs, tail)
        this.tail = tail
    }

    makeNoise(sound = "BRRRR") {
        console.log(sound)
    }
}
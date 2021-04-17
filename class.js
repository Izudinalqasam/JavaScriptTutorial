export class Animal {
    constructor(type, legs) {
        this.type = type
        this.legs = legs
    }

    // Overriding method
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
        super(type, legs)
        this.tail = tail
    }

    // Overriding method
    makeNoise(sound = "BRRRR") {
        super.makeNoise(sound)
        console.log(sound)
    }
}


// another form to meake class using function statemment
function MailClass(initial) {
    this.from = 'pengirim@dicoding.com';
    this.classInitial = initial;
    _contacts = [];
    this.sendMessage = (msg, to, from) => {
        console.log(`the initial value is ${this.classInitial}`);
        console.log('you send:', msg, 'to', to, 'from', from);
        _contacts.push(to);
    }

    this.showContact = () => _contacts;
}

const mainInstance = new MailClass("Initial mail");
mainInstance.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
// mainInstance._contacts.push("soca")
console.log(mainInstance.showContact());

// Note :
// - to access property in the class or global but scopping for class use this keyword, 
// - for function this keyword is mandatory to declare function or property
// - Internal interface : method and property which can be accessed by another method but can't be run/taken outside of the class.
// - External interface : method and property which can be accessed  outside of the class.
// - to make private property you can use _ (underscore) before the variable name, note for function you should omit this keyword to make variable private
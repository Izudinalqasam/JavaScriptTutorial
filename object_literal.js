// let you make an object without must declaring the key of value
// the key will be taken from name of variable
function addressMaker(city, state) {
    // so the key for city is city and state is state
    const newAddress = {city, state}

    console.log(newAddress)
}

addressMaker("Jakarta", "Indonesia")

// this is another example
// you can add coma in the last of the field
function addressMakerComplex(address) {
    // Destructuring
    const {city, state} = address

    // Object literal
    const newAddress = {
        city,
        state,
        country: "Indonesia",
        fullAddress: function () {
            return this.city + "-" + this.state + "-" + this.country
        },
        get lang() {
            return "Bahasa Indonesia"
        }
    }

    // Template literal
    console.log(`the complex address result -> ${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
    console.log(newAddress.fullAddress())
    console.log(`the country's language is ` + newAddress.lang)
}

addressMakerComplex({city: "Jakarta", state: "Java"})

// Adding new function to object literal
const gmail = {
    from: "suha@gmail.com",
    sendMessage: function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

console.log(gmail);
gmail.saveMessage = function(addr) {
    console.log(`email save`, addr);
}

// Note:
// - object literal lets you make an object by coding key value directly, no need declaring class
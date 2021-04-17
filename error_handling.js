let json = '{ "name": "suha", "age": 19 }';

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}

try {
    let user = JSON.parse(json);

    // if property name doesn't exist (undefined) it will throw an error
    if (!user.name) {
        throw new ValidationError("'name' is required.")
    }

    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
} catch (error) {
    console.log(error.name);

    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(error.message)
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
} finally {
    console.log("Akan tetap dieksekusi");
}
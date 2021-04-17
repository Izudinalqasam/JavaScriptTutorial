// Set timeout will run your task asynchronously after specific time
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!")
}, 4000)


// Asynchronous programming with callback
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000)
}

orderCoffee(coffee => {
    console.log(coffee);
})
function makeRequestAsync(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequestAsync(response) {
    return new Promise((resolve, reject) => {
        console.log(`Processing response`)
        resolve(`Extra Information + ${response}`)
    })
}

async function doWork() {
    // Using try catch to handle error or exception using async await
    try {
        const response = await makeRequestAsync('fb')
        console.log('Response Received')
        const processedResponse = await processRequestAsync(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork()

function resolveAfter3Second() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved')
        }, 5000)
    })
}

resolveAfter3Second().then((data) => {
    console.log(data)
})

// we can run all promise and wait the result like below
const firstAsyncAwaitPromise = new Promise((resolver, rejecter) => {
    resolver("This is first async await with paralel running promises");
})

const secondAsyncAwaitPromise = new Promise((resolver, rejecter) => {
    resolver("This is second async await with paralel running promises")
})

let nilai = (async function doAllJob() {
    try {
        await Promise.all(firstAsyncAwaitPromise, secondAsyncAwaitPromise);
        return "Hello world from inside"
    } catch (error) {
        console.log(error.message)
    }
})();
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
        }, 10000)
    })
}

resolveAfter3Second().then((data) => {
    console.log(data)
})
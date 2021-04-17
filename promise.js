function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log(`Processing response`)
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then((response) => {
    console.log('Response Received')
    return processRequest(response)
}).then((processedResponse) => {
    console.log(processedResponse)
}).catch((err) => console.error(err))

// another way to get result either value or error
const handleSuccess = resolvedValue => {
    console.log(resolvedValue)
}

const handleFailure = rejectedReason => {
    console.log(rejectedReason)
}
makeRequest('Facebook').then(handleSuccess, handleFailure);

// Multiple promise
const firstPromise = new Promise((resolver, rejecter) => {
    setTimeout(() => {
        resolver("First Promises");
    }, 5000)
});

const secondPromise = new Promise((resolver, rejecter) => {
    resolver("Second Promises");
})

const thirdPromise = new Promise((resolver, rejecter) => {
    resolver("Third Promises");
})

const promises = [firstPromise, secondPromise, thirdPromise];

Promise.all(promises).then((resolvedValue) => {
    console.log(resolvedValue);
})
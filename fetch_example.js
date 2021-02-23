const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"
const apiUrlUser = "https://reqres.in/api/users"

function getTop100User() {
    // If there is an error in the api the catch will not work because 
    // catch only work if there is something wrong in fetch function
    fetch(apiUrl)
        .then(response => {
            // To check the api return error(401,400) or not
            if (response.ok) {
                console.log("Request has been succesed")
                return response.json()
            } else {
                console.log("Fail")
            }
        })
        .then(json => console.log(json))
        .catch(error => console.log("Error"))
}

function getSpecificUser() {
    fetch(apiUrlUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User 1'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(erro => console.log("ERROR"))
}

getTop100User()
getSpecificUser()
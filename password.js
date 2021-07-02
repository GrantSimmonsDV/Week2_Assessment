
const readline = require('readline')

const reader = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

let welcomeMessage = ('Welcome to the best password validator tool on the internet!')
console.log(welcomeMessage)

reader.question("Enter the password you'd like to validate:", function (userInput) {
    if (userInput.length >= 10) {
        //If I was showing a message to an actual real user I would need to use 'return'
        console.log('Success! Password meets the length requirement.')
    } else {
        console.log('Password does not meet the necessary length requirement. Please try again.')
    }
    reader.close()
})

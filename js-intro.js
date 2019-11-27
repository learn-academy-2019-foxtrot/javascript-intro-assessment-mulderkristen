// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
// create a function that takes a string and turns it into an array
// look for the index of the letter not equal to -1 to identify if it exists in the array 
// return if it contains it or not

const letterB = (variable) => {
    let newArr = variable.split("")
    for (let i=0; i < newArr.length; i++) {
        if (newArr.indexOf('B') !== -1) {
        return "This string contains a capital B"
    } else {
        return "This string does not contain a capital B"
    }
    }
}
console.log(letterB(mantra))


// 1b. Write the code that determines if there is an 'x' in mantra.
const letterX = (variable) => {
    let newArr = variable.split("")
    for (let i=0; i < newArr.length; i++) {
        if (newArr.indexOf('x') !== -1) {
        return "This string contains an x"
    } else {
        return "This string does not contain an x"
    }
    }
}
console.log(letterX(mantra))


// 1c. Write the code that determines if there is a 'v' in mantra.
const letterV = (variable) => {
    let newArr = variable.split("")
    for (let i=0; i < newArr.length; i++) {
        if (newArr.indexOf('v') !== -1) {
        return "This string contains a v"
    } else {
        return "This string does not contain a v"
    }
    }
}
console.log(letterV(mantra))


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
var newMantra = "Happy Friday"
var newLetter = "p"

const letterCheck = (string, letter) => {
    let newArr = string.split("")
    for (let i=0; i < newArr.length; i++) {
        if (newArr.indexOf(letter) !== -1) {
        return `This string contains ${letter}`
    } else {
        return `This string does not contain ${letter}`
    }
    }
}
console.log(letterCheck(newMantra, newLetter))

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
// Create a function that takes two arguments, variables
// splits the variables into 2 arrays
// compares the length of each array
// returns the longer word

const biggerWord = (animalOne, animalTwo) => {
    let arrayA = animalOne.split("")
    let arrayB = animalTwo.split("")
    if (arrayA.length > arrayB.length){
        return `${animalOne}`
    } else if (arrayA.length === arrayB.length) {
        return `${animalOne} has the same amount of letters as ${animalTwo}.`
    } else {
        return `${animalTwo}`
    }
}

console.log(biggerWord(myDog, myCat))



// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
// Create a function that takes two arguments, variables
// joins the variable into an array
// returns an array

const intoArray = (animalOne, animalTwo) => {
    let newArray = []
    newArray.push(animalOne, animalTwo)
    return newArray
}
console.log(intoArray(myDog, myCat))

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

const intoString = (animalOne, animalTwo) => {
    return animalOne.toLowerCase().concat(" ", animalTwo.toLowerCase())
}
console.log(intoString(myDog, myCat))


// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.
// write a for loop that takes a string and will console log each letter in the string
// take the string and split into an array
// run the array through the for loop 
// return each letter

const logLetters = (string) => {
    let newArr = string.split("")
    for (let i=0; i<newArr.length; i++) 
        console.log(newArr[i])
}
logLetters(myMessage)

// 3b. Write the code that logs each letter of the message using map.

const mapLetters = (string) => {
    let newArr = string.split("")
    newArr.map (value => {
        console.log(value)
    }) 
}
mapLetters(myMessage)


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

const whileLetters = (string) => {
    let newArr = string.split("")
    let arrLength = 0
    while (arrLength < newArr.length){
    console.log(newArr[arrLength])
    arrLength++;
    }
}
whileLetters(myMessage)


// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

const forEachLetters = (string) => {
    let newArr = string.split("")
    newArr.forEach (element => {
        console.log(element)
    }) 
}
forEachLetters(myMessage)


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
// Write a function that takes in a string
// Turn the string into an array 
// Filter vowels
// Return string without vowels

const noVowels = (string) => {
    return string.split("").filter( value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    }).join("")
}
console.log(noVowels(testString))

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

var testString2 = 34
const noVowels2 = (string) => {
    if (typeof(string) === "string"){
        return string.split("").filter( value => {
            return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    }).join("")
    } else {
        return "This is not a string"
    }
}
console.log(noVowels2(testString2))



// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
// A function that takes in an array
// Filters for type cats
// Returns an array of just the type cats

const onlyCats = (array) => {
    return array.filter (value => 
        value.animal === "cat"
    )
}
console.log(onlyCats(toonimals))

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
// A function that takes in an array
// Filters out cats and makes a new array
// Maps for names of animals that are not cats
// Returns just the names

const onlyNonCatNames = (array) => {
    let newArr = array.filter (value => 
        value.animal !== "cat")
    return newArr.map (value => value.name)
}

console.log(onlyNonCatNames(toonimals))

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const animals = (array) => {
    return array.map (value => {
    return `${value.name} is a ${value.animal}`
    })
}
console.log(animals(toonimals))
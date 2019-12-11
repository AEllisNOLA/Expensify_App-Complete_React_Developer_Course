// OBJECT DESTRUCTURING

const doggo = {
    name: 'Saint',
    age: 11,
    location: {
        city: 'Norfolk',
        temp: 38
    }
}

// So much dot-syntax can get tedious, so you can pull stuff off using destructuring.

console.log(`${doggo.name} is ${doggo.age}.`)

// Destructuring allows for defaults

const { name = 'John Doe', age } = doggo

console.log(`${name} is ${age}.`)

// You can do this with nested objects.

console.log(`It's ${doggo.location.temp} degrees in ${doggo.location.city}.`)

// And you can even rename variables as you go.

const { city, temp: temperature } = doggo.location

console.log(`It's ${temperature} degrees in ${city}.`)

// CHALLENGE: Make the console.log() below work. Add default value.

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)
*/

// ARRAY DESTRUCTURING
// const address = ['123 Main Street', 'Baton Rouge', 'LA', '70458', 'USA']
const address = ['123 Main Street', 'Baton Rouge', 'LA', '70458']
const [streetName, cityName, stateName, zipCode, countryName = 'Madagascar'] = address
console.log(`You are in ${cityName}, ${stateName}, ${countryName}`)


const shoppingList = ['Light Bulbs', 'Milk', 'Flour', 'Pickles', 'Sour Cream', 'Frosting', 'Dog Food']
const [, milk, flour, , , frosting, ] = shoppingList
console.log(`To bake a cake, I will need: ${milk}, ${flour} and ${frosting}.`)

// CHALLENGE - get the console.log() to work
const item = ['coffee (hot)', '$2.00', '$3.00', '$4.00']
const [hotCoffee, , medium, ] = item

// console.log(`A coffee (hot) costs: $3.00`)
console.log(`A ${hotCoffee} costs: ${medium}`)
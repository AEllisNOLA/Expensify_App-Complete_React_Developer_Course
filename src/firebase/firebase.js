import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALP4xl3BrOokj--Jt87af_DfxTWKSo8NA",
    authDomain: "expensify-aellisnola.firebaseapp.com",
    databaseURL: "https://expensify-aellisnola.firebaseio.com",
    projectId: "expensify-aellisnola",
    storageBucket: "expensify-aellisnola.appspot.com",
    messagingSenderId: "1027377572313",
    appId: "1:1027377572313:web:f694a2d182f9b73640d1c8",
    measurementId: "G-LNP56CY7X9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database()

/* 143 - Writing to Database */

database.ref().set({
    name: 'Anthony Ellis',
    age: 35,
    stressLevel: 6,
    job: {
        title: 'Entry-Level Developer',
        company: 'Google'
    },
    isSingle: true,
    location: {
        city: 'New Orleans',
        country: 'USA'
    }
}).then(() => {
    console.log("Data has been set")
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// database.ref('location/city').set('Slidell')
// database.ref('age').set(36)
//  database.ref().set('This is my data')
/* database.ref().set({
    age: 36
}) */

/* database.ref('attributes').set({
    height: 69,
    weight: 180
}).then(() => {
    console.log("Data has been set.")
}).catch((error) => {console.log(`Error: ${error}`)})
 */

/* 146 - Removing from Database */

/* database
    .ref('isSingle')
    .remove()
    .then(() => {
        console.log('Item removed.')
    })
    .catch((error) => {
    console.log(`Error: ${error}`)
    }) */

/* Remove can also be done by setting a property to null */
// database.ref('isSingle').set(null)

/* 147 - Updating Database */
/* database.ref().update({
    name: 'Saint',
    age: 11,
    job: 'pet doggo',
    isSingle: null
}) */

// NOTE: When nesting object, the directory structure needs to be in quotes. This will switch city but not state.

/* database.ref().update({
    stressLevel: 9,
    'location/city': 'Seattle',
    'job/company': 'Amazon'    
}) */

/* 147 - Updating Database */

/* 1) Fetch a single time */

/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val()
        console.log(val)
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    }) */

/* 
2) Subscribe for changes. 
    - Cannot use with promises so we use callback pattern instead
    - you can pass the same function that you used to turn on the subscription to turn off the subscription to that one ref while keeping others.
*/

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}, (error) => {
    console.log(`Error with fetching data: ${error}`)
})

setTimeout(() => {
    database.ref('age').set(36)
}, 3500)

setTimeout(() => {
    database.ref().off(onValueChange)
}, 7000)

setTimeout(() => {
    database.ref('age').set(36)
}, 10500) 
*/


const onValueChange = database.ref().on('value', (snapshot) => {
    const data = snapshot.val()
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
}, (error) => {
    console.log(`Error fetching data: ${error}`)
})

database.ref('job').update({
    title: 'Mid-Level Developer',
    company: 'AirBNB'
})

database.ref().off('value', onValueChange)

database.ref('job').update({
    title: 'Senior-Level Developer',
    company: 'Facebook'
})
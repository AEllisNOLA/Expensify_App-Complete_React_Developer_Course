const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //        resolve('This is my resolved data')
        reject("error")
    }, 1500)
})

console.log('before')


promise.then((data) => {
    console.log(data)
}).catch(() => {
    
})

console.log('after')

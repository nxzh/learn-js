////////////////////////////////////////////////////////////
// Create your own promise #
////////////////////////////////////////////////////////////
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("The value we get from the promise");
        reject(Error("Error occurred"))
    }, 2000);
})
myPromise.then(
    data => {
        console.log(data);
    }
).catch(err => {
    console.error(err.name, "!!!!" + err.message, "####" + err.stack)
});

////////////////////////////////////////////////////////////
// Chaining promises
////////////////////////////////////////////////////////////
const myPromise2 = new Promise((resolve, reject) => {
    // resolve()
    reject(Error("SomeError"))
});


myPromise2.then(data => {
    // console.log('working');
    console.log(data)
    return 'working'
}).then(data => {
    console.log(data);
    throw 'failed!';
}).catch(err => {
    console.error("!!!!", err)
})

// myPromise2.then(data => {
//     throw new Error("oops")
// })
// .catch(() => {
//     console.log("catch an error")
// })
// .then(data => {
//     console.log("second value")
// })
let promises = [];
for (let i = 0; i < 10; i++) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i == 5) {
                reject(Error("Reject at "  + i))
            }
            resolve(i);
        }, 3000-1*10);
    });
    promises.push(myPromise)
}

Promise.all(promises).then(data => {
    console.log("----------------------------------------")
    console.log(data)
}).catch(err => {
    console.log("----------------------------------------")
    console.log(err)
})
let resolvedPromise = (message) => {
    return new Promise(resolve =>
    {setTimeout(() => {resolve(message);
        }, 500);
    });
}

let rejectedPromise = (message) => {
    return new Promise(reject =>
    {setTimeout(() => {reject(new Error(message));
        }, 500);
    });
}

resolvedPromise({'message': 'delayed success!'})
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

rejectedPromise('error: delayed exception!')
    .then(result => {
    console.log(result);
    })
    .catch(error => {
    console.error(error.message);
    });
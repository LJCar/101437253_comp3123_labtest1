let lowerCaseWords = (myArray) => {
    return new Promise((resolve, reject) => {
        if (myArray) {
            const stringsOnly = myArray.filter(string => typeof string === 'string')
                                       .map(value => value.toLowerCase());
            resolve(stringsOnly);
        }
        else{
            reject("Something went wrong")
        }
    });
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
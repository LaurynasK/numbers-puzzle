const checkForDublicates = (arr) => {
    return (new Set(arr)).size !== arr.length;
}

const validateNumber = (input) => {
    const numRegex = /^[0-9]*$/;
    return numRegex.test(input);
}

module.exports = {
    checkForDublicates: checkForDublicates,
    validateNumber: validateNumber
}
const createTableValues = (sizeValue = 4) => {
    const startArr = makeArrayValues(sizeValue);
    let finalArr = [];
    while (startArr.length > 0){
        finalArr.push(startArr.splice(0, sizeValue));
    }
    return finalArr;
}

const makeArrayValues = (sizeValue) => {
    const maxNum = sizeValue * sizeValue;
    let arr = [];
    while(arr.length < maxNum){
        let r = Math.floor(Math.random()*maxNum) + 1;
        if(arr.indexOf(r) === -1){
            arr.push(r);
        }
    }
    return removeLastValue(maxNum ,arr);
}

const removeLastValue = (numToRemove, array) => {
    const index = array.indexOf(numToRemove);
    if (index > -1) {
        array[index] = '';
    }
    return array;
}

module.exports = {
    createTableValues: createTableValues,

    makeArrayValues: makeArrayValues,
    removeLastValue: removeLastValue
}
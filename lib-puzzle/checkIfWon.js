const checkIfWon = (arr, sizeVal) => {
    let lastElement = 1;
    if (Array.isArray(arr)) {
        arr.forEach((e1)=>e1.forEach((e2) =>
            {if (lastElement === e2) lastElement++}
        ));
    }
    if(sizeVal*sizeVal === lastElement) {
        if(arr[sizeVal-1][sizeVal-1] === ''){
            return true
        }
    }
    return false;
}

module.exports = {
    checkIfWon: checkIfWon
}
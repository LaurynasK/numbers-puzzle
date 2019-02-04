
const helper = require("./helpers");

const findAndmove = (table, switchWith, val) => {
    const emptyPos = findNumberPosition(table,'', val);
    val = val - 1;
    if (emptyPos.y < val && table[emptyPos.y+1][emptyPos.x] === switchWith){
        return switchNumbers(table,{x: Number(emptyPos.x), y: Number(emptyPos.y+1)}, emptyPos);
    }
    if (emptyPos.y > 0 && table[emptyPos.y-1][emptyPos.x] === switchWith) {
        return switchNumbers(table,{x: Number(emptyPos.x), y: Number(emptyPos.y-1)}, emptyPos);
    }
    if(emptyPos.x < val && table[emptyPos.y][emptyPos.x+1] === switchWith){
        return switchNumbers(table,{x: Number(emptyPos.x+1) , y: Number(emptyPos.y)}, emptyPos);
    }
    if (emptyPos.x > 0 && table[emptyPos.y][emptyPos.x-1] === switchWith) {
        return switchNumbers(table,{x: Number(emptyPos.x-1), y: Number(emptyPos.y)}, emptyPos);
    }
    return table;
}

const findNumberPosition = (puzzleTable, searchable, puzzleSize) => {
    let possibleValue;
    for (let y = 0 ; y < puzzleSize; y++) {
        possibleValue = puzzleTable[y].indexOf(searchable);
        if(possibleValue !== -1){
            return {x: possibleValue, y: Number(y)}
        }
    }
}

const switchNumbers = (table, position, emptyPos) => {
    const tempValue = table[position.y][position.x];
    let modified = false;
    return table.map((item) => {
        modified = false;
        if (item[position.x] === tempValue) {
            item[position.x] = '';
            modified = true;
        }
        if ((!modified || helper.checkForDublicates(item)) && item[emptyPos.x] === '') {
            item[emptyPos.x] = tempValue;
        }
        return item;
    });
}

module.exports = {
    findAndmove: findAndmove,

    findNumberPosition: findNumberPosition,
    switchNumbers: switchNumbers
}

const readline = require('readline');

const create = require("./create");
const move = require("./move");
const checkIfWon = require("./checkIfWon");

const helpers = require("./helpers");

const Puzzle = (puzzleSize = 4, printCallback) => {
    const puzzleArray = create.createTableValues(puzzleSize);

    const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
    });

    readLineWhile(rl, puzzleArray, puzzleSize, printCallback)
}

const printPuzzle = (callback, puzzleArray) => {
    if (typeof callback === "function") {
        callback(puzzleArray);
    } else {
        console.log(puzzleArray);
    }
}

const readLineWhile = (rl, puzzleArray, puzzleSize, printCallback) => {
    printPuzzle(printCallback, puzzleArray);
    rl.question("please choose number around empty string: ", (chosenNumber) => {
        if (helpers.validateNumber(chosenNumber)){
            chosenNumber = Number(chosenNumber);
            puzzleArray = move.findAndmove(puzzleArray, chosenNumber, puzzleSize);
        } else {
            console.error("please provide valid input");
        }
        if(checkIfWon.checkIfWon(puzzleArray, puzzleSize)) {
            console.log("CONGRATULATIONS");
            return rl.close();
        } else {
            readLineWhile(rl, puzzleArray, puzzleSize, printCallback);
        }
    });
};

module.exports = {
    Puzzle: Puzzle,

    puzzleCreate: create.createTableValues,
    puzzleMove: move.findAndmove,
    puzzleCheckIfWon: checkIfWon.checkIfWon,

    printPuzzle: printPuzzle,
    readLineWhile: readLineWhile
}
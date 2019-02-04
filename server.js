const Table = require('table');
const puzzle = require("./lib-puzzle/puzzle");


const printTable = (array) => console.log(Table.table(array));

puzzle.Puzzle(4, printTable);

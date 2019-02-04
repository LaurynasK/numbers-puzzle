const Table = require('table');

const printTable = (array) => console.log(Table.table(array));
const puzzle = require("./lib-puzzle/puzzle");

puzzle.Puzzle(4, printTable);

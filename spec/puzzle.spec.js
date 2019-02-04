const puzzle = require("../lib-puzzle/puzzle");

const readline = require('readline');

describe("puzzle cli start", () => {
    it("should create readline interface", () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        spyOn(readline, 'createInterface').and.returnValue(rl);

        puzzle.Puzzle();
        expect(readline.createInterface).toHaveBeenCalled();
    })
});


describe("readLineWhile test ", () => {
    it("should console log array ", () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const random = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ '', 13, 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        spyOn(console, 'log');

        puzzle.readLineWhile(rl, random, random.length);
        expect(console.log).toHaveBeenCalledWith(random);
    })

})

describe("function printPuzzle test ", () => {
    let random;
    beforeEach(() => {
        random = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ '', 13, 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];
    })

    it("should console log output ", () => {
        spyOn(console, 'log');

        puzzle.printPuzzle(undefined, random);
        expect(console.log).toHaveBeenCalledWith(random);
    })

    it("should be called callback to print", () => {
        const printAsWarn = (toPrint) => {
            console.warn(toPrint);
        };

        spyOn(console, 'warn');
        puzzle.printPuzzle(printAsWarn, random);
        expect(console.warn).toHaveBeenCalledWith(random);
    })
});
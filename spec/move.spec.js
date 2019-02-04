const move = require("../lib-puzzle/move");

describe("function findAndmove to move number in 2D array", () => {
    let array2d = [];
    beforeEach(() => {
        array2d = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, '', 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];
    })

    it("should move number (chosen bottom number)", () => {
        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, 15, 6, 8 ],
            [ 5, '', 4, 11 ]
        ];

        const result = move.findAndmove(array2d, 15, array2d.length);
        expect(result).toEqual(expectedOutput);
    })

    it("should move number (chosen top number)", () => {

        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, '', 7, 1 ],
            [ 13, 14, 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const result = move.findAndmove(array2d, 14, array2d.length);
        expect(result).toEqual(expectedOutput);
    })

    it("should move number (chosen left number)", () => {
        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ '', 13, 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const result = move.findAndmove(array2d, 13, array2d.length);
        expect(result).toEqual(expectedOutput);
    })

    it("should move number (chosen right number)", () => {
        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, 6, '', 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const result = move.findAndmove(array2d, 6, array2d.length);
        expect(result).toEqual(expectedOutput);
    })

    it("should return same table because chose number is not around empty position", () => {
        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, '', 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const result = move.findAndmove(array2d, 10, array2d.length);
        expect(result).toEqual(expectedOutput);
    })
});

describe("function should find out position of number ", () => {
    it("find position of number ", () => {
        const array2d = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, '', 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const expectedResult = {x: 1, y: 2};
        const result = move.findNumberPosition(array2d, '', 4);
        expect(result).toEqual(expectedResult);
    })
});

describe("function should switch places in array of two elments ", () => {
    it("should switch two elements", () => {
        const array2d = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, '', 6, 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const expectedOutput = [
            [ 10, 2, 9, 3 ],
            [ 12, 14, 7, 1 ],
            [ 13, 6, '', 8 ],
            [ 5, 15, 4, 11 ]
        ];

        const result = move.switchNumbers(array2d, {x: 2, y: 2}, {x: 1, y: 2});
        expect(result).toEqual(expectedOutput);
    })
})
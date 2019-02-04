const create = require("../lib-puzzle/create");

describe("function createTableValues should create random array ", () => {
    it("without no parameters must be created 4x4 random array ", () => {
        const result = create.createTableValues();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toEqual(4);
    });

    it("must create 5x5 puzzle ", () => {
        const result = create.createTableValues(5);
        expect(result.length).toEqual(5);
    })
})

describe("function makeArrayValues should create random one dimensional array ", () => {
    it("should make 1d array ", () => {
        const result = create.makeArrayValues(4);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toEqual(4*4);
    });
})

describe("function removeLastValue should replace selected value with empty string ", () => {
    it("should remove 2 ", () => {
        const input = [4, 3, 2, 6];
        const output = [4, 3, '', 6];

        const result = create.removeLastValue(2, input);
        expect(result).toEqual(output);
    });
})
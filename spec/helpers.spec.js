const helpers = require("../lib-puzzle/helpers");

describe(("helper function check for duplicates "), () => {
    it("should check for duplicates (positive)", () => {
        const dublicateArray = [2, 4, '', ''];

        const resultDuplicates = helpers.checkForDublicates(dublicateArray);
        expect(resultDuplicates).toBeTruthy();
    });

    it("should check for duplicates (negative)", () => {
        const authenticArray = [3, 4, 5, 7];

        const result = helpers.checkForDublicates(authenticArray);
        expect(result).toBeFalsy();
    })

});

describe("helper function to check if input is numbers by ", () => {
    it("should check string if it is numbers (positive) ", () => {
        const result = helpers.validateNumber(5);
        expect(result).toBeTruthy();
    })

    it("should check string if it is numbers (negative) ", () => {
        const result = helpers.validateNumber("wer345");
        expect(result).toBeFalsy();
    })
});
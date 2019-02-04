const checkifWon = require("../lib-puzzle/checkIfWon");

describe("function should check if array is completed ", () => {
    it("positive - array is finished", () => {
        const completed = {
            table: [
                [ 1, 2, 3, 4 ],
                [ 5, 6, 7, 8 ],
                [ 9, 10, 11, 12 ],
                [ 13, 14, 15, '' ]
            ],
            size: 4
        };

        const checkedArray = checkifWon.checkIfWon(completed.table, completed.size);
        expect(checkedArray).toEqual(true);
    });

    it("negative - array is not finished", () => {
        const notCompleted = {
            table: [
                [ 10, 2, 9, 3 ],
                [ 12, 14, 7, 1 ],
                [ '', 13, 6, 8 ],
                [ 5, 15, 4, 11 ]
            ],
            size: 4
        }

        const checkedArray = checkifWon.checkIfWon(notCompleted.table, notCompleted.size);
        expect(checkedArray).toBeFalsy();
    });

    it("negative - input is random (not array and int) ", () => {
        const random = {
            table: 234,
            size: "random"
        }

        const checkedArray = checkifWon.checkIfWon(random.table, random.size);
        expect(checkedArray).toBeFalsy();
    });
});
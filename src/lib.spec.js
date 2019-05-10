import {getColumn, getRow, getWinner, toPosition} from './lib'

describe("toPosition", () => {
    it("0", () => {
        expect(toPosition(0, 0)).toEqual(0)
    })
    it("1", () => {
        expect(toPosition(0, 1)).toEqual(1)
    })
    it("2", () => {
        expect(toPosition(0, 2)).toEqual(2)
    })
    it("3", () => {
        expect(toPosition(1, 0)).toEqual(3)
    })
    it("4", () => {
        expect(toPosition(1, 1)).toEqual(4)
    })
    it("5", () => {
        expect(toPosition(1, 2)).toEqual(5)
    })
    it("7", () => {
        expect(toPosition(2, 1)).toEqual(7)
    })
});
describe("getRow", () => {
    it("first row", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getRow(0, board);

        expect(result).toEqual(["1", "2", "3"])
    })
    it("second row", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getRow(1, board);

        expect(result).toEqual(["4", "5", "6"])
    })
    it("third row", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getRow(2, board);

        expect(result).toEqual(["7", "8", "9"])
    })
})
describe("getColumn", () => {
    it("first Column", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getColumn(0, board);

        expect(result).toEqual(["1", "4", "7"])
    })
    it("second Column", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getColumn(1, board);

        expect(result).toEqual(["2", "5", "8"])
    })
    it("third Column", ()=>{
        const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        const result = getColumn(2, board);

        expect(result).toEqual(["3", "6", "9"])
    })
})
describe("getWinner", () => {
    it("first row", ()=>{
        const board = ["X", "X", "X", "4", "5", "6", "7", "8", "9"];

        const result = getWinner(board);

        expect(result).toEqual("X")
    })
    it("diagonal two /", ()=>{
        const board = ["X", "X", "O", "4", "O", "6", "O", "8", "9"];

        const result = getWinner(board);

        expect(result).toEqual("O")
    })
})

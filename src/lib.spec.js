import {toPosition} from './lib'

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
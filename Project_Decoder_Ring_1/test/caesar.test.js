// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");


describe( "caesar function", () => {
    it("should return the encoded value, ignoring the special characters", () => {
        expect(caesar("hey, welcome to the party", 3)).to.equal('khb, zhofrph wr wkh sduwb');
    });

    it("wraps around", () => {
        expect(caesar("z", 3)).to.equal('c');
    });

    it("should loop through the alphabet", () => {
        expect(caesar("xyz", 3)).to.equal('abc');
    });

    it('should return false when `shift` is less than -25', () => {
        expect(caesar("dau, sahykia pk pda lwnpu", -30, false)).to.be.equal;
    });

    it('should not be case-sensitive', () => {
        expect(caesar("Hey, welcome to the party", 3)).to.be.equal("khb, zhofrph wr wkh sduwb")
    });

})

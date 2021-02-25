// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");


    describe( "polybius function", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        expect(polybius("Jermany")).to.equal('42512423113345');
    });


    it("should translate both 'i' and 'j' to 42", () => {
    expect(polybius('Jermany')).to.equal('42512423113345');
     });


    it("should decode a message by translating each pair of numbers into a letter", () => {
    expect(polybius("3211535345 2142244432411145", false)).to.equal('happy b(i/j)rthday');
    });


    it("should translate 42 to both 'i' and 'j'", () => {
    expect(polybius("4432423352125413", false)).to.equal('th(i/j)nkful');
    });


    it("should return false if the length of all numbers is odd", () => {
    expect(polybius("425124231133451", false)).to.equal(false);
    });
    
    it('should not be case-sensitive', () => {
    expect(polybius('Jermany')).to.equal('42512423113345');
    });

});
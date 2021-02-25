// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

/*It returns false if the given alphabet isn't exactly 26 characters long.
It correctly translates the given phrase, based on the alphabet given to the function.
It returns false if there are any duplicate characters in the given alphabet.
It maintains spaces in the message, before and after encoding or decoding.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)*/



describe( "substitution", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const expected = "jrufscpw"
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it('should output a string', () => {
        let actual = substitution('thinkful', "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.a("string");
    });
    
    it('should not be case-sensitive', () => {
        const expected = "jrufscpw";
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });

    it('should return false if alphabet is not 26 characters long', () => {
        let actual = substitution("Thinkful", "wxyz");
        expect(actual).to.be.false;
    });

    it('should return false if each alphabet char is not unique', () => {
        let actual = substitution("Thinkful", "aaabcdefghijklmnopqrstuvwxyz");
        expect(actual).to.be.false;
    });

})


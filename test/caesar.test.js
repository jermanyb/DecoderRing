// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar function", () => {
  it("should encode if a positive shift value is given", () => {
    const input = "thinkful";
    const actual = caesar(input, 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  it("should encode if a negative shift value is given", () => {
    const input = "thinkful";
    const actual = caesar(input, -3);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });

  it("should encode while ignoring special characters when given a positive shift value", () => {
    const input = "hey, welcome to the party";
    const actual = caesar(input, 5);
    const expected = "mjd, bjqhtrj yt ymj ufwyd";
    expect(actual).to.equal(expected);
  });

  it("should encode while ignoring special characters when given a negative shift value", () => {
    const input = "hey, welcome to the party";
    const actual = caesar(input, -4);
    const expected = "dau, sahykia pk pda lwnpu";
    expect(actual).to.equal(expected);
  });

  it("should return false if no shift input", () => {
    const input = "thinkful";
    const actual = caesar(input);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value is 0", () => {
    const input = "thinkful";
    const actual = caesar(input, 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });
})
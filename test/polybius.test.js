//const { describe } = require("mocha");

// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode each letter as a pair of numbers via the given grid", () => {
    const expected = "4411335511334211";
    const actual = polybius("Tanzania");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces while encoding", () => {
    const expected = "345124513322514442 5313114233";
    const actual = polybius("Serengeti Plain");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces while decoding encrypted message with 2nd parameter = false", () => {
    const expected = "mount meru";
    const actual = polybius("2343543344 23512454", false);
    expect(actual).to.equal(expected);
  });

  it("returns (i/j) for encrypted i or j", () => {
    const expected = "tanzan(i/j)a";
    const actual = polybius("4411335511334211", false);
    expect(actual).to.equal(expected);
  });

  it("returns false if there is an odd number of encrypted text", () => {
    const actual = polybius("44113355113349211", false);
    expect(actual).to.be.false;
  });

  it("returns false if the number of encrypted characters in the string excluding spaces is odd", () => {
    const actual = polybius(
      "12245141414251 23512431542445 4234 12244323 441135511334211",
      false
    );
    expect(actual).to.be.false;
  });

  it("covers all encrypted letters not otherwise tested against actual", () => {
    const actual = polybius("122232521353143415253545", false);
    const expected = "fghklpqsvwxy";
    expect(actual).to.equal(expected);
  });

  it("decodes all encrypted letters not otherwise tested against actual", () => {
    const actual = polybius("213141122232521353143415253545", false);
    const expected = "bcdfghklpqsvwxy";
    expect(actual).to.equal(expected);
  });

  it("encrypts all letters not otherwise tested against actual", () => {
    const actual = polybius("bcdfhjkmoquvwxy");
    const expected = "213141123242522343145415253545";
    expect(actual).to.equal(expected);
  });
});

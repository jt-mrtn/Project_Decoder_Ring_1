// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should encode input by shifting text alpha-forward by a +number with default encode", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should encode input by shifting text alpha-backward by a -number", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });

  it("should decode input by shifting text alpha-backward by a +number with encode = false", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  it("should decode input by shifting text alpha-forward by a -number with encode = false", () => {
    const expected = "thinkful";
    const actual = caesar("qefkhcri", -3, false);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other non-alphabetic symbols", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });

  it("should wrap around the alphabet", () => {
    const expected = "cake";
    const actual = caesar("XVFZ", -5, false);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is missing", () => {
    const expected = false;
    const actual = caesar("SMOKE");
    expect(actual).to.equal(expected);
  });

  it("should return false if shift = 0", () => {
    const expected = false;
    const actual = caesar("CAESAR", 0);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift < -25", () => {
    const expected = false;
    const actual = caesar("Sincere stooge", -30);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift > 25", () => {
    const expected = false;
    const actual = caesar("Saskatchewan", 99);
    expect(actual).to.equal(expected);
  });

  it("should return false if input is an empty string", () => {
    const expected = false;
    const actual = caesar("", 11);
    expect(actual).to.equal(expected);
  });

  it("should return false if input is a number", () => {
    const expected = false;
    const actual = caesar(-7);
    expect(actual).to.equal(expected);
  });

  it("should return false if input is missing", () => {
    const expected = false;
    const actual = caesar();
    expect(actual).to.equal(expected);
  });
});

// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should encrypt text by substituting the letters with the alphabet given", () => {
    const expected = "jrufscpw";
    actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in given text", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });

  it("should decode input with alphabet given and encode = false", () => {
    const expected = "thinkful";
    actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });

  it("should encrypt input with alphabet given including special characters", () => {
    const expected = "y&ii$r&";
    actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });

  it("should decode input with alphabet given including special characters", () => {
    const expected = "message";
    actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });

  it("returns false if alphabet is less than 26 characters", () => {
    actual = substitution("Borussia", "$wab!@ne&zrdxtyij");
    expect(actual).to.be.false;
  });

  it("returns false if characters in alphabet are not unique", () => {
    actual = substitution("Dortmund", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("returns false if substitution alphabet is missing", () => {
    actual = substitution("Bundesliga");
    expect(actual).to.be.false;
  });
});

import longestDigitPrefix from "./longest-digit-prefix";
import bishopAndPawn from "./bishop-and-pawn";
import isDigit from "./isDigit";
import lineEncoding from "./line-encoding";

describe("longestDigitPrefix", () => {
  it("should return the correct values for the test", async ()=> {
    const variable = "the output is 42"

    const value = longestDigitPrefix(variable);
    expect(value).toEqual("");

    const testTwoVariable = "123aa1";
    const secondTest = longestDigitPrefix(testTwoVariable);

    expect(secondTest).toEqual("123");
  });
});

describe("bishopAndPawn", () => {
  it ("should return the correct values for bishopAndPawn function", () => {
    let p1 = "a5";
    let p2 = "c3";

    const value = bishopAndPawn(p1, p2);
    expect(value).toEqual(true);

    p1="a1"
    p2="h2"

    const value2 = bishopAndPawn(p1, p2);
    expect(value2).toEqual(false);
  });
});

describe("isDigit", () => {
  it("should return the correct values for isDigit function", () => {
    let test = "-";

    const value = isDigit(test);
    expect(value).toEqual(false);

    test ="5"
    const value2 = isDigit(test);
    expect(value2).toEqual(true);

    test = "0"
    const value3 = isDigit(test);
    expect(value3).toEqual(true);
  });
});

describe("lineEncoding", () => {
  it("should return the correct values for lineEncoding function", () => {
    let test = "abbcabb";

    const value = lineEncoding(test);
    expect(value).toEqual("a2bca2b");

    test = "zzzz"
    const value2 = lineEncoding(test);
    expect(value2).toEqual("4z");

    test = "ssiiggkooo"
    const value3 = lineEncoding(test);
    expect(value3).toEqual("2s2i2gk3o");
  });
});

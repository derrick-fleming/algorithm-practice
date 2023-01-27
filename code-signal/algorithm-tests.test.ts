import longestDigitPrefix from "./longest-digit-prefix";
import bishopAndPawn from "./bishop-and-pawn";


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

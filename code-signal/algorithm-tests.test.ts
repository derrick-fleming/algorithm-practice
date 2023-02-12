import longestDigitPrefix from "./longest-digit-prefix";
import bishopAndPawn from "./bishop-and-pawn";
import isDigit from "./isDigit";
import lineEncoding from "./line-encoding";
import chessKnight from './chess-knight';
import deleteDigit from './delete-digit';
import buildPalindrome from './build-palindrome';
import electionWinners from './election-winners';
import isMac48Address from './mac48-address';
import longestWord from './longest-word';
import validTime from './valid-time';
import sumUpNumbers from "./sum-up-numbers";

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

describe("chessKnight", () => {
  it("should return the correct values for chessKnight function", () => {
    expect(chessKnight('a1')).toEqual(2);
    expect(chessKnight('d4')).toEqual(8);
    expect(chessKnight('f7')).toEqual(6);
  })
})

describe("deleteDigit", () => {
  it ("should return the correct values for deleteDigit function", () => {
    expect(deleteDigit(2345109)).toEqual(345109);
    expect(deleteDigit(861452)).toEqual(86452);
    expect(deleteDigit(109)).toEqual(19);
  })
})

describe("buildPalindrome", () => {
  it ("should return the expected values for buildPalindrome function", () => {
    expect(buildPalindrome('aaaaba')).toEqual('aaaabaaaa');
    expect(buildPalindrome('cbdbedffcg')).toEqual('cbdbedffcgcffdebdbc');
    expect(buildPalindrome('abba')).toEqual('abba');
  })
})

describe("electionWinners", () => {
  it ("should return the expected values for electionWinners", () => {
    let candidates = [3, 1, 1, 3, 1];
    expect(electionWinners(candidates, 2)).toEqual(2);
    candidates = [5, 1, 3, 4, 1];
    expect(electionWinners(candidates, 0)).toEqual(1);
    candidates = [100, 98, 123, 138, 89, 105]
    expect(electionWinners(candidates, 34)).toEqual(3);
  })
})

describe("isMac48Address", () => {
  it("should return expected values for isMac48Address", () => {
    let address = "00-1B-63-84-45-E6";
    expect(isMac48Address(address)).toEqual(true);
    address = "Z1-1B-63-84-45-E6";
    expect(isMac48Address(address)).toEqual(false);
    address = "D0-1B-64-89-43-DEA";
    expect(isMac48Address(address)).toEqual(false);
  })
})

describe("longestWord", () => {
  it("should return the longestWord in a sentence", () => {
    let sentence = "Ready[[[, steady, go!";
    expect(longestWord(sentence)).toEqual('steady');
    sentence = "To be or not to be";
    expect(longestWord(sentence)).toEqual('not');
    sentence = "345 Hello, welcome to the new dec@de"
    expect(longestWord(sentence)).toEqual('welcome')
  })
})

describe("validTime", () => {
  it("should return expected value for validTime", () => {
    expect(validTime("12:34")).toEqual(true);
    expect(validTime("24:00")).toEqual(false);
    expect(validTime("00:59")).toEqual(true);
  })
})

describe("sumUpNumbers", () => {
  it("should return the expected value for sumUpNumbers", () => {
    expect(sumUpNumbers("2 apples, 12 oranges")).toEqual(14);
    expect(sumUpNumbers("no digits at all")).toEqual(0);
    expect(sumUpNumbers("42+781")).toEqual(823)
  })
})

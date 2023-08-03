import { expect } from "chai";
import firstDuplicate from "./firstDuplicate";

describe("firstDuplicate test", () => {
  it("should return the first duplicate of '3' for the test", () => {
    const output = firstDuplicate([2, 1, 3, 4, 5, 3, 2]);
    expect(output).equal(3);
  })
})

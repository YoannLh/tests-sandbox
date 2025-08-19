import { helloWorld } from "../functions/hello-world";

describe("function helloWorld", () => {
  it("should return 'Hello World'", () => {
    expect(helloWorld({ name: "" })).toBe("Hello World");
  });
  it("should return 'Hello Loulou'", () => {
    expect(helloWorld({ name: "Loulou" })).toBe("Hello Loulou");
  });
});
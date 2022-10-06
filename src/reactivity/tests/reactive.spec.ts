import { reactive, isReactive } from "../reactive";

describe("reactive", () => {
  it("happy path", () => {
    const original = { foo: 1 };
    const observed = reactive(original);
    expect(observed).not.toBe(original);
    expect(observed.foo).toBe(1);
    expect(isReactive(observed)).toBe(true);
    expect(isReactive(original)).toBe(false);
  });
  it("nest handle", () => {
    const original = { foo: { a: 123 }, bar: { a: [1, 2, 3] } };
    const observed = reactive(original);
    expect(isReactive(observed.foo)).toBe(true);
    expect(isReactive(observed.bar)).toBe(true);
  });
});

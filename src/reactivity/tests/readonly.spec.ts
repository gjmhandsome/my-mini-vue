import { isReadonly, readonly, isProxy } from "../reactive";
describe("readonly", () => {
  it("happy path", () => {
    // not set
    const original = { foo: 1, bar: { baz: 2 } };
    const wrapped = readonly(original);
    expect(wrapped).not.toBe(original);
    expect(wrapped.foo).toBe(1);
    expect(isReadonly(wrapped)).toBe(true);
    expect(isReadonly(original)).toBe(false);
    expect(isProxy(wrapped)).toBe(true);
  });
  it("warn when set target", () => {
    console.warn = jest.fn();
    const user = readonly({ age: 1 });
    user.age = 2;
    expect(console.warn).toBeCalled();
  });
  it("nest handle", () => {
    const original = { foo: { a: 123 }, bar: { a: [1, 2, 3] } };
    const observed = readonly(original);
    expect(isReadonly(observed.foo)).toBe(true);
    expect(isReadonly(observed.bar)).toBe(true);
  });
});

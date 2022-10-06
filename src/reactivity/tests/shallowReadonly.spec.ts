import { isReadonly, shallowReadonly } from "../reactive";

describe("shallowReadonly", () => {
  it("happy path", () => {
    const original = shallowReadonly({ foo: { a: 1 } });
    expect(isReadonly(original)).toBe(true);
    expect(isReadonly(original.foo)).toBe(false);
  });
});

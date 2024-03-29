import { reactive } from "../reactive";
import { effect, stop } from "../effect";

describe("effect", () => {
  it("happy path", () => {
    const user = reactive({
      age: 10,
    });

    let nextAge;
    effect(() => {
      nextAge = user.age + 1;
    });

    expect(nextAge).toBe(11);

    // update
    user.age++;
    expect(nextAge).toBe(12);
  });
  it("xxx", () => {
    let foo = 10;
    const runner = effect(() => {
      foo++;
      return "foo";
    });
    expect(foo).toBe(11);
    const r = runner();
    expect(foo).toBe(12);
    console.log(r);
    expect(r).toBe("foo");
  });
  it("scheduler", () => {
    // 1、 通过effect的第二个参数给定一个scheduler 的fn
    // 2、 effect 第一次执行的时候 还会执行 fn
    // 3、 当响应式对象 set update不会执行 fn 而是执行scheduler
    // 4、 如果说当执行 runner 的时候，会再次的执行 fn
    let dumny;
    let run: any;
    const scheduler = jest.fn(() => {
      run = runner;
    });
    const obj = reactive({ foo: 1 });
    const runner = effect(
      () => {
        dumny = obj.foo;
      },
      { scheduler }
    );
    expect(scheduler).not.toHaveBeenCalled();
    expect(dumny).toBe(1);
    // should be called on first trigger
    obj.foo++;
    // should not run yet
    expect(scheduler).toHaveBeenCalledTimes(1);
    // should not run yet
    expect(dumny).toBe(1);
    // manually run
    run();
    // should have run
    expect(dumny).toBe(2);
  });
  it("stop", () => {
    let dumny;
    const obj = reactive({ props: 1 });
    const runner = effect(() => {
      dumny = obj.prop;
    });
    obj.prop = 2;
    expect(dumny).toBe(2);
    stop(runner);
    // obj.prop = 3;
    obj.prop++;
    expect(dumny).toBe(2);
    runner();
    expect(dumny).toBe(3);
  });
  it("onStop", () => {
    const obj = reactive({
      foo: 1,
    });
    const onStop = jest.fn();
    let dumny;
    const runner = effect(
      () => {
        dumny = obj.foo;
      },
      {
        onStop,
      }
    );

    stop(runner);
    expect(onStop).toBeCalledTimes(1);
  });
});

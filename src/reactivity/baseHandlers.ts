import { isObject, extend } from "../shared";
import { track, tigger } from "./effect";
import { reactiveFlag, reactive, readonly } from "./reactive";

const get = createGetter();
const set = createSetter();
const readyonlyGet = createGetter(true);
const shallowReadyonlyGet = createGetter(true, true);
const readyonlyset = createReadOnlySetter();

function createGetter(isReadyOnly = false, shallow = false) {
  return function get(target, key) {
    const res = Reflect.get(target, key);
    if (key === reactiveFlag.is_Reactive) {
      return !isReadyOnly;
    }
    if (key === reactiveFlag.is_Readyonly) {
      return isReadyOnly;
    }

    if (shallow) {
      return res;
    }
    if (isObject(res)) {
      return isReadyOnly ? readonly(res) : reactive(res);
    }

    if (!isReadyOnly) {
      // 依赖收集
      track(target, key);
    }
    return res;
  };
}
function createSetter() {
  return function set(target, key, value) {
    const res = Reflect.set(target, key, value);
    tigger(target, key);
    return res;
  };
}
function createReadOnlySetter() {
  return function set(target, key, value) {
    console.warn(
      `${String(key)} set failed, because target is readonly, ${target}`
    );
    return true;
  };
}

const mutableHandles = {
  get,
  set,
};

const readonlyHandles = {
  get: readyonlyGet,
  set: readyonlyset,
};

const shallowReadonlyHandles = extend({}, readonlyHandles, {
  get: shallowReadyonlyGet,
});

export { mutableHandles, readonlyHandles, shallowReadonlyHandles };

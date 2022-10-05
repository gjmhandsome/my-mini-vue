import { track, tigger } from "./effect";

const get = createGetter();
const set = createSetter();
const readyonlyGet = createGetter(true);
const readyonlyset = createReadOnlySetter();

function createGetter(isReadyOnly = false) {
  return function get(target, key) {
    const res = Reflect.get(target, key);
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

export { mutableHandles, readonlyHandles };

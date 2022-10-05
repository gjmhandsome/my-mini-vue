import { mutableHandles, readonlyHandles } from "./baseHandlers";

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandles);
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandles);
}

function createReactiveObject(raw, baseHandles) {
    return new Proxy(raw, baseHandles);
}

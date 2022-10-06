import {
  mutableHandles,
  readonlyHandles,
  shallowReadonlyHandles,
} from "./baseHandlers";

export const enum reactiveFlag {
  is_Reactive = "_v_IS_REACTIVE",
  is_Readyonly = "_v_IS_READYONLY",
}

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandles);
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandles);
}

export function shallowReadonly(raw) {
  return createReactiveObject(raw, shallowReadonlyHandles);
}

function createReactiveObject(raw, baseHandles) {
  return new Proxy(raw, baseHandles);
}

export function isReactive(value) {
  return !!value[reactiveFlag.is_Reactive];
}

export function isReadonly(value) {
  return !!value[reactiveFlag.is_Readyonly];
}

export const extend = Object.assign;

export const isObject = function (val) {
  return val !== null && typeof val === "object";
};

export const hasChanged = function (val, newVal) {
  return !Object.is(val, newVal);
};

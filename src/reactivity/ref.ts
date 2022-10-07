import { trackEffects, triggerEffects, isTracking } from "./effect";
import { reactive } from "./reactive";
import { isObject, hasChanged } from "../shared";

class RefImpl {
  private _value;
  public dep;
  private _rawValue;
  private _v_is_ref = true;
  constructor(value) {
    this._rawValue = value;
    this._value = covert(value);
    this.dep = new Set();
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newValue) {
    if (hasChanged(this._rawValue, newValue)) {
      this._rawValue = newValue;
      this._value = covert(newValue);
      triggerEffects(this.dep);
    }
  }
}

function covert(value) {
  return isObject(value) ? reactive(value) : value;
}

function trackRefValue(ref) {
  if (isTracking()) {
    trackEffects(ref.dep);
  }
}

export function ref(value) {
  return new RefImpl(value);
}

export function isRef(value) {
  return !!value._v_is_ref;
}

export function unRef(value) {
  return isRef(value) ? value.value : value;
}

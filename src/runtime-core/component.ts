/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 18:17:43
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-30 18:40:57
 * @FilePath: /mini-vue/src/runtime-core/component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PublicInstanceProxyHandles } from "./componentPublicInstance";
export function createComponentInstance(vnode) {
  const component = {
    vnode,
    type: vnode.type,
  };
  return component;
}

export function setupComponent(instance) {
  // TODO
  // initProps
  // initSlots()
  setupStatefulComponent(instance);
}
function setupStatefulComponent(instance: any) {
  const Component = instance.type;

  instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandles);

  const { setup } = Component;

  if (setup) {
    const setupResult = setup();

    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance, setupResult) {
  // function Object
  // TODO function
  if (typeof setupResult === "object") {
    instance.setupState = setupResult;
  }

  finishComponentSetup(instance);
}

function finishComponentSetup(instance) {
  const Component = instance.type;
  instance.render = Component.render;
  // if (Component.render) {
  //   instance.render = Component.render;
  // }
}

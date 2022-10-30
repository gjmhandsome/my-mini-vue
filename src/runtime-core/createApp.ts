/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 18:01:30
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-29 20:40:19
 * @FilePath: /mini-vue/src/runtime-core/createApp.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { render } from "./renderer";
import { createVNode } from "./vnode";

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      const vnode = createVNode(rootComponent);

      render(vnode, rootContainer);
    },
  };
}

/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 20:41:25
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-29 20:42:24
 * @FilePath: /mini-vue/src/runtime-core/h.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createVNode } from "./vnode";

export function h(type, props?, children?) {
  const vnode = createVNode(type, props, children);
  return vnode;
}

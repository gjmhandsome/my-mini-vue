/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 17:57:39
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-30 15:11:09
 * @FilePath: /mini-vue/examples/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from '../lib/mini-vue.esm.js';
import { App } from './App.js';

const rootContainer = document.querySelector('#app');
createApp(App).mount(rootContainer);
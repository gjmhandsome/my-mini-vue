/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 17:57:32
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-30 18:52:40
 * @FilePath: /mini-vue/examples/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { h } from '../lib/mini-vue.esm.js';


export const App = {
    render() {
        window.self = this;
        // ui
        return h(
            "div",
            {
                id: "root",
                class: ["red", "hard"],
            },
            "hi, " + this.msg
            // string
            // "hi, mini-vue"
            // Array
            //[h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "mini-vue")]
        );
    },

    setup() {
        return {
            msg: "mini-vue2",
        };
    },
};
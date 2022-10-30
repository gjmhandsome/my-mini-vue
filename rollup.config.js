/*
 * @Author: guanjiameng gjmhandsome@163.com
 * @Date: 2022-10-29 20:37:27
 * @LastEditors: guanjiameng gjmhandsome@163.com
 * @LastEditTime: 2022-10-29 21:19:17
 * @FilePath: /mini-vue/rollup.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
export default {
    input: "./src/index.ts",
    output: [
        // 1. cjs -> commonjs
        // 2. esm
        {
            format: "cjs",
            file: pkg.main,
        },
        {
            format: "es",
            file: pkg.module,
        },
    ],

    plugins: [typescript()],
};
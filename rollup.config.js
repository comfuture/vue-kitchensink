import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import vue from "rollup-plugin-vue";

import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    vue({
      template: {
        optimizeSSR: true
      },
      defaultLang: { 
        style: 'postcss'
      },
      style: {
        postcssPlugins: [
          autoprefixer(),
          postcssNesting()
        ]
      },
      preprocessStyles: true
    }),
    postcss({
      plugins: [
        postcssNesting()
      ]
    }),
    commonjs(),
    typescript()
  ]
};

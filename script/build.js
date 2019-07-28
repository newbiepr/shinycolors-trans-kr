const babel = require('rollup-plugin-babel')
const { version } = require('../package.json')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const cmjs = require('rollup-plugin-commonjs')

const banner = `// ==UserScript==
// @name         샤니마스 한글 패치
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      ${version}
// @description  샤니마스 한글 패치 스크립트입니다.
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu(https://github.com/biuuu/ShinyColors)
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @updateURL    https://newbiepr.github.io/shinymaskr/ShinyColors.user.js
// @supportURL   https://github.com/newbiepr/shinycolors-trans-kr/issues
// ==/UserScript==`
module.exports = {
  input: 'src/main.js',
  plugins: [
    resolve({ preferBuiltins: false }),
    cmjs({ ignore: ['stream'] }),
    json(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', {
        modules: false,
        targets: 'last 3 iOS versions'
      }]]
    })
  ],
  output: {
    file: './dist/ShinyColors.user.js',
    format: 'iife',
    name: 'shinycolors_zh',
    banner: banner,
    intro: `const ENVIRONMENT = "${process.env.BUILD === 'development' ? 'development' : ''}";
    const DEV = ${process.env.DEV ? true : false};
    const SHOW_UPDATE_TEXT = ${process.env.TEXT ? true : false};`
  }
};

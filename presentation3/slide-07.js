import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-3/step1.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 87], title: 'Webpack 简介（一）', note: '使用上下方向键查看代码注解'},
                                     {
                                         loc: [0, 87],
                                         title: 'Webpack 简介（一）',
                                         note: <span>学习 webpack 需要了解 JavaScript 模块化基础知识，建议首先通过如下链接自学 <a
                                             href="http://wiki.jikexueyuan.com/project/webpack-handbook/commonjs.html"
                                             target="_blank">CommonJS</a>、<a
                                             href="https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)"
                                             target="_blank">AMD</a> 及 <a
                                             href="http://wiki.jikexueyuan.com/project/es-six-deeply/module.html"
                                             target="_blank">ES6</a> 的模块化规范</span>
                                     },
                                     {
                                         loc: [0, 87],
                                         title: 'Webpack 简介（一）',
                                         note: <span>作为学习 Vue.js 单文件组件的基础，我们只需要了解到 webpack 是一个<span
                                             style={{color: '#7ec699'}}>通用 JavaScript 打包器</span>，其主要特点是<span
                                             style={{color: '#7ec699'}}>一切皆模块的思想</span>，能够<span
                                             style={{color: '#7ec699'}}>使用加载器将其他资源转换为 JavaScript 模块</span></span>
                                     },

                                     {loc: [0, 5], note: 'index.html 文件'},
                                     {loc: [5, 15], note: 'index.html 文件'},

                                     {
                                         loc: [16, 24],
                                         note: <span>webpack 打包入口文件 entry.js 文件（这里的注释和 script 标签是为将所有代码写入同一个 Code Slide 而加，请忽略，下同），使用打包命令 <span
                                             style={{color: '#7ec699'}}>webpack ./entry.js bundle.js</span> 可将此文件打包生成 bundle.js </span>
                                     },
                                     {loc: [12, 13], note: 'index.html 里引入的就是打包后生成的 bundle.js 脚本'},

                                     {loc: [25, 30], note: '打包生成的 bundle.js'},

                                     {loc: [31, 32], note: 'webpack 引导函数，以 IIFE 立即执行函数表达式的方式执行'},
                                     {loc: [33, 34], note: '用于存储模块缓存的对象'},
                                     {loc: [36, 37], note: 'webpack 的模块加载函数，加载模块并实现模块的缓存'},
                                     {loc: [39, 41], note: '若模块已缓存，则直接返回模块的输出'},
                                     {loc: [43, 48], note: '否则在缓存中创建一个新模块'},
                                     {loc: [50, 57], note: '执行模块函数，设置为已加载，并返回模块的输出'},

                                     {
                                         loc: [73, 82],
                                         note: '此数组包含打包生成的模块，作为参数传递给 webpack 引导函数，并且可以在 webpack 引导函数中通过数组索引被模块加载函数调用'
                                     },
                                     {loc: [75, 81], note: '0 号模块，即 webpack 打包时的入口模块，打包生成的模块是一个函数，注意该函数只有两个参数'},
                                     {loc: [69, 71], note: '加载入口模块并返回其输出'},

                                     {
                                         loc: [0, 87],
                                         title: 'Webpack 简介（一）',
                                         note: <span>看上去 webpack 和其他模块化系统没有什么差异，但其独特之处在于：<span
                                             style={{color: '#7ec699'}}>通过可以将其他资源转换成 JavaScript 的加载器，实现一切皆模块</span></span>
                                     },
                                     {loc: [0, 87], title: 'Webpack 简介（一）', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

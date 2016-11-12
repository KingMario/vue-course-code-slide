import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-3/step2.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 100], title: 'Webpack 简介（二）', note: '使用上下方向键查看代码注解'},
                                     {
                                         loc: [0, 100],
                                         title: 'Webpack 简介（二）',
                                         note: <span>继续学习在入口文件中使用<span style={{color: '#7ec699'}}>模块化系统</span>引入其他模块时，webpack 打包时的处理方式</span>
                                     },

                                     {loc: [0, 5], note: 'index.html 文件无变化'},

                                     {loc: [16, 24], note: <span>entry.js 入口文件中使用符合 <span style={{color: '#7ec699'}}>CommonJS 规范</span>的 require 语句引入模块 content.js，注意这里必须按照 <span style={{color: '#7ec699'}}>CommonJS 规范</span>使用 ./content.js 路径</span>},

                                     {loc: [25, 33], note: 'content.js，按照 CommonJS 规范输出一个字符串'},

                                     {loc: [34, 39], note: '打包生成的 bundle.js'},

                                     {loc: [40, 41], note: 'webpack 引导函数无变化'},
                                     {loc: [82, 98], note: '打包生成的模块数组中新增了一个模块'},
                                     {loc: [90, 97], note: '新增的 1 号模块，对应 content.js 模块'},
                                     {loc: [84, 90], note: '0 号模块函数也有所变化'},
                                     {loc: [84, 85], note: '由于用到了其他模块的输出，需要一个模块加载函数，这里的模块函数第三个参数 __webpack_require__ 正是模块加载函数'},

                                     {loc: [59, 60], note: '在 webpack 引导函数的模块加载函数中执行模块函数时，通过 call 方法将 webpack 引导函数中的模块加载函数 __webpack_require__ 作为第三个参数传递给被加载的模块函数'},
                                     {loc: [86, 87], note: '使用 __webpack_require__(1) 获取 1 号模块的输出，根据上一页的注解，__webpack_require__ 模块加载函数执行后会将 1 号模块缓存起来'},

                                     {loc: [0, 100], title: 'Webpack 简介（二）', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

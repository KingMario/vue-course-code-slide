import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-3/step3.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 482], title: 'Webpack 简介（三）', note: '使用上下方向键查看代码注解'},
                                     {
                                         loc: [0, 482],
                                         title: 'Webpack 简介（三）',
                                         note: <span>继续学习在入口文件中使用 <span style={{color: '#7ec699'}}>webpack 语法</span>的 require 语句引入其他资源时，webpack 打包时的处理方式，此时需要使用 loader 加载器将其他资源转换为 JavaScript 模块</span>
                                     },
                                     {loc: [0, 482], title: 'Webpack 简介（三）', note: '并简要介绍设置 webpack 配置文件，使得代码兼容其他模块系统或打包器'},

                                     {loc: [0, 5], note: 'index.html 文件无变化'},

                                     {loc: [16, 25], note: <span>entry.js 入口文件中使用 <span style={{color: '#7ec699'}}>webpack 语法</span>的 require 语句引入 style.css</span>},
                                     {loc: [22, 23], note: <span>这里 ./style.css 文件路径前面的 !style!css! 是 webpack 的<a href="https://webpack.github.io/docs/loaders.html" target="_blank">专用语法</a>，表示 webpack 使用 css-loader 和 style-loader 这两个加载器将新增的 style.css 文件转换成 JavaScript 然后打包成模块，webpack 专用语法会使得该文件与其他模块系统或 browserify 打包器不兼容</span>},
                                     {loc: [22, 23], note: '打包之前需要使用 npm 安装 css-loader 和 style-loader 这两个加载器，安装方法参见课程视频'},
                                     {loc: [22, 23], note: '为写出不含加载器前缀的，其他模块系统或打包器可以正确处理的代码，需要在 webpack 配置文件预设不同类型文件的加载器，webpack 配置文件稍后介绍'},

                                     {loc: [26, 36], note: 'style.css 是一个普通的 css 文件（请忽略这里的注释和 style 标签）'},

                                     {loc: [46, 51], note: '打包生成的 bundle.js'},

                                     {loc: [450, 458], note: '模块数组中的模块数变成了 6 个，这是 5 号模块，对应 content.js 文件'},
                                     {loc: [95, 103], note: '0 号模块，入口模块'},
                                     {loc: [103, 105], note: '1 号模块，style-loader 模块，用于在 html 文件中插入 style 标签及样式'},
                                     {loc: [129, 143], note: '2 号模块，对应 style.css 的模块，可见经转换后，原来的 css 资源变成了 JavaScript 模块'},
                                     {loc: [143, 145], note: '3 号模块，css-loader 模块，用于处理一个或多个 css 文件模块'},
                                     {loc: [199, 201], note: '4 号模块，具体处理 css 样式的模块'},

                                     {loc: [461, 466], note: 'webpack 配置文件'},
                                     {loc: [467, 480], note: '使用 CommonJS 规范输出一个配置对象'},
                                     {loc: [468, 469], note: '指定入口文件'},
                                     {loc: [469, 473], note: '指定打包生成的文件'},
                                     {loc: [473, 479], note: '模块处理相关配置'},
                                     {loc: [474, 478], note: '模块加载器配置，是一个对象数组，每个数组元素对象设置一种文件加载器配置'},
                                     {loc: [475, 476], note: '文件名测试正则表达式'},
                                     {loc: [476, 477], note: '符合文件名测试条件的文件的加载器配置'},
                                     {loc: [22, 23], note: <span>设置 webpack 配置文件后，这里的 require 语句可以写成 <span style={{color: '#7ec699'}}>require('./style.css')</span>，此时打包命令无需加参数</span>},
                                     {loc: [22, 23], note: '视频中还介绍了 html、less、图片、字体文件等资源通过加载器转换成 JavaScript 并经 webpack 打包的配置，请观看视频学习'},

                                     {loc: [0, 482], title: 'Webpack 简介（三）', note: <span>以上，你对 webpack 的了解已经超过 <span style={{color: '#7ec699'}}>65%</span> 的前端小伙伴，足以进一步学习 Vue.js 单文件组件相关知识了</span>},
                                     {loc: [0, 482], title: 'Webpack 简介（三）', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

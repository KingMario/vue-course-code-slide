import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-4/step1.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 240], title: 'Vue.js 单文件组件打包', note: '使用上下方向键查看代码注解'},

                                     {loc: [0, 5], note: 'index.html 页面文件'},
                                     {loc: [11, 12], note: '引入打包生成的 style.css，如何打包生成 style.css 稍后在 webpack 配置文件中讲解'},
                                     {
                                         loc: [16, 17],
                                         note: '引入打包生成的 build.js，如何设置打包输出文件名为 build.js，已经在前面的 webpack 简介中说明'
                                     },

                                     {loc: [21, 26], note: 'webpack 配置文件'},
                                     {loc: [27, 28], note: '提取样式为单独的 style.css 文件所要用到的插件'},

                                     {
                                         loc: [29, 30],
                                         note: 'webpack 配置文件模块的输出对象，对这样的模块规范语法我们要相当熟悉，显然 webpack 在打包时，也是将 webpack 配置文件作为一个模块来获取配置对象的'
                                     },
                                     {loc: [31, 32], note: '入口文件为 ./main.js'},
                                     {loc: [33, 37], note: '再次说明一下，设置打包输出文件名为 build.js'},
                                     {loc: [37, 38], note: '模块处理相关配置'},
                                     {loc: [40, 53], note: '模块加载器配置数组'},
                                     {
                                         loc: [40, 44],
                                         note: '第一个模块加载器配置对象——Vue.js 单文件组件加载器配置，通过该配置，在打包时会将非 JavaScript 的 .vue 文件资源转换成 JavaScript 模块'
                                     },
                                     {loc: [41, 42], note: 'Vue.js 单文件组件的扩展名为 .vue，文件名匹配该正则表达式的文件将使用此模块加载器配置'},
                                     {loc: [42, 43], note: '使用的加载器配置，首先使用 eslint 加载器进行代码检查，再使用 vue-loader 加载器进行转换'},
                                     {
                                         loc: [43, 53],
                                         note: '第二个模块加载器配置对象——图片文件加载器配置，通过该配置，在打包时会将非 JavaScript 的图片文件资源转换成 JavaScript 模块'
                                     },
                                     {loc: [44, 45], note: '图片文件名后缀测试正则表达式'},
                                     {
                                         loc: [45, 46],
                                         note: '使用的加载器配置，使用 url-loader 将图片资源转换为包含 url-data 资源（url-loader 得名于此）的 JavaScript 模块'
                                     },
                                     {
                                         loc: [46, 52],
                                         note: 'query 对象，当文件大小超过 10,000 字节时，使用 file-loader 加载器（为什么是 file-loader 而不是别的什么加载器，url-loader 就是这么做的，参见 url-loader 文档）'
                                     },
                                     {loc: [50, 51], note: '使用 file-loader 加载器时的文件命名规则'},

                                     {loc: [50, 51], note: '使用 file-loader 加载器时的文件命名规则'},

                                     {loc: [54, 59], note: 'Vue 高级 Loader 配置'},
                                     {loc: [56, 57], note: '针对 css 的高级 Loader 配置，使用 ExtractTextPlugin 插件提取 css 内容'},
                                     {loc: [60, 61], note: '指定提取的 css 内容保存为 style.css（还记得吗，index.html 中的 link 标签）'},

                                     {loc: [65, 70], note: 'packagw.json —— npm 项目配置文件'},
                                     {loc: [76, 79], note: '项目依赖'},
                                     {loc: [79, 80], note: '开发环境依赖'},
                                     {loc: [80, 86], note: 'babel 相关的开发环境依赖，实现对 Vue.js 单文件组件中 script 语言块中 ES6 特性的支持'},
                                     {loc: [89, 95], note: 'eslint 相关的开发环境依赖，用于代码检查'},

                                     {
                                         loc: [86, 88],
                                         note: '若在 script 块中设置使用 CoffeeScript 预处理，或通过高级 Loader 配置设置了使用 CoffeeScript，则需要这两个加载器'
                                     },
                                     {loc: [86, 88], note: '在示例项目中未使用 CoffeeScript 预处理，这里只是演示一下如果使用时的开发环境依赖'},
                                     {loc: [86, 88], note: '注意语言预处理相关的加载器通常都需要安装成双成对的开发环境依赖'},

                                     {loc: [88, 89], note: 'css-loader，往下可以找到 style-loader'},
                                     {loc: [97, 98], note: 'style-loader 在此'},

                                     {loc: [98, 99], note: 'url-loader，往上可以找到 file-loader'},
                                     {loc: [96, 97], note: 'file-loader 在此'},

                                     {loc: [100, 103], note: 'vue-loader 相关开发环境依赖'},

                                     {loc: [103, 105], note: 'webpack 打包工具及 webpack 开发服务器'},
                                     {loc: [108, 109], note: 'dev 脚本，可使用 npm run dev 启动 webpack 开发服务器'},
                                     {
                                         loc: [99, 100],
                                         note: '单文件组件热加载，使用 webpack 开发服务器启动 http 服务器时，开发过程中对组件或 js 文件所作的修改可以立即自动在页面上显示出来'
                                     },

                                     {loc: [115, 131], note: '入口文件 main.js'},
                                     {loc: [132, 137], note: 'CompanyTitle 单文件组件'},
                                     {
                                         loc: [121, 122],
                                         note: '使用 CommonJS 规范引入 CompanyTitle 单文件组件，注意必须使用 ./CompanyTitle.Vue 路径'
                                     },
                                     {loc: [126, 129], note: '局部注册组件'},
                                     {loc: [15, 16], note: '通过自定义标签使用组件'},
                                     {loc: [15, 16], note: '在自定义标签中使用 logo 和 slogan 这两个 props 传递数据给子组件'},

                                     {loc: [133, 137], note: 'CompanyTitle 单文件组件'},
                                     {loc: [137, 140], note: 'CompanyTitle 单文件组件的 template 语言块'},
                                     {loc: [140, 150], note: 'CompanyTitle 单文件组件的 script 语言块'},
                                     {loc: [150, 158], note: 'CompanyTitle 单文件组件的 style 语言块'},

                                     {
                                         loc: [141, 142],
                                         note: 'script 语言块中，使用 ES6 规范引入另一个单文件组件 CompanyLogo，同样注意使用 ./CompanyLogo.vue 路径'
                                     },
                                     {loc: [145, 148], note: '局部注册组件'},
                                     {loc: [138, 139], note: 'template 语言块中包含 company-logo 自定义标签'},
                                     {loc: [144, 145], note: '使用 props 组件选项声明可以由父组件传递的数据'},
                                     {loc: [138, 139], note: 'props 可直接在组件模板中进行数据绑定'},
                                     {loc: [150, 151], note: 'style 语言块使用 scoped 限定样式仅作用于当前组件'},

                                     {loc: [159, 164], note: 'CompanyLogo 单文件组件'},
                                     {loc: [164, 169], note: 'CompanyLogo 单文件组件的 template 语言块'},
                                     {loc: [169, 176], note: 'CompanyLogo 单文件组件的 script 语言块'},
                                     {loc: [176, 182], note: 'CompanyLogo 单文件组件的 style 语言块'},

                                     {loc: [173, 174], note: '接受父组件传递过来的 logo 数据'},
                                     {loc: [166, 167], note: '绑定 logo 数据到 img 的 src 属性'},
                                     {
                                         loc: [138, 139],
                                         note: '父组件中通过 company-logo 自定义标签使用组件时，将 logo 属性绑定到了其父组件传递进来的 props 中的 logo'
                                     },
                                     {loc: [15, 16], note: '因此 logo 数据是这里 company-title 自定义标签中 logo 属性的值，是一个图片 url'},

                                     {loc: [176, 177], note: 'style 语言块使用 scoped 限定样式仅作用于当前组件'},

                                     {loc: [183, 188], note: '最后看一下打包生成的文件 build.js 的片断'},
                                     {
                                         loc: [188, 196],
                                         note: 'css 内容被 extract-text-webpack-plugin 插件提取走了，只剩下 2、3 号两个空模块'
                                     },
                                     {loc: [196, 219], note: 'CompanyTitle 组件的 script 语言块打包生成的模块'},
                                     {loc: [211, 217], note: '生成的模块输出一个组件选项对象，包含了 script 语言块的模块输出'},
                                     {
                                         loc: [211, 217],
                                         note: '打包生成 build.js 可供进一步研究其模块数组，了解 vue-loader 是如何将整个 .vue 文件转换成 JavaScript 模块的'
                                     },

                                     {loc: [221, 226], note: '提取的 style.css 文件内容'},
                                     {loc: [227, 228], note: '选择子中的 [_v-60652b7e] 属性选择器用于限定样式仅作用于当前单文件组件'},
                                     {loc: [234, 235], note: '选择子中的 [_v-2d6bde75] 属性选择器用于限定样式仅作用于当前单文件组件'},

                                     {loc: [0, 240], title: 'Vue.js 单文件组件打包', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-1/ex_6.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 98], title: '动态组件', note: '使用上下方向键查看代码注解'},

                                     {loc: [67, 71], note: '全局注册 home 组件'},
                                     {loc: [68, 69], note: 'home 组件声明了 name 和 date 这两个 props'},

                                     {loc: [72, 84], note: '全局注册 products 组件'},
                                     {loc: [73, 74], note: 'products 组件的 props 中声明了一个 category'},
                                     {
                                         loc: [75, 83],
                                         note: 'activate 钩子，可以是一个单独的回调函数，或者是包含多个回调函数的数组，通常用于准备数据，防止 FOUC 闪烁'
                                     },
                                     {
                                         loc: [76, 79],
                                         note: '第一个回调函数，参数 done 用于声明自身已回调完毕，可以开始调用下一个回调函数，或者结束钩子，载入组件，这里用于指示开始调用第二个回调函数'
                                     },
                                     {
                                         loc: [79, 82],
                                         note: '第二个回调函数，参数 done 用于声明自身已回调完毕，可以开始调用下一个回调函数，或者结束钩子，载入组件，这里用于指示结束钩子，载入组件'
                                     },

                                     {loc: [85, 93], note: '创建 Vue 实例'},
                                     {loc: [87, 92], note: '实例数据'},
                                     {loc: [88, 89], note: '当前视图数据，可以绑定到动态组件的 is 特殊属性上，其初始值为 home，表示 home 组件的组件名'},
                                     {
                                         loc: [16, 22],
                                         note: '这里两个链接的 click 事件绑定到内联语句，用于修改当前视图数据，使之取值可以在 home 和 products 之间切换，其中的 href 属性用于保持光标形状为正常的手形，也可以使用 css 实现'
                                     },
                                     {loc: [23, 24], note: 'Vue.js 模板中的动态组件，可以使用 component 元素标签，也可以使用其他任意标签'},
                                     {loc: [23, 24], note: 'is 特殊属性用于指示实际载入的组件名称，这里使用数据绑定，绑定到当前视图名，当绑定的数据发生变化时，发生组件切换'},

                                     {loc: [23, 24], note: 'keep-alive 特殊属性用于指示将切换出去的组件保留在内存中，可以保留它的状态，避免重新渲染'},
                                     {loc: [23, 24], note: '当设置 keep-alive 时，组件的 activate 钩子（若有）仅在首次加载时调用一次'},
                                     {
                                         loc: [23, 24],
                                         note: 'name、date、category 等是传递给组件的 props，组件切换过程中，组件声明了的 props 才会被使用'
                                     },

                                     {loc: [89, 90], note: '过渡效果数据'},
                                     {
                                         loc: [7, 8],
                                         note: <span>引入的<a href="https://github.com/haydenbbickerton/vue-animate"
                                                           target="_blank">过渡效果样式库</a></span>
                                     },
                                     {loc: [26, 33], note: '过渡效果数据通过表单绑定到 select 下拉列表，提供过渡样式库中的五个过渡效果供选择'},
                                     {loc: [23, 24], note: 'transition 特殊属性表示组件切换时的过渡效果，绑定到实例的过渡效果数据'},
                                     {loc: [90, 91], note: '过渡模式数据'},
                                     {loc: [36, 42], note: '过渡模式数据通过表单绑定到 radio 单选按钮，仅支持 in-out 和 out-in 两种模式'},
                                     {loc: [23, 24], note: 'transition-mode 特殊属性表示组件切换时的过渡模式，绑定到实例的过渡模式数据'},

                                     {loc: [0, 98], title: '动态组件', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

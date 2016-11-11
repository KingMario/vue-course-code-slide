import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("raw!../../Lesson3-1/ex_2.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 162], title: '组件模板注意事项', note: '使用上下方向键查看代码注解'},

                                     {
                                         loc: [104, 107],
                                         note: '在浏览器进行 HTML 渲染时，select 中的非 option 元素会被移除，因此不要在扩展实例构造器的选项对象中采用这种方式来声明组件模板。这里的 slot 是后面要学到的内容，用于分发内容，类似于 Angular.js 里的 transclusion 交织'
                                     },
                                     {loc: [22, 27], note: '这部分代码在浏览器中呈现的是一个空下拉列表'},

                                     {loc: [108, 112], note: '使用 Vue.extend 定义一个扩展实例构造器，选项对象的组件模板是一个 option 元素'},
                                     {loc: [31, 34], note: '同样的原因，这部分代码由于 select 中的元素是非 option 而被移除，在浏览器中呈现的也是一个空下拉列表'},

                                     {
                                         loc: [113, 122],
                                         note: '扩展实例构造器声明。props 是后面要学到的内容，用于从父组件向子组件传递数据的选项，表示可以在自定义标签中接受一个名为 propA 的 HTML 属性。与条件渲染相关的注意事项及与媒体相关的注意事项请观看视频'
                                     },
                                     {
                                         loc: [37, 42],
                                         note: '在 table 的 tr 元素中放置了一个 my-component 自定义元素，props 中 propA 在 HTML 代码中必须写成 prop-a，注意 js 中所有驼峰式命名属性在 HTML 中均须写成小写字母短横分隔的形式'
                                     },
                                     {
                                         loc: [39, 40],
                                         note: '在 table 的 tr 元素中必须使用 th 或 td 元素，否则该元素会被移到 table 之前。在浏览器中使用“检查”元素可以看到这部分内容被移到了 table 之前'
                                     },

                                     {loc: [43, 50], note: '这里演示了另一种在模板中使用组件的方式'},
                                     {
                                         loc: [46, 47],
                                         note: '使用普通的 HTML 元素（这里是 td 元素），设置 is 属性为自定义标签，从浏览器中可以看到，my-component 组件显示在表格中'
                                     },

                                     {loc: [123, 126], note: '扩展实例构造器声明。'},
                                     {
                                         loc: [71, 72],
                                         note: '这里也使用普通的 HTML 元素（这里是 td 元素），设置 is 属性为自定义标签，从浏览器中可以看到该组件（一行浅蓝色背景的分隔条）正常显示，若直接使用 <seperator></seperator> 自定义标签，则在 v-for 列表渲染中会被移除'
                                     },

                                     {loc: [127, 136], note: '创建 Vue 实例，并使用 components 选项局部注册前面所介绍的组件。'},

                                     {loc: [137, 148], note: '创建 Vue 实例，并局部注册两个组件'},
                                     {loc: [80, 82], note: '用于演示条件渲染下组件模板注意事项的 Vue.js 模板'},

                                     {loc: [149, 156], note: '创建 Vue 实例，并声明两个数据 showIt 和 playIt'},
                                     {loc: [85, 101], note: '用于演示条件渲染下媒体相关注意事项的 Vue.js 模板'},

                                     {loc: [0, 162], title: '组件模板注意事项', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("raw!../../Lesson3-1/ex_5.html");

const images = {
    slots: require("../assets/slots.png")
};

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 59], title: '使用 slot 分发内容', note: '使用上下方向键查看代码注解'},

                                     {loc: [44, 47], note: '注册名为 child 的全局组件'},
                                     {loc: [27, 28], note: '当前元素的 innerHTML 是组件的模板'},
                                     {loc: [33, 34], note: '名为 name1 的具名插槽'},
                                     {loc: [34, 35], note: '匿名插槽'},
                                     {loc: [35, 36], note: '名为 name2 的具名插槽'},
                                     {loc: [33, 36], note: '注意观察模板中三个插槽的顺序'},

                                     {loc: [48, 54], note: '创建 Vue 实例'},
                                     {loc: [51, 52], note: '父组件数据作用域中的一个字符串数据'},
                                     {loc: [15, 23], note: '通过自定义标签使用组件'},
                                     {loc: [16, 22], note: '在 child 标签内部的内容实现父组件的内容与子组件内容的“交织”'},
                                     {loc: [16, 17], note: '在 child 标签内部的内容，该元素无 slot 属性，将被插入到组件模板的匿名插槽中'},
                                     {loc: [17, 18], note: '在 child 标签内部的内容，这里进行的数据插值使用的是父组件的数据作用域，该元素有 slot 属性，将被插入到组件模板的名为 name1 的插槽中'},
                                     {loc: [18, 19], note: '在 child 标签内部的内容，该元素有 slot 属性，将被插入到组件模板的名为 name2 的插槽中'},
                                     {loc: [19, 20], note: '在 child 标签内部的内容，这里进行的数据插值使用的是父组件的数据作用域，该元素有 slot 属性，将被插入到组件模板的名为 name1 的插槽中'},
                                     {loc: [20, 21], note: '在 child 标签内部的内容，该元素无 slot 属性，将被插入到组件模板的匿名插槽中'},
                                     {loc: [21, 22], note: '在 child 标签内部的内容，该元素有 slot 属性，将被插入到组件模板的名为 name2 的插槽中'},
                                     {loc: [16, 22], note: <span>注意观察这些内容在浏览器中的显示顺序，并不是这里 HTML 元素书写的顺序，而是与组件模板中三个插槽对应的顺序：<img
                                         src={images.slots.replace("/", "")} style={{width: '100%;'}}/></span>},

                                     {loc: [0, 59], title: '使用 slot 分发内容', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

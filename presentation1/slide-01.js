import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("raw!../../Lesson1-1/ex_1.html");

export default class Slide extends React.Component {
  render() {
    return ( < CodeSlide {...this.props }
      lang = "js"
      code = { source }
      ranges = {
        [
          { loc: [0, 49], title: '视图驱动的前端开发', note: '使用上下方向键查看代码注解' },
          { loc: [19, 20], note: '引入 jQuery' },
          { loc: [21, 22], note: '定义数据' },
          { loc: [10, 11], note: '设置 DOM 元素 id' },
          { loc: [24, 25], note: '通过 # + id 选择子选择元素' },
          { loc: [25, 28], note: '选择其他元素' },
          { loc: [29, 34], note: '直接操作 DOM 元素' },
          { loc: [35, 39], note: '直接使用 DOM 元素绑定点击事件' },
          { loc: [40, 45], note: '直接使用 DOM 元素绑定鼠标移入移出事件' },
          { loc: [0, 49], title: '视图驱动的前端开发', note: '使用左右方向键查看其他文件代码详解' }
        ]
      }
      />          
    )
  }
}

import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("!!raw!../../Lesson3-1/ex_4.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 147], title: '父子组件通信', note: '使用上下方向键查看代码注解'},

                                     {
                                         loc: [0, 147],
                                         title: '父子组件通信',
                                         note: '部分内容在 Vue.js 2.0 中已废弃，推荐使用第五部分学习的 Vuex 插件进行集中状态管理，本小节内容仅需简单了解'
                                     },

                                     {loc: [72, 75], note: '使用 this.$dispatch 分发事件，Vue.js 2.0 中 $dispatch 方法已废弃'},
                                     {
                                         loc: [75, 78],
                                         note: '（Vue.js 2.0 中未废弃，需要掌握）使用 this.$root.$emit 在当前组件的根组件上触发事件，这里的 this.$root 是父链，除 $root 引用根组件之外，还需要了解 this.$parent 引用父组件，this.$children 引用子组件数组'
                                     },
                                     {
                                         loc: [79, 84],
                                         note: '使用 events 实例选项响应事件，Vue.js 2.0 中 events 实例选项已废弃，组件中的自定义事件响应要在 created 钩子中注册，或在组件的自定义元素上使用 v-on 绑定事件'
                                     },
                                     {loc: [95, 98], note: '（Vue.js 2.0 中未废弃，需要掌握）在当前组件上使用 this.$emit 触发事件'},
                                     {loc: [122, 125], note: '使用 this.$broadcast 广播事件，Vue.js 2.0 中 $broadcast 方法已废弃'},
                                     {
                                         loc: [139, 142],
                                         note: '（Vue.js 2.0 中未废弃，需要掌握）使用 this.$children 获取子组件数组，在该数组的第一个组件实例元素上使用 $on 绑定自定义事件的响应函数'
                                     },

                                     {loc: [0, 147], title: '父子组件通信', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

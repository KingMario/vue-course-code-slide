import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("raw!../../Lesson3-1/ex_1.html");

export default class Slide extends React.Component {
  render() {
    return ( < CodeSlide {...this.props }
      lang = "html"
      code = { source }
      ranges = {
        [
          { loc: [0, 169], title: '组件的注册与使用', note: '使用上下方向键查看代码注解' },
          
          { loc: [88, 89], note: '引入 Vue.js' },
          { loc: [90, 98], note: ( <span>使用语法糖<span style={{color: '#7ec699'}}>（只使用扩展实例选项）</span>全局注册组件</span> ) },
          { loc: [91, 96], note: ( <span>Vue 扩展实例构造器的 data 选项，必须是一个<span style={{color: '#7ec699'}}>工厂函数</span>，返回数据对象</span> ) },
          { loc: [96, 97], note: ( <span>template 是模板，可以是包含 HTML 代码的字符串，也可以是 # + id，如果是 # + id，则会使用该选择子匹配的 DOM 元素的 innerHTML 作为模板</span> ) },
          { loc: [82, 88], note: ( <span>此 DOM 元素的 innerHTML 作为全局注册组件的模板</span> ) },
          { loc: [84, 85], note: ( <span>和普通 Vue.js 模板一样，可以进行插值</span> ) },
          { loc: [85, 86], note: ( <span>和普通 Vue.js 模板一样，也可以进行表单数据绑定</span> ) },
          { loc: [66, 67], note: ( <span>使用自定义标签在 Vue.js 模板中插入组件，编译时，这部分内容会被替换为组件的内容</span> ) },
          { loc: [80, 81], note: ( <span>这里也插入了这个组件，全局注册的组件可以在所有晚于该组件注册语句构造的 Vue 实例中使用</span> ) },

          { loc: [99, 100], note: ( <span>（本行及后续参数）使用 Vue.extend 方法声明 Vue 的扩展实例构造器 localComponent，参数是一个 Vue 实例选项对象，可以使用各种 Vue 实例选项</span> ) },
          { loc: [100, 106], note: ( <span>Vue 扩展实例构造器中允许使用各种 Vue 实例选项。data 选项必须是一个<span style={{color: '#7ec699'}}>工厂函数</span>，返回数据对象 </span> ) },
          { loc: [106, 111], note: '这里还使用了 methods 选项，在使用该扩展实例构造器构造 Vue 实例时，自动会将这些选项合并到构造选项中' },
          { loc: [111, 112], note: 'template 是模板，这里是包含 Vue.js 模板的字符串' },
          
          { loc: [114, 115], note: '（本行及后续参数）声明另一个 Vue 扩展实例构造器 myVue' },
          { loc: [115, 125], note: ( <span>Vue 扩展实例构造器的 data 选项，返回一个<span style={{color: '#7ec699'}}>工厂函数</span></span> ) },
          { loc: [125, 130], note: ( <span>同样也可以声明实例方法</span> ) },
          { loc: [130, 134], note: ( <span>在 components 实例选项中使用对象属性局部注册组件</span> ) },
          { loc: [131, 132], note: ( <span>对象属性，键名为 YOURVUE，键值为前面声明的 Vue 扩展实例构造器</span> ) },
          { loc: [59, 60], note: ( <span>局部注册组件对象中的键名 YOURVUE 必须被看作<span style={{color: '#7ec699'}}>驼峰式</span>命名，而自定义标签必须写作短横分隔式，因此使用 &lt;y-o-u-r-v-u-e&gt;&lt;/y-o-u-r-v-u-e&gt; 自定义标签在模板上插入这个组件</span> ) },
          { loc: [132, 133], note: ( <span>对象属性，键名为 local-component，短横分隔式命名，键值为前面声明的 Vue 扩展实例构造器</span> ) },
          { loc: [61, 62], note: ( <span>注册时短横分隔式命名的组件，其自定义标签直接使用组件注册名</span> ) },
          { loc: [136, 137], note: ( <span>使用扩展实例构造器 myVue 构造 Vue 实例，可以和 new Vue 使用一样的参数<span style={{color: '#7ec699'}}>（实例选项对象）</span>来使用 myVue</span> ) },
          { loc: [137, 146], note: ( <span>data 选项，将会与扩展实例构造器 myVue 中 data 工厂函数所返回的数据按一定的规则合并</span> ) },
          { loc: [117, 118], note: ( <span>data 选项合并规则：无重复的属性保留，因此使用扩展实例构造器 myVue 构造的 Vue 实例中会有 myVue 扩展实例构造器中的 msg 数据</span> ) },
          { loc: [138, 139], note: ( <span>data 选项合并规则：无重复的属性保留，因此构造的 Vue 实例中也会有 newMsg 数据</span> ) },
          { loc: [139, 140], note: ( <span>data 选项合并规则：同名覆盖，myVue 中 data 工厂函数所返回的数据中 i 的值 1 被 100 覆盖</span> ) },
          { loc: [140, 145], note: ( <span>data 选项中对象属性也遵循相同的合并规则，无重复的属性保留，同名覆盖，因此最终的数据中 obj 对象：b: 99, c: 3, d: 4, a: 1</span> ) },
          { loc: [146, 154], note: ( <span>methods 选项，合并规则与 data 选项相同，因此最终的 Vue 实例方法中包含 add 和 add2，add 方法的作用是 i 自加 0.5，而不是 myVue 中声明的 i 自加 1</span> ) },
          { loc: [154, 157], note: ( <span>仍然可以使用 components 继续注册组件</span> ) },
          { loc: [56, 57], note: ( <span>在模板中插入组件时，将驼峰式命名改为短横分隔式自定义标签</span> ) },
          { loc: [0, 169], title: '组件的注册与使用', note: '使用左右方向键查看其他文件代码详解' }
        ]
      }
      />          
    )
  }
}

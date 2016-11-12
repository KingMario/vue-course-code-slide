import React from "react";
import CodeSlide from "spectacle-code-slide";

const source = require("raw!../../Lesson3-1/ex_3.html");

export default class Slide extends React.Component {
    render() {
        return ( < CodeSlide {...this.props }
                             lang="html"
                             code={ source }
                             ranges={
                                 [
                                     {loc: [0, 107], title: '使用 props 传递数据', note: '使用上下方向键查看代码注解'},

                                     {
                                         loc: [50, 51],
                                         note: '（本行及后续参数）使用 Vue.extend 方法创建扩展实例构造器，用于全局或局部注册为组件，可以将组件简单理解为在模板中出现自定义标签时使用该扩展实例构造器创建并挂载一个扩展实例，实际情况要比这复杂得多'
                                     },
                                     {loc: [99, 100], note: '将前面创建的扩展实例构造器局部注册为组件，该组件只能在当前 Vue 实例中使用'},
                                     {loc: [88, 89], note: '扩展实例（组件）的模板属性，使用 #tpl 选择子，匹配的元素的 innerHTML 作为组件模板'},
                                     {loc: [25, 26], note: '（整个 template 元素）此元素的 innerHTML 作为组件的模板'},

                                     {loc: [51, 52], note: '（整个 props 对象）使用 props 声明组件中可接受的数据'},

                                     {loc: [52, 56], note: '声明 name，类型为 String，默认值为 "Componet"，注意观察三个组件实例中 h3 元素的内容'},
                                     {loc: [27, 28], note: 'props 可以和 data 一样使用，这里演示了插值'},

                                     {loc: [56, 57], note: '声明 msg，类型为 String'},
                                     {loc: [30, 31], note: '和 data 一样可以表单数据绑定'},

                                     {loc: [57, 61], note: '声明 propA，类型为 Array，必需，在自定义标签中，propA 必须写成 prop-a'},
                                     {loc: [80, 88], note: '组件方法，用于演示子组件中对数组 prop 进行修改时，会影响到父组件的的数据'},
                                     {loc: [32, 33], note: '输出 propA 的内容，“| json” 是过滤器语法，将 propA 转换为 JSON 字符串'},
                                     {
                                         loc: [34, 35],
                                         note: '绑定组件方法到按钮的点击事件上，该方法在数组中添加一个随机数，用于演示对 prop 进行修改时，父组件中的数据也会同步修改，说明数组 prop 传递的是引用（对象 prop 传递的也是引用，可自行验证）'
                                     },
                                     {
                                         loc: [35, 36],
                                         note: '绑定组件方法到按钮的点击事件上，该方法对数组进行排序，用于演示对 prop 进行修改时，父组件中的数据也会同步修改，说明数组 prop 传递的是引用（对象 prop 传递的也是引用，可自行验证）'
                                     },

                                     {loc: [61, 62], note: '声明 propB，类型可以是 String 或 Number，在自定义标签中，propB 必须写成 prop-b'},
                                     {loc: [33, 34], note: '输出 propB 的类型'},

                                     {
                                         loc: [62, 68],
                                         note: '声明 numbers，类型为 Array，默认值为 [1, 1, 2, 3, 5, 8, 13, 21]，对象或数组类型的 prop 的默认值必须采用工厂函数返回对应类型的数据'
                                     },
                                     {loc: [38, 39], note: '输出 numbers 内容'},

                                     {
                                         loc: [68, 78],
                                         note: '声明 number，类型为 Number，对传入的数据会使用校验函数进行校验，若校验不通过，number 为 undefined，twoWay 和 coerce 在 Vue.js 2.0 中均已废弃'
                                     },
                                     {
                                         loc: [36, 38],
                                         note: '使用条件渲染，若 number 有数据（必须校验通过才行），则输出 number 值，否则显示 number 不存在，Vue.js 2.0 中，v-show 后面不再跟 v-else，因此这里只能用 v-if'
                                     },

                                     {loc: [78, 79], note: '声明 myNumber，类型为自定义 number 对象'},
                                     {loc: [45, 49], note: '自定义 number 对象的构造函数'},
                                     {
                                         loc: [39, 41],
                                         note: '使用条件渲染，若 myNumber 有数据，则输出其 JSON 字符串，否则显示 That\'s all，Vue.js 2.0 中，v-show 后面不再跟 v-else，因此这里只能用 v-if'
                                     },

                                     {loc: [91, 102], note: '创建 Vue 实例'},
                                     {loc: [93, 98], note: '实例数据，可用于 props 绑定'},

                                     {loc: [10, 11], note: '（整个 div 元素）Vue.js 模板'},
                                     {
                                         loc: [12, 17],
                                         note: '父组件中的 parentMsg 数据，分别进行了插值和表单数据绑定，用于演示父子组件中数据的传递关系，在 Vue.js 2.0 中仅支持单向传递'
                                     },
                                     {
                                         loc: [18, 19],
                                         note: '以 JSON 字符串的形式输出父组件中的 arrData 数据内容，用于演示数组在子组件中修改后对父组件中数据状态的影响，父子组件中的数据同步变化效果参见视频'
                                     },

                                     {loc: [20, 21], note: '使用自定义标签在模板中插入组件'},
                                     {
                                         loc: [20, 21],
                                         note: ':msg="parentMsg"，表示通过数据绑定指令将父组件中的 parentMsg 作为 msg 传入子组件，“:”是“v-bind:”的简写，可用于普通 HTML 属性，也可用于组件的 props'
                                     },
                                     {
                                         loc: [20, 21],
                                         note: ':prop-a="arrData"，表示通过数据绑定指令将父组件中的 arrData 作为 propA 传入子组件，用于演示数组在子组件中修改后对父组件中数据状态的影响，父子组件中的数据同步变化效果参见视频'
                                     },
                                     {
                                         loc: [20, 21],
                                         note: 'prop-b="12"，表示直接传递 12 给 propB，这里的 12 必须看作是字符串 "12"，propB声明时已经指定可以是 String 或 Number，因此这里可以传递字符串没毛病'
                                     },
                                     {
                                         loc: [20, 21],
                                         note: ':numbers="[1,2,3]"，使用数据绑定指令将字面量数组 [1,2,3] 传递给 numbers，如果不使用数据绑定，传递的将会是字符串'
                                     },
                                     {loc: [20, 21], note: ':number="13"，使用数据绑定指令将字面量数值 13 传递给 number'},

                                     {loc: [21, 22], note: '使用自定义标签在模板中插入组件'},
                                     {
                                         loc: [21, 22],
                                         note: 'name="Another Component"，直接传递 "Another Component" 字符串给 name，和 src、class、style 等普通 HTML 属性类似，不使用数据绑定的 prop-x="XXXX" 传递的都是字符串'
                                     },
                                     {
                                         loc: [21, 22],
                                         note: ':msg.sync="parentMsg"，双向绑定 parentMsg 到 msg，为降低对父组件数据状态的副作用，.sync 修饰符在 Vue.js 2.0 中已废弃，使用 props 向子组件传递数据只能是单向的，并且不鼓励在子组件中修改 prop 的值'
                                     },
                                     {
                                         loc: [21, 22],
                                         note: ':prop-a="arrData"，表示通过数据绑定指令将父组件中的 arrData 作为 propA 传入子组件，用于演示数组在子组件中修改后对父组件中数据状态的影响，注意在 Vue.js 1.0 中，js 中的“驼峰式”标记在 HTML 中用作属性或指令参数……时要转为“羊-肉-串-式”，Vue.js 2.0 中由于引入了 Virtual DOM，在 HTML 中使用“驼峰式”或“羊-肉-串-式”均可'
                                     },
                                     {
                                         loc: [21, 22],
                                         note: ':prop-b="12"，使用数据绑定指令将字面量数值 12 传递给 propB，propB声明时已经指定可以是 String 或 Number，因此这里可以传递数值没毛病'
                                     },
                                     {
                                         loc: [21, 22],
                                         note: ':my-number="myNumber"，使用数据绑定指令将父组件中的 myNumber 对象传递给 myNumber'
                                     },

                                     {loc: [22, 23], note: '使用自定义标签在模板中插入组件'},
                                     {
                                         loc: [22, 23],
                                         note: 'name="Yet Another Component"，直接传递 "Yet Another Component" 字符串给 name'
                                     },
                                     {
                                         loc: [22, 23],
                                         note: ':msg.once="parentMsg"，使用数据绑定指令将父组件中的 parentMsg 传递给 msg，使用修饰符 once 表示单次绑定，Vue.js 2.0 中 once 修饰符已废弃，可以在组件模板中局部使用新的 v-once 指令代替'
                                     },
                                     {
                                         loc: [22, 23],
                                         note: ':prop-a="arrData"，表示通过数据绑定指令将父组件中的 arrData 作为 propA 传入子组件，用于演示数组在子组件中修改后对父组件中数据状态的影响'
                                     },

                                     {loc: [0, 107], title: '使用 props 传递数据', note: '使用左右方向键查看其他文件代码详解'}
                                 ]
                             }
            />
        )
    }
}

import React from "react";

import {
    Heading,
    Link,
    Slide,
    Text
} from "spectacle";

export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide {...this.props} bgColor="secondary">
                <Text>关于这一部分的难点</Text>
                <Text textSize=".75em">webpack 仅需简单了解其一切皆模块的思想</Text>
                <Text textSize=".75em">但需要掌握各种模块化规范</Text>
                <Text textSize=".75em">Vue.js 单文件组件重点掌握其组件规范</Text>
                <Text textSize=".75em">以及了解可以在 webpack 中使用 vue-loader 加载器进行打包</Text>
                <Text textSize=".75em">官方 <Link href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</Link> 的
                    <Link href="https://github.com/vuejs-templates/webpack" target="_blank">webpack 项目模板</Link>提供了完整全面的打包配置</Text>
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                    ❉注解完❉
                </Heading>
                <Text textColor="red">
                    谢谢观看
                </Text>
                <Text textSize="1.5em" margin="20px 0px 0px" bold>按左方向键回退</Text>
                <Text textSize=".75em">有问题请<Link href="https://github.com/KingMario/vue-course/issues" target="_blank">留言</Link></Text>
            </Slide>
        )
    }
}
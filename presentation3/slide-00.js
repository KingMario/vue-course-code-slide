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
            <Slide {...this.props} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                    Vue.js 课程代码详解
                </Heading>
                <Heading size={1} fit>
                    使用 ReactJS 的 Presentation 库
                </Heading>
                <Heading size={1} fit caps textColor="black">
                    展示 Vue.js 实例代码
                </Heading>
                <Text>Powered by <Link href="https://github.com/FormidableLabs/spectacle">spectacle</Link> & <Link href="https://github.com/thejameskyle/spectacle-code-slide">spectacle-code-slide</Link></Text>
                <Text textSize="1.5em" margin="20px 0px 0px" bold>按右方向键开始</Text>
            </Slide>
        )
    }
}
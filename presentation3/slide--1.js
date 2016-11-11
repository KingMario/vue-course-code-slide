import React from "react";

import {
    Heading,
    Slide,
    Text
} from "spectacle";

export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide {...this.props} bgColor="secondary">
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                    未完待续
                </Heading>
                <Text textSize="1.5em" margin="20px 0px 0px" bold>按左方向键回退</Text>
            </Slide>
        )
    }
}
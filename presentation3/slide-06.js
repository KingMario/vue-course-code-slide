import React from "react";

import {
    Layout,
    Heading,
    Fill,
    Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide {...this.props} bgColor="primary">
                <Heading caps fit>Flexible Layouts</Heading>
                <Layout>
                    <Fill>
                        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                            Left
                        </Heading>
                    </Fill>
                    <Fill>
                        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                            Right
                        </Heading>
                    </Fill>
                </Layout>
            </Slide>
        )
    }
}
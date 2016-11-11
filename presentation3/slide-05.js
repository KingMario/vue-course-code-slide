import React from "react";

import {
    Appear,
    Heading,
    Slide
} from "spectacle";

const images = {
    city: require("../assets/city.jpg")
};


export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide {...this.props} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
                <Appear fid="1">
                    <Heading size={1} caps fit textColor="primary">
                        Full Width
                    </Heading>
                </Appear>
                <Appear fid="2">
                    <Heading size={1} caps fit textColor="tertiary">
                        Adjustable Darkness
                    </Heading>
                </Appear>
                <Appear fid="3">
                    <Heading size={1} caps fit textColor="primary">
                        Background Imagery
                    </Heading>
                </Appear>
            </Slide>
        )
    }
}
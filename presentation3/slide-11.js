import React from "react";

import {
    Heading,
    Slide
} from "spectacle";

// Import custom component
import Interactive from "../assets/interactive";

export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide {...this.props} bgColor="primary">
                <Heading size={1} caps fit textColor="tertiary">
                    Your presentations are interactive
                </Heading>
                <Interactive/>
            </Slide>
        )
    }
}
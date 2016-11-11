import React from "react";

import {
    Heading,
    Markdown,
    Slide
} from "spectacle";

const images = {
    markdown: require("../assets/markdown.png")
};

export default class SlideContent extends React.Component {
    render() {
        return (
            <Slide  {...this.props} bgColor="tertiary">
                <Heading caps fit size={1} textColor="primary">
                    Inline Markdown
                </Heading>
                <Markdown>
                    {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
                </Markdown>
            </Slide>
        )
    }
}
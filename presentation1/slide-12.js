import React from "react";

import {  
  Heading,
  Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (      
          <Slide {...this.props} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
          </Slide>
        )
    }
}
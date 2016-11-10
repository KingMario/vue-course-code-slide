import React from "react";

import {
  Heading,
  Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (      
         <Slide  {...this.props}  bgColor="primary" >
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
        )
    }
}
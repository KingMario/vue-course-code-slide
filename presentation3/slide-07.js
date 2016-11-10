import React from "react";

import {
  BlockQuote,
  Cite,
  Quote,
  Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (      
          <Slide {...this.props} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
        )
    }
}
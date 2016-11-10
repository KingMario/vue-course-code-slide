import React from "react";

import {
  Appear,
  List,
  ListItem,
  Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (
          <Slide {...this.props} transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
        )
    }
}
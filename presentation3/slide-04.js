import React from "react";

import {
  CodePane,
  Slide
} from "spectacle";

export default class SlideContent extends React.Component {
    render(){        
        return (      
            <Slide {...this.props} bgColor="primary"  notes="<ul><li>talk about that</li><li>and that</li></ul>">
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/deck.example")}
                  margin="20px auto"
                />
          </Slide> 
        )
    }
}
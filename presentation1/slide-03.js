import React from "react";

import {
  Heading,
  Image,
  Slide
} from "spectacle";

const images = {
  kat: require("../assets/kat.png")
};


export default class SlideContent extends React.Component {
    render(){        
        return (      
            <Slide {...this.props} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
                <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
                <Heading size={2} caps fit textColor="primary" textFont="primary">
                Wait what?
                </Heading>
           </Slide>         
        )
    }
}
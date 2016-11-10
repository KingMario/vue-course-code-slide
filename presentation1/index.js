// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Spectacle } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

import Slide01 from './slide-01.js'; 
import Slide02 from './slide-02.js'; 
import Slide03 from './slide-03.js';
import Slide04 from './slide-04.js'; 
import Slide05 from './slide-05.js'; 
import Slide06 from './slide-06.js'; 
import Slide07 from './slide-07.js'; 
import Slide08 from './slide-08.js';
import Slide09 from './slide-09.js'; 
import Slide10 from './slide-10.js'; 
import Slide11 from './slide-11.js'; 
import Slide12 from './slide-12.js'; 

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          
          <Slide01 transition={["zoom"]}  />         
          
          <Slide02 transition={["zoom"]}  />            
          
          <Slide03 transition={["slide"]}  />          
          
          <Slide04 transition={["zoom", "fade"]}  />            
          
          <Slide05 transition={["slide"]} />           
          
          <Slide06 transition={["zoom", "fade"]} />           
          
          <Slide07 transition={["slide"]}  />
          
          <Slide08 transition={["slide"]} />
          
          <Slide09 transition={["fade"]} />           
          
          <Slide10 transition={["fade"]}   />
          
          <Slide11 transition={["slide"]} />        

          <Slide12 transition={["slide"]} />

        </Deck>
      </Spectacle>
    );
  }
}

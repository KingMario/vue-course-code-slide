// Import React
import React from "react";

// Import Spectacle Core tags
import {Deck, Spectacle} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    slots: require("../assets/slots.png")
};

preloader(images);

const theme = createTheme({
    primary: "#ff4081",
    secondary: "#7ec699"
});

import Slide00 from './slide-00.js';
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
import Slide0e from './slide--1.js';

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                    <Slide00 transition={["zoom"]}/>

                    <Slide01 transition={["zoom"]}/>

                    <Slide02 transition={["zoom"]}/>

                    <Slide03 transition={["zoom"]}/>

                    <Slide04 transition={["zoom"]}/>

                    <Slide05 transition={["zoom"]}/>

                    <Slide06 transition={["zoom"]}/>

                    <Slide07 transition={["zoom"]}/>

                    <Slide08 transition={["zoom"]}/>

                    <Slide09 transition={["zoom"]}/>

                    <Slide0e transition={["zoom"]}/>

                </Deck>
            </Spectacle>
        );
    }
}

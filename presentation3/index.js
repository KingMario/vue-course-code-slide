// Import React
import React from "react";

// Import Spectacle Core tags
import {Deck, Spectacle} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
    primary: "#ff4081",
    secondary: "#7ec699"
});

import Slide00 from './slide-00.js';
import Slide01 from './slide-01.js';
import Slide02 from './slide-02.js';
import Slide03 from './slide-03.js';
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

                    <Slide0e transition={["zoom"]}/>

                </Deck>
            </Spectacle>
        );
    }
}

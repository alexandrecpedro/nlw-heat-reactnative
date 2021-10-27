// OVERWRITING THE TYPING OF .SVG FILES

declare module "*.svg" {
    import React from "react";
    import Svg, { SvgProps } from "react-native-svg"; // getting properties of svg
    const content: React.FC<SvgProps>; // function component (FC) of React | Component type: SvgProps
    export default content;
}
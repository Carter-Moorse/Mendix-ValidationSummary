import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { DisplayAllValidationsContainerProps } from "../typings/DisplayAllValidationsProps";

import "./ui/DisplayAllValidations.css";

export function DisplayAllValidations({ sampleText }: DisplayAllValidationsContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}

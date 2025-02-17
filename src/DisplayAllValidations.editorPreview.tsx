import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DisplayAllValidationsPreviewProps } from "../typings/DisplayAllValidationsProps";

export function preview({ sampleText }: DisplayAllValidationsPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/DisplayAllValidations.css");
}

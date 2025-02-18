import { ReactElement, createElement } from "react";
import { ValidationMessage, MessageOptions } from "./components/ValidationMessage";
import { ValidationDumpPreviewProps } from "../typings/ValidationDumpProps";

export function preview(props: ValidationDumpPreviewProps): ReactElement {
    const validationMessages = props.listenToFields.reduce((accu: MessageOptions[], obj) => {
        const validation = obj.type === "reference" ? obj.reference : obj.attribute;
        const callback = obj.clickAction !== "none" ? () => 0 : undefined;

        if (validation != undefined) {
            accu.push({
                validation,
                callback
            });
        }
        return accu;
    }, []);

    return (
        <ValidationMessage
            messages={validationMessages}
            messageTemplate={props.messageTemplate}
            className={props.class}
        />
    );
}

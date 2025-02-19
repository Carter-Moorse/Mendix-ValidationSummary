import { ReactElement, createElement } from "react";
import { ValidationMessage, MessageOptions } from "./components/ValidationMessage";
import { ValidationSummaryPreviewProps } from "../typings/ValidationSummaryProps";

export function preview(props: ValidationSummaryPreviewProps): ReactElement {
    const validationMessages = props.listenToFields.reduce((accu: MessageOptions[], obj) => {
        const validation = obj.type === "reference" ? obj.reference : obj.attribute;
        const callback = obj.clickAction !== "none" ? () => 0 : undefined;

        if (validation !== undefined) {
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
            listStyle={props.listStyle}
            className={props.class}
        />
    );
}

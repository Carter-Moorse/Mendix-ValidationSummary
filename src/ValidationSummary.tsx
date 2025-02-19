import { ReactElement, createElement, useMemo, MouseEvent } from "react";
import { ValidationMessage, MessageOptions } from "./components/ValidationMessage";

import { ValidationSummaryContainerProps } from "../typings/ValidationSummaryProps";

export function ValidationSummary(props: ValidationSummaryContainerProps): ReactElement {
    // Data attribute only used for widget reference. Disable data
    props.listenToFields.forEach(obj => {
        if (obj.type === "reference" && obj.data) {
            obj.data.setLimit(0);
        }
    });

    // String list of validation messages
    const messages = useMemo(() => {
        return props.listenToFields.reduce((accu: MessageOptions[], obj) => {
            const field = obj.type === "reference" ? obj.reference : obj.attribute;
            const validation = field?.validation;
            let callback;

            switch (obj.clickAction) {
                case "focus":
                    callback = (e: MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        const ele = document.querySelector(obj.actionSelector) as HTMLElement;
                        if (ele) {
                            ele.focus();
                        }
                    };
                    break;

                case "scrollIntoView":
                    callback = (e: MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        const ele = document.querySelector(obj.actionSelector) as HTMLElement;
                        if (ele) {
                            ele.scrollIntoView();
                        }
                    };
                    break;
            }

            if (validation != undefined) {
                accu.push({
                    validation,
                    callback
                });
            }
            return accu;
        }, []);
    }, [props.listenToFields]);

    return (
        <ValidationMessage
            messages={messages}
            messageTemplate={props.messageTemplate}
            className={props.class}
            style={props.style}
        />
    );
}

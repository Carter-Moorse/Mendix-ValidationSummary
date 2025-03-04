import { CSSProperties, Fragment, ReactElement, createElement, MouseEvent } from "react";
import { ListStyleEnum } from "../../typings/ValidationSummaryProps";
import classNames from "classnames";

export interface MessageOptions {
    validation: string;
    callback?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export interface ValidationMessageProps {
    messages: MessageOptions[];
    messageTemplate: string;
    listStyle: ListStyleEnum;
    className?: string;
    style?: CSSProperties;
}

export function ValidationMessage({
    messages,
    messageTemplate,
    listStyle,
    className,
    style
}: ValidationMessageProps): ReactElement {
    const shouldRender = () => messages.length > 0;

    const renderItem = (item: MessageOptions) => {
        if (item.callback) {
            return (
                <a role="button" href="#" onClick={item.callback}>
                    {item.validation}
                </a>
            );
        }

        return item.validation;
    };

    const renderList = () => {
        switch (listStyle) {
            case "csv":
                return (
                    <Fragment>
                        {messages
                            .map(item => renderItem(item))
                            .reduce<Array<string | JSX.Element>>((acc, val) => acc.concat(", ", val), [])
                            .slice(1)}
                    </Fragment>
                );
            case "ol":
                return (
                    <ol>
                        {messages.map(item => (
                            <li key={item.validation}>{renderItem(item)}</li>
                        ))}
                    </ol>
                );
            default:
                return (
                    <ul>
                        {messages.map(item => (
                            <li key={item.validation}>{renderItem(item)}</li>
                        ))}
                    </ul>
                );
        }
    };

    const renderMessages = () => {
        let message = messageTemplate;
        message = message.replaceAll("%c", String(messages.length));
        message = message.replaceAll("%s", messages.length === 1 ? "" : "s");

        let start = 0;
        let end = -1;
        const elements: Array<string | JSX.Element> = [];

        while ((end = message.indexOf("%l", end + 1)) !== -1) {
            elements.push(message.substring(start, end));
            elements.push(renderList());
            start = end + 2;
        }

        elements.push(message.substring(start));

        return elements;
    };

    return (
        <Fragment>
            {shouldRender() && (
                <div className={classNames([className, "validationSummary"])} style={style}>
                    {renderMessages()}
                </div>
            )}
        </Fragment>
    );
}

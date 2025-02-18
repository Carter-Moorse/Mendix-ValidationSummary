/**
 * This file was generated from ValidationDump.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ReferenceValue, ReferenceSetValue } from "mendix";
import { Big } from "big.js";

export type TypeEnum = "attribute" | "reference";

export type ClickActionEnum = "none" | "scrollIntoView" | "focus";

export interface ListenToFieldsType {
    data?: ListValue;
    type: TypeEnum;
    reference?: ReferenceValue | ReferenceSetValue;
    attribute?: EditableValue<Big | any | boolean | Date | string>;
    clickAction: ClickActionEnum;
    actionSelector: string;
}

export interface ListenToFieldsPreviewType {
    data: {} | { caption: string } | { type: string } | null;
    type: TypeEnum;
    reference: string;
    attribute: string;
    clickAction: ClickActionEnum;
    actionSelector: string;
}

export interface ValidationDumpContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    listenToFields: ListenToFieldsType[];
    messageTemplate: string;
}

export interface ValidationDumpPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    listenToFields: ListenToFieldsPreviewType[];
    messageTemplate: string;
}

/**
 * This file was generated from ValidationSummary.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ReferenceValue, ReferenceSetValue } from "mendix";
import { Big } from "big.js";

export type TypeEnum = "attribute" | "reference";

export type ClickActionEnum = "none" | "scrollIntoView" | "focus";

export interface ListenToFieldsType {
    type: TypeEnum;
    reference?: ReferenceValue | ReferenceSetValue;
    data?: ListValue;
    attribute?: EditableValue<Big | any | boolean | Date | string>;
    clickAction: ClickActionEnum;
    actionSelector: string;
}

export type ListStyleEnum = "ul" | "ol" | "csv";

export interface ListenToFieldsPreviewType {
    type: TypeEnum;
    reference: string;
    data: {} | { caption: string } | { type: string } | null;
    attribute: string;
    clickAction: ClickActionEnum;
    actionSelector: string;
}

export interface ValidationSummaryContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    listenToFields: ListenToFieldsType[];
    messageTemplate: string;
    listStyle: ListStyleEnum;
}

export interface ValidationSummaryPreviewProps {
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
    listStyle: ListStyleEnum;
}

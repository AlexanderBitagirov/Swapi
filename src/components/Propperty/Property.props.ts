import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface IProppertyProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    text: string;
    value: string;
}
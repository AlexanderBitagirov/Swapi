import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface IElipseProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
}
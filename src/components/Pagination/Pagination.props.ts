import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface IPaginationProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    previous?: string;
    next?: string;
}
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ICardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    color: "gray" | "white";
    size: "s" | "m" | "l";
    clickable: boolean;
}
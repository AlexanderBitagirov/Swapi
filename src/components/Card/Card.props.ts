import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ICardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
}
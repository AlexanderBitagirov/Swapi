import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    to: string;
    appearance: 'green' | 'orange';
}
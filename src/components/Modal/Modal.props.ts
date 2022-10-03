import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, SetStateAction } from "react";
import { ICharacter } from "../../interfaces/character.interface";

export interface IModalProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    character: ICharacter;
    closeDialog: () => void;
}
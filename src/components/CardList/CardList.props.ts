import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ICharacter } from "../../interfaces/character.interface";

export interface ICardListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    characters: ICharacter[];
}
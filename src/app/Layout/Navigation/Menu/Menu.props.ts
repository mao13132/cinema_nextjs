import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IMenu } from "../MenuItem/MenuItem.props";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    menu: IMenu
};
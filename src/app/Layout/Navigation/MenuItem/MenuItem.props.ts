import { TypeMaterialIconName } from "@/shared/types/icons.types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {

};

export interface IMenuItems {
    icon: TypeMaterialIconName,
    title: string,
    link: string
};

export interface IMenu {
    title: string,
    items: IMenuItems[]
};
import { AdminCreateButtonProps } from "./AdminCreateButton.props";
import styles from './AdminCreateButton.module.css';
import cn from 'classnames';
import { Button } from "../../FormElements/Button/Button";

export const AdminCreateButton = ({ className, ...props }: AdminCreateButtonProps): JSX.Element => {
    return (<Button {...props}>Создать новый</Button>);
};



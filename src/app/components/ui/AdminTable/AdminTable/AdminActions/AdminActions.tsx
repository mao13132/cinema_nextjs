import { AdminActionsProps } from "./AdminActions.props";
import styles from './AdminActions.module.css';
import cn from 'classnames';
import { useRouter } from "next/router";
import { MaterialIcon } from "@/components/ui/MaterialIcon/MaterialIcon";

export const AdminActions = ({ editUrl, revomeHandler, className, ...props }: AdminActionsProps): JSX.Element => {

    const { push } = useRouter();

    return (
        <div className={cn(className, styles['actions'])} {...props}>

            <button className={styles['button']} onClick={() => { push(editUrl) }}>

                <MaterialIcon name='MdEdit' />

            </button>

            <button className={styles['button']} onClick={revomeHandler}>

                <MaterialIcon name='MdClose' />

            </button>

        </div>
    );
};



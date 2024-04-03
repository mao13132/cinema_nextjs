import { Menus } from "Layout/Navigation/Menu/Menu";
import { useAllGenres } from "../usePopularGenres";
import { GenerMenuProps } from "./GenerMenu.props";
import styles from './GenerMenu.module.css';


export const GenerMenu = ({ ...props }: GenerMenuProps): JSX.Element => {

    const { isLoading, data, isSuccess } = useAllGenres()

    if (isSuccess) {
        console.log(`isloading`)
    }

    return (
        <div {...props}>
            {isLoading
                ? <div className={styles['loader']}>Loading...</div>
                : <Menus menu={{ title: 'Popular genres', items: data || [] }} />}
        </div>
    );
};
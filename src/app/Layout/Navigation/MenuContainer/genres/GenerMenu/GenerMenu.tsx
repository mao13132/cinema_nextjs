import { Menus } from "Layout/Navigation/Menu/Menu";
import { useAllGenres } from "../usePopularGenres";
import { GenerMenuProps } from "./GenerMenu.props";
import styles from './GenerMenu.module.css';
import { SkeletonLoader } from "@/components/ui/Skeleton/SkeletonLoader";


export const GenerMenu = ({ ...props }: GenerMenuProps): JSX.Element => {

    const { isLoading, data, isSuccess } = useAllGenres()

    if (isSuccess) {
        console.log(`isloading`)
    }

    return (
        <div {...props}>
            {isLoading
                ? <div className={styles['loader-container']}><SkeletonLoader className={styles['loader']} count={5} /></div>
                : <Menus menu={{ title: 'Popular genres', items: data || [] }} />}
        </div>
    );
};
import cn from 'classnames';
import styles from './SlideArrow.module.css';
import { ISlideArrow } from "./SlideArrow.props";
import { MaterialIcon } from '../../MaterialIcon/MaterialIcon';

export const SlideArrow = ({ clickHandler, variant }: ISlideArrow): JSX.Element => {

    const isLeft = variant === 'left'

    return (
        <button onClick={clickHandler} className={cn(styles['buttons'], {
            [styles['right']]: !isLeft,
            [styles['left']]: isLeft,
        })}>

            <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />

        </button>
    );
};
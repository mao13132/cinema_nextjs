import cn from 'classnames';
import styles from './Slider.module.css';
import { ISlider } from "./Slider.props";
import { useSlider } from './useSlider';
import { SlideArrow } from './SlideArrow/SlideArrow';
import { SlideItem } from './SlideItem/SlideItem';

export const Slider = ({ slides, buttonTitle }: ISlider): JSX.Element => {

    const { handleClick, index, isNext, isPrev, slideIn } = useSlider(slides.length)

    return (
        <div className={styles['slider']}>

            <SlideItem className={styles['item']} slide={slides[index]} buttonTitle={buttonTitle} />

            {isPrev && <SlideArrow variant='left' clickHandler={() => { handleClick('prev') }} />}

            {isNext && <SlideArrow variant='right' clickHandler={() => { handleClick('next') }} />}

        </div>
    );
};
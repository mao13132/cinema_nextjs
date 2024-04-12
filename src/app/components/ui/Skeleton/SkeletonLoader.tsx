import { ISkeleton } from './SkeletonLoader.props';
import styles from './SkeletonLoader.module.css';
import cn from 'classnames';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLoader = ({ className, ...props }: ISkeleton & SkeletonProps): JSX.Element => {
    return (
        <Skeleton {...props}
            baseColor='#1F2125'
            highlightColor='#292A2E'
            className={cn(className, styles['skeleton'])} />
    );
};
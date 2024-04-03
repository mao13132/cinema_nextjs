import { LogoProps } from "./Logo.props";
import styles from './Logo.module.css';
import Link from "next/link";
import Image from 'next/image';
import logoImage from '@/assets/images/logo.svg';
import cn from 'classnames';

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
    return (
        <div className={cn(className, styles['logo'])} {...props}>
            <Link href='/'>
                <Image src={logoImage} alt="Online кинотеатр" width={247} height={34} draggable={false} />
            </Link>
        </div>

    );
};

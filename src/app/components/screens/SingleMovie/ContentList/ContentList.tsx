import { ContentListProps } from "./ContentList.props";
import styles from './ContentList.module.css';
import cn from 'classnames';
import { Fragment } from "react";
import Link from "next/link";

export const ContentList = ({ links, name, ...props }: ContentListProps): JSX.Element => {
    return (
        <div className={styles['list']} {...props}>
            <div className={styles['name']}>{name}</div>
            <div>{links.map((link, idx) => <Fragment key={idx}>

                <Link href={link.link}>
                    {link.title}
                </Link>

                {idx + 1 !== links.length ? ', ' : ''}

            </Fragment>)}</div>

        </div>
    );
};
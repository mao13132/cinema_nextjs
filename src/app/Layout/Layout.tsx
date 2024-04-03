import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { FunctionComponent } from "react";
import { Navigation } from "./Navigation/Navigation";
import { Sidebar } from "./Sidebar/Sidebar";


export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={cn(styles['layout'])}>
            <Navigation className={styles['nav']} />
            <div className={styles['content']}>{children}</div>
            <Sidebar className={styles['sidebar']} />
        </div>
    );
};

/* HOC обёртка */
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

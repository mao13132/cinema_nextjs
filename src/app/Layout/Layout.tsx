import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { FunctionComponent } from "react";
import { Navigation } from "./Navigation/Navigation";
import { Sidebar } from "./Sidebar/Sidebar";

import { QueryClientProvider } from "react-query";
import { queryClient } from "Query/QueryClient";
import { ReactQueryDevtools } from 'react-query/devtools'
import { MyReduxToast } from "Provider/ReduxToast/ReduxToast";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { toastr } from "react-redux-toastr";
import { HeadProveder } from "Provider/HeadProvider/HeadProvider";
import { AuthProvider } from "Provider/AuthProvider/AuthProvider";


export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={cn(styles['layout'])}>
            <Navigation className={styles['nav']} />
            <div className={styles['content']}>{children}</div>
            <Sidebar className={styles['sidebar']} />
        </div>
    );
};

/* HOC обёртка  */
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <HeadProveder>
                <Provider store={store}>

                    <QueryClientProvider client={queryClient}>

                        <MyReduxToast />

                        <Layout>
                            <Component {...props} />
                        </Layout>

                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>

                </Provider>
            </HeadProveder>
        );
    };
};

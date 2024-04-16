import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const ProfilePages: NextPageAuth = () => {
    return (<></>);
}

export default withLayout(ProfilePages);

ProfilePages.isOnlyUser = true;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}
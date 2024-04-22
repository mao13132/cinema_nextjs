import { ActorsList } from "@/components/screens/admin/ActorsList/ActorsList";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const ActorsPage: NextPageAuth = () => {
    return (<ActorsList />);
};

ActorsPage.isOnlyAdmin = true;

export default withLayout(ActorsPage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}
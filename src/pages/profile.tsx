import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

function ProfilePage({ }) {
    return (<></>);
};



export default withLayout(ProfilePage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}
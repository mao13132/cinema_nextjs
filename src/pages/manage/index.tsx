import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

function IndexManagePage({ }) {
    return (<></>);
};



export default withLayout(IndexManagePage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}
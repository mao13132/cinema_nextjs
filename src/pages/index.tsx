import { Home } from "@/components/screens/Home/Home";
import { withLayout } from "Layout/Layout";
import { GetStaticProps } from "next";

function Index({ }) {

  return (<Home />);

}

export default withLayout(Index);


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
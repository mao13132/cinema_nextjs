import { GenreEdit } from "@/components/screens/admin/GenreEdit/GenreEdit";
import { withLayout } from "Layout/Layout";
import { GetStaticProps } from "next";

function GenreEditPage({ }) {

  return (<GenreEdit />);

}

export default withLayout(GenreEditPage);


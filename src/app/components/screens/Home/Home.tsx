import { HomeProps } from "./Home.props";

export const Home = ({ ...props }: HomeProps): JSX.Element => {
    return (
        <div {...props}>
            Home Element
        </div>
    );
};
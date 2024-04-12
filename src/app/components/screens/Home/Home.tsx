import { Heading } from "@/components/ui/Heading/Heading";
import { HomeProps } from "./Home.props";
import styles from './Home.module.css';

export const Home = ({ ...props }: HomeProps): JSX.Element => {
    return (
        <div {...props}>
            <Heading title="Смотреть фильмы Online" className={styles['heading']}>
                Home Element
            </Heading>
        </div>
    );
};
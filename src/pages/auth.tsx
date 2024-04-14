import { Auth } from "@/components/screens/Auth/Auth";
import { withLayout } from "Layout/Layout";

function AuthPage(): JSX.Element {

    return (
        <Auth />
    );
};

export default withLayout(AuthPage);

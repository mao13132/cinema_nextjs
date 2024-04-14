import ReduxToastr from "react-redux-toastr";

export const MyReduxToast = (): JSX.Element => {
    return (
        <ReduxToastr
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            timeOut={4000}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
        />
    );
}
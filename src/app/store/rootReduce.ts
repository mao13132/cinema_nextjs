import { reducer as toastReducer } from 'react-redux-toastr';
import { reducer as userReduce } from './user/user.slice'


export const reducers = {
    user: userReduce,
    toastr: toastReducer,
};

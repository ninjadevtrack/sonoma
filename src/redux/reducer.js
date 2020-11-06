import USERS from 'constants/users';
import * as CONSTANTS from './constants';

const INITIAL_STATE = {
    users: USERS,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        ccNumber: '',
        ccType: '',
        total: 0,
    },
    products: [],
};

function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANTS.LOAD_ALL_USERS:
            return { ...state, users: USERS };
        default:
            return state;
    }
}

export default appReducer;

import * as CONSTANTS from './constants';

// handle users
const loadAllUsers = () => {
    return {
        type: CONSTANTS.LOAD_ALL_USERS,
    };
};

export default {
    loadAllUsers,
};

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
    case CONSTANTS.SEARCH_USER: {
      const searchedData = [];
      USERS.forEach((item) => {
        if (item.cc_number.includes(action.payload)) {
          searchedData.push(item);
        }
      });
      return {
        ...state,
        users: searchedData,
      };
    }
    case CONSTANTS.READ_USER: {
      let searchedData = {};
      USERS.forEach((item) => {
        if (item.cc_number === action.payload) {
          searchedData = { ...item, total: 0 };
        }
      });
      return {
        ...state,
        user: searchedData,
      };
    }

    // handle products
    case CONSTANTS.ADD_PRODUCT: {
      const newProduct = {
        id: state.products.length,
        name: action.name,
        cost: action.cost,
      };
      const userCost = state.user.total + action.cost;
      return {
        ...state,
        user: { ...state.user, total: userCost },
        products: [...state.products, newProduct],
      };
    }
    case CONSTANTS.EDIT_PRODUCT: {
      const { id, name, cost } = action;
      const newProducts = state.products;

      if (id !== -1) {
        newProducts[id] = {
          id,
          name,
          cost,
        };
      };
      let userCost = 0;
      newProducts.forEach(item => {
        userCost += item.cost;
      });
      return {
        ...state,
        user: { ...state.user, total: userCost },
        products: newProducts,
      };
    }
    case CONSTANTS.REMOVE_PRODUCT: {
      const newProducts = [];
      let userCost = 0;
      state.products.forEach(item => {
        if (item.id !== action.payload) {
          newProducts.push(item);
          userCost += item.cost;
        }
      });
      
      return {
        ...state,
        user: { ...state.user, total: userCost },
        products: newProducts,
      };
    }
    default:
      return state;
  }
}

export default appReducer;

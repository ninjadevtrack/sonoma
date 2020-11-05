import * as CONSTANTS from './constants';

// handle users
const loadAllUsers = () => {
  return {
    type: CONSTANTS.LOAD_ALL_USERS,
  }
};

const searchUser = (ccNumber) => {
  return {
    type: CONSTANTS.SEARCH_USER,
    payload: ccNumber,
  }
};

const readUser = (ccNumber) => {
  return {
    type: CONSTANTS.READ_USER,
    payload: ccNumber,
  };
};

// handle products
const addProduct = (name, cost) => {
  return {
    type: CONSTANTS.ADD_PRODUCT,
    name,
    cost,
  };
};

const editProduct = (id, name, cost) => {
  return {
    type: CONSTANTS.EDIT_PRODUCT,
    id,
    name,
    cost,
  };
};

const removeProduct = (ccNumber) => {
  return {
    type: CONSTANTS.REMOVE_PRODUCT,
    payload: ccNumber,
  };
};

export default {
  loadAllUsers,
  searchUser,
  readUser,
  addProduct,
  editProduct,
  removeProduct,
};

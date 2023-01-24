import { v4 as uuidv4 } from 'uuid';

const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS'; // name

const initialState = []; // initial state

// reducers
const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECKSTATUS:
      return [
        ...state, {
          id: uuidv4(),
          text: action.status.text,
        },
      ];
    default:
      return state;
  }
};

// action...
export const checkStatus = (status) => ({
  type: CHECKSTATUS,
  status,
});

export default categoryReducer;

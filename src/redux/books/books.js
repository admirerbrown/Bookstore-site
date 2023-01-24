import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'bookstore/book/ADDBOOK';
const REMOVEBOOK = 'bookstore/book/REMOVEBOOK'; // name

// const initialState = []; // initial State
const initialState = [
  {
    id: uuidv4(),
    author: 'john paul',
    title: 'things fall apart',
  },
  {
    id: uuidv4(),
    author: 'mercy grace',
    title: 'orange is the new black',
  },
  {
    id: uuidv4(),
    author: 'ronalds queen',
    title: "sorcerer's stone",
  },
];

// bookReducer...
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state, {
          id: uuidv4(),
          author: action.book.author,
          title: action.book.title,
        },
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

// actions creators...

export const addBook = (book) => ({
  type: ADDBOOK,
  book, // payload
});

export const removeBook = (book) => ({
  type: REMOVEBOOK,
  book,
});

export default bookReducer;

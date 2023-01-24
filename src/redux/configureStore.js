import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import apiReducer from './apiCalls/booksApi';

const store = configureStore({
  reducer: {
    book: bookReducer, // local database...
    category: categoryReducer,
    bookApi: apiReducer.reducer, // cloud api database...
  },
});

export default store;

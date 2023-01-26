/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action type
const GETBOOKS = 'bookStore/GETBOOKS';
const POSTBOOK = 'bookStore/POSTBOOK';
const DELETEBOOK = 'bookStore/DELETEBOOK';

const APPID = 'GEbaFIVA9xpOl6dFwIfF';

// get action...
const getBooks = createAsyncThunk(GETBOOKS, async () => {
  const endpoint = `/apps/${APPID}/books`;
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
  const response = await axios.get(url);
  const bookList = Object.entries(response.data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });

  return bookList;
});

// post actions
const postBook = createAsyncThunk(POSTBOOK, async (payload, api) => {
  const endpoint = `/apps/${APPID}/books`;
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
  await axios.post(url, payload);

  return api.dispatch(getBooks());
});

// delete action...
const deleteBook = createAsyncThunk(DELETEBOOK,
  async (payload, api) => {
    const endpoint = `/apps/${APPID}/books/${payload.id}`;
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
    await axios.delete(url);

    return api.dispatch(getBooks());
  });

// reducers...
const apiReducer = createSlice({
  name: 'bookApi',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    },
  },
});

export default apiReducer;
export { getBooks, postBook, deleteBook };

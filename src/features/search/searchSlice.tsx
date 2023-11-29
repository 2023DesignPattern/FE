// searchSlice.js
import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchType: 'title',
    searchInput: '',
    searchResult: [],
  },
  reducers: {
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const {setSearchType, setSearchInput, setSearchResult} =
  searchSlice.actions;

export default searchSlice.reducer;

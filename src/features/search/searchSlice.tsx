import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

// 비동기 액션 생성자
export const fetchMusicBySearchType = createAsyncThunk(
  'search/fetchMusicBySearchType',
  async ({
    searchType,
    searchInput,
  }: {
    searchType: string;
    searchInput: string;
  }) => {
    const url = `http://10.210.148.205:8080/api/music/${searchType}?q=${searchInput}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

// 초기 상태
type SearchState = {
  searchType: string;
  searchInput: string;
  searchResult: any[];
};

const initialState: SearchState = {
  searchType: 'title',
  searchInput: '',
  searchResult: [],
};

// 슬라이스 생성
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchMusicBySearchType.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.searchResult = action.payload;
      },
    );
  },
});

export const {setSearchType, setSearchInput} = searchSlice.actions;

export default searchSlice.reducer;

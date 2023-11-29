import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// 비동기 액션 생성자
export const fetchMusic = createAsyncThunk(
  'music/fetchMusic',
  async (chartType: string) => {
    const url =
      chartType === 'popular'
        ? 'http://10.210.148.205:8080/api/music/popular'
        : 'http://10.210.148.205:8080/api/music';
    const response = await fetch(url);
    const json = await response.json();
    return json;
  },
);

// 초기 상태
type MusicState = {
  data: any[];
  isLoaded: boolean;
  chartType: string;
};

const initialState: MusicState = {
  data: [],
  isLoaded: false,
  chartType: 'popular',
};

// 슬라이스 생성
const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setChartType: (state, action: PayloadAction<string>) => {
      state.chartType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMusic.pending, state => {
        state.isLoaded = false;
      })
      .addCase(fetchMusic.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.data = action.payload;
        state.isLoaded = true;
      });
  },
});

export const {setChartType} = musicSlice.actions;

export default musicSlice.reducer;

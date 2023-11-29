import {configureStore} from '@reduxjs/toolkit';
import musicReducer from '../features/music/musicSlice';
import searchReducer from '../features/search/searchSlice';

const store = configureStore({
  reducer: {
    music: musicReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

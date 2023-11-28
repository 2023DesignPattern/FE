import {configureStore} from '@reduxjs/toolkit';
import musicReducer from '../features/music/musicSlice';

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// src/store.ts

import { createSlice, configureStore } from '@reduxjs/toolkit';

interface Song {
  title: string;
  duration: string;
}

interface Playlist {
  songs: Song[];
}

const initialState: Playlist = {
  songs: [
    { title: 'Tornado Of Souls - Megadeth', duration: '3:45' },
    { title: 'Black Hole Sun - Soundgarden', duration: '4:12' },
    { title: 'No More Sorrow - Linkin Park', duration: '2:57' },
    { title: 'The New - Interpol', duration: '2:57' },
    { title: 'Love Will Tear Us Apart - Joy Division', duration: '2:57' },
    { title: "I Know It's Over - The Smiths", duration: '2:57' },
    { title: 'Sometimes I Feel Like Screaming - Deep Purple', duration: '2:57' },
  ],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    playlist: playlistSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

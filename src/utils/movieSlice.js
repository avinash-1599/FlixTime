import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        movieTrailer: [],
      },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
         // Add a new reducer for movie trailer
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;
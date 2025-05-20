import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector((state) => state.movies);

    if (!movies) return;

    return (
        <div className='bg-black'>
            <div className='-mt-30 pl-12 relative z-20'>
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
            <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
            </div>
        </div>
    );
}

export default SecondaryContainer;
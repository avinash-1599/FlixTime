import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies';
import useUpcomingMovies from '../utils/hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;
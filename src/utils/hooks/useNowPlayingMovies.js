import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../movieSlice';
import React, { useEffect } from 'react';


  const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("data", data);
            dispatch(addNowPlayingMovies(data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;
import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../movieSlice';
import React, { useEffect } from 'react';


  const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("data", data);
            dispatch(addPopularMovies(data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }

  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies;
import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../movieSlice';
import React, { useEffect } from 'react';


  const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("data", data);
            dispatch(addUpcomingMovies(data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}
export default useUpcomingMovies;
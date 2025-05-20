import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../movieSlice';
import React, { useEffect } from 'react';


  const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("data", data);
            dispatch(addTopRatedMovies(data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}
export default useTopRatedMovies;
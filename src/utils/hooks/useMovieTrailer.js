import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../movieSlice';
import React, { useEffect } from 'react';


  const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const fetchMovieTrailer = async (movieId) => {

        if (!movieId) return;

        const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

        try {
            const data = await fetch(API_URL, API_OPTIONS);
            const json = await data.json();
            
            const filteredData = json.results.filter(video => video.type === 'Trailer');
            const trailer = filteredData.length ? filteredData[0] : json.results[0];

            dispatch(addMovieTrailer(trailer));
            
        } catch (error) {
            console.error("Error fetching movie trailer:", error);
        }
    }

  useEffect(() => {
    fetchMovieTrailer(movieId);
  }, []);
}
export default useMovieTrailer;
import React from 'react';
import useMovieTrailer from '../utils/hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {

    // fetch movie trailer
    useMovieTrailer(movieId);

    const trailer = useSelector((state) => state.movies?.movieTrailer);
    const trailerKey = trailer?.key;

    return (
        <div className="video-background w-screen">
            {trailerKey && (
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerKey}?si=3CxJjB5NzhoM75py&autoplay=1&mute=1&loop=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
            )}
        </div>
    );
    }

export default VideoBackground;
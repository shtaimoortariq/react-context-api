import React, {useContext} from 'react';
import {Movie} from './Movie';
import {MovieContext} from './MovieContext';

export const MovieList = () => {

    const [moviesList] = useContext(MovieContext)    
    return (
        <div>
            {moviesList.map(movie => (
                // <p>{movie.name}</p>
                <Movie name={movie.name}/>
            ))}
        </div>
    )
}

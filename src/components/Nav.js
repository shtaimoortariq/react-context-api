import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

export const Nav = () => {

    const [moviesList] = useContext(MovieContext);
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'grey', color: 'white'}}>
            <p>Movie App</p>
            <p>No of movies: {moviesList.length}</p>

        </div>
    )
}

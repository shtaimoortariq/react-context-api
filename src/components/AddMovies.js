import React, {useState,useContext} from 'react';
import {MovieContext} from './MovieContext';

export const AddMovies = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [moviesList, setMovies] = useContext(MovieContext);

    const submitMovie = e => {
        e.preventDefault();
        console.log(name, price);
        setMovies([...moviesList, {name, cost: price}]);
    }
    
    return (
        <form onSubmit={submitMovie}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

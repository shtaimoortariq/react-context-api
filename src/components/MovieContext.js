import React, {useState, createContext} from 'react'
export const MovieContext = createContext();

export const MovieProvider = (props) => {


    const [moviesList, setMovies] = useState([
        {
            name: "Harray Potter",
            cost: "$10",
            id: 1
        },
        {
            name: "Inception",
            cost: "$15",
            id: 2
        },
        {
            name: "Spider Man",
            cost: "$8",
            id: 3
        }
    ])


    return (
        <div>
            <MovieContext.Provider value={[moviesList, setMovies]}>{props.children}</MovieContext.Provider>
        </div>
    )
}

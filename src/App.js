import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieList } from './components/MovieList';
import { Nav } from './components/Nav';
import {MovieProvider} from './components/MovieContext';
import { AddMovies } from './components/AddMovies';



function App() {
  return (
    <MovieProvider> 
    <div className="App">
      <Nav />
      <AddMovies />
      <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;

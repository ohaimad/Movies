import React, { useState, useEffect } from 'react';
import './App.css';
import { SearchImage } from './Search';
import Moviecard from './Moviecard';

const API_URL = 'http://www.omdbapi.com?apikey=41c8189a';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Initially search for 'Spiderman'
    searchMovies('Spiderman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='app'>
      <h1>Watch</h1>
      <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        />
        <button className='btn' onClick={handleSearch}><SearchImage /></button>
      </div>

      {movies?.length > 0 
      ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )
      : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;

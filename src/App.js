import React , { useState, useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=854c4f4f';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Wonder Woman');
     
  }, [])

  return (
   <div className ='app'>
    <h1>HuraLand</h1>

    <div className ="search">
      <input
      placeholder='Search for movies'
      value={searchTerm} 
      onChange= {(e) => setSearchTerm(e.target.value)}
      />
      <img
      src={SearchIcon}
      alt="Search"
      onClick={()=> searchMovies(searchTerm)}
      />
    </div>

     {
      movies?.length > 0 
      ? (
          <div className="container">
           {movies.map((movie)=> (
             <MovieCard movie ={movie} />
           ) )}
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )} 
    </div>
  );
}

export default App;

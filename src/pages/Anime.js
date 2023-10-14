import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../App.css';
import SearchIcon from '../components/search.svg';
import Navbar from "../components/Navbar";

const API_URL = 'https://www.omdbapi.com/?apikey=b059fc30';

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchAnime = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setAnime(data.Search);
  }

  useEffect(() => {
    searchAnime('');
  }, []);

  return (
    <div className='app'>
      <Navbar />

      <div className='search'>
        <input
          placeholder='Search for Anime'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='SearchIcon'
          onClick={() => searchAnime(searchTerm)}
        />
      </div>

      {
        anime?.length > 0 ?
          (
            <div className='container'>
              {
                anime.map((anime) => (<MovieCard movie={anime} key={anime.imdbID} />))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No Anime found</h2>
            </div>
          )
      }

    </div>
  );
}

export default Anime;

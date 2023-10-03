import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../App.css';
import SearchIcon from '../components/search.svg';
import Navbar from "../components/Navbar";

const API_URL = 'https://myanimelist.p.rapidapi.com/anime/search/';

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchAnime = async (searchTerm) => {
    const url = `${API_URL}&s=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4fd8498ed9mshade9443641f012ap157ec1jsn58a7728fcc35',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      // You can parse the result as needed and set it in the state.
    } catch (error) {
      console.error(error);
    }
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

      {/* Render anime data here */}
    </div>
  );
}

export default Anime;

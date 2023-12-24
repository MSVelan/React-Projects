import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from "./components/RemoveFavourites";
// import MovieInfoDisplay from "./components/MovieInfoDisplay";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  // const obj = JSON.parse(localStorage.getItem('react-movie-app-favourites')); 
  // setFavourites(obj);
  


  const getMovieRequest = async (searchValue) =>{
    const url = `https://www.omdbapi.com/?apikey=82e0cf85&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem('react-movie-app-favourites');
    if ( data !== null ) setFavourites(JSON.parse(data));
  }, []);

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites",JSON.stringify(items));
  }

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const displayMovieInfo = (movie)=>{
    <div>
            <h1>movie.Title</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <h1>movie.Type</h1>
            <h1>movie.Year</h1>
            <h1>movie.imdbID</h1>
        </div>
  }

  return (
    <div className="container-fluid movie-app">

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
          movies = {movies}
          handleFavouritesClick = {AddFavouriteMovie}
          favouriteComponent = {AddFavourites}
          displayInfo = {displayMovieInfo}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>

      <div className="row">
        <MovieList 
          movies = {favourites}
          handleFavouritesClick = {removeFavouriteMovie}
          favouriteComponent = {RemoveFavourites}
          displayInfo = {displayMovieInfo}
        />
      </div>
    </div>
  );
}

export default App;

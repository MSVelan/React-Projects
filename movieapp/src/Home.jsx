import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from "./components/RemoveFavourites";
import './App.css';

function Home() {
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
            />
        </div>
        </div>
    );
}

export default Home
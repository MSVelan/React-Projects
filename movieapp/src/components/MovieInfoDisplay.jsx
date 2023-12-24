import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDetail from "./VideoDetail";
import { Grid } from '@mui/material';
import axios from 'axios';

const MovieInfoDisplay = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  const getMovie = async (id) => {
    const url = `https://www.omdbapi.com/?apikey=82e0cf85&i=${id}`;
    const response = await axios.get(url);
    return response.data;
  };
  

  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 1,
      key: "AIzaSyDGq7AcPKJsFwHQpOrdLhxqw8YC1VtDK3Y",
    },
  });

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const source = axios.CancelToken.source();
  
    async function fetchVideo(searchItem) {
      try {
        const { data: { items: videos } } = await youtube.get("/search", {
          params: {
            q: searchItem,
          },
          cancelToken: source.token, // Provide the cancel token
        });
        setVideo(videos);
      } catch (error) {
        if (axios.isCancel(error)) {
          // Request was canceled, ignore the error
          return;
        }
        console.error("Error fetching videos:", error);
      }
    }
  
    if (movie) {
      const searchItem = movie.Title;
      fetchVideo(searchItem);
    }
  
    return () => {
      // Cancel the ongoing API request when the component unmounts
      source.cancel("Component unmounted");
    };
  }, [movie, youtube]);
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 className="movie-header">{movie.Title}</h1>
      </Grid>
      <Grid item xs={5}>
        <div className="movie-info">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movieDetails">
          <p>IMDB ID: {movie.imdbID}</p>
          <p>Type: {movie.Type}</p>
          <footer>Released in {movie.Year}</footer>
        </div>
      </Grid>
      <Grid item xs={7}>
        <VideoDetail video={video} />
      </Grid>
    </Grid>
  );
};

export default MovieInfoDisplay;

//AIzaSyCcHVgKaOJLshsS049oW6p4dCG6EfWTbgU
//AIzaSyATch5YGEBoUQnfhP_lPW4M0SIivF_r9Sg
//AIzaSyDGq7AcPKJsFwHQpOrdLhxqw8YC1VtDK3Y
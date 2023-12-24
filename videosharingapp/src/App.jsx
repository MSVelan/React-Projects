import { useState, useEffect } from 'react';
import {Grid} from '@mui/material';
import youtube from './api/youtube';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id:{}, snippet:{}});

  useEffect(() => {
  }, [selectedVideo]);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  async function handleSubmit(searchItem){
    const {data:{ items: videos}} = await youtube.get("search",{
      params:{
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCcHVgKaOJLshsS049oW6p4dCG6EfWTbgU",
        q: searchItem,
      }
    });
    setVideos(videos);
  }

  return (
    <>
      <Grid style={{justifyContent: 'center'}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit = {handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App;

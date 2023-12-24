import React from 'react';
import { Grid } from '@mui/material';
import VideoItem from './VideoItem';
const VideoList = ({videos, onVideoSelect})=>{
    const listOfVideos = videos.map(video=>(
        <VideoItem 
            onVideoSelect={onVideoSelect}
            key={video.id.videoId ? video.id.videoId : video.id.playlistId}
            video={video}
            isFirstVideo = {(video.id.videoId && videos[0].id.videoId && video.id.videoId === videos[0].id.videoId) || (video.id.playlistId && videos[0].id.playlistId && video.id.playlistId === videos[0].id.playlistId)}
        />
    ))
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;
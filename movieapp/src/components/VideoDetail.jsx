import { Paper, Typography } from "@mui/material";
import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video || !video.snippet || !video.snippet.title) {
        return <div>Loading...</div>;
    }
    console.log(video)
  const { id: videoID, snippet: { title, channelTitle, description } } = video;
  const isPlaylistVideo = videoID.playlistId ? 1 : 0;
  let videoSrc = "";

  if (isPlaylistVideo) {
    videoSrc = `https://www.youtube.com/embed/videoseries?list=${videoID.playlistId}`;
  } else {
    videoSrc = `https://www.youtube.com/embed/${videoID.videoId}`;
  }

  return (
    <>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          src={videoSrc}
          height={"100%"}
          width={"100%"}
          title="Video Player"
          allowFullScreen
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {description}
        </Typography>
      </Paper>
    </>
  );
}

export default VideoDetail;

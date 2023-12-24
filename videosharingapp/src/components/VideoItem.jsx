import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';

const VideoItem = ({onVideoSelect, video, isFirstVideo})=>{
    let pt = "20px";
    if(isFirstVideo){
        pt = "80px";
    }else{
        pt = "20px";
    }
    return (
        <Grid item xs={12} style={{paddingTop:pt}}>
            <Paper style={{display: "flex", alignItems: "center", cursor: "pointer", flexDirection: "column", marginBottom: "25px"}} onClick={()=>onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{marginRight:"20px"}}/>
                <Typography variant='subtitle1'>
                    <b>
                        {video.snippet.title}
                    </b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
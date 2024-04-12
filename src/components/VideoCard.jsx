import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants.';

const VideoCard = ({videoDetail : {id: {videoId}, snippet}
}) => {
  // console.log(snippet)
  return (
    <Card sx={{width: {md: '280px', xs: '312px', sx: '200px', lg: '320px'}, borderRadius: '10px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 370, height: 200}} />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '80px',}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{fontSize: 15, color: 'gray', ml:'10px'}} />
            </Typography> 
          </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard

import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction}) => {

  if(!videos?.length) return 'Loading...';
  return (
    <Stack  direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} marginRight="4px"
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{color: 'white'}}>
          {item.id.videoId && <VideoCard videoDetail={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos

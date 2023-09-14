import React from 'react'
import { Stack,Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videocard from './Videocard'


const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction="row"  flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos?.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId &&  <Videocard video={item} /> }
        {item.id.channelId &&  <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Videos
import React from 'react'
import {Box} from '@mui/material'
function Post(props){
    
  return (
    <Box>
        <h1>{props.title}</h1>
        <p>{props.content}</p>    
    </Box>
  )
}

export default Post;
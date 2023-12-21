import React from 'react'
import { Box } from '@mui/material'
import Chess from './Chess'
const App = () => {
  return (
    <Box 
      display='flex' 
      height='100vh' 
      width='100vw' 
      alignItems={'center'} 
      justifyContent={'center'}>
      <Chess />
    </Box>
  )
}

export default App

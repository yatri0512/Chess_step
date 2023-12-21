import React from 'react'
import {Box} from '@mui/material'
import ChessBoard from './ChessBoard/ChessBoard'
import Rows from './Rows/Rows'
import Files from './Files/Files'
const Chess = () => {
  return (
    <Box display='flex'>
      <Rows />
      <Box>   
        <Files />
        <ChessBoard />
      </Box>
    </Box> 
  )
}

export default Chess

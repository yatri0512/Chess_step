import React from 'react'
import bishop from '../Assets/bishop.png'
import {Box} from '@mui/material';
import { getOptionsFromDirections } from "../ChessBoard/ChessBoard";

export function bishopMoves(file, row, board) {
  const directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  return getOptionsFromDirections(file, row, directions, board);
}
const Bishop = () => {
  return (
    <Box component='img' src={bishop} alt='' sx={{width:'90%',height:'90%'}}/>
  )
}

export default Bishop

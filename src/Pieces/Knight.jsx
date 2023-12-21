import React from 'react'
import knight from '../Assets/knight.png'
import { getOptionsFromMoves } from "../ChessBoard/ChessBoard";
import {Box} from '@mui/material'
export function knightMoves(file, row, board) {
  const moves = [
    [-2, -1],
    [-1, -2],
    [2, -1],
    [-1, 2],
    [1, -2],
    [-2, 1],
    [1, 2],
    [2, 1],
  ];
  return getOptionsFromMoves(file, row, moves, board);
}

const Knight = () => {
  return (
    <Box component='img' src={knight} alt='' sx={{width:'90%',height:'90%'}}/>
  )
}

export default Knight

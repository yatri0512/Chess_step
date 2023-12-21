import React from 'react'
import king from '../Assets/King.png'
import {Box} from '@mui/material';
import { getOptionsFromMoves } from "../ChessBoard/ChessBoard";
export function kingMoves(file, row, board) {
    const moves = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    return getOptionsFromMoves(file, row, moves, board);
  }
  
const King = () => {
  return (
    <Box component='img' src={king} alt='' sx={{width:'90%',height:'90%'}}/>
  )
}

export default King

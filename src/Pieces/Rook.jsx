import { getOptionsFromDirections } from "../ChessBoard/ChessBoard";
import { Box } from "@mui/material";
import rook from '../Assets/Rook.png'
export function rookMoves(file, row, board) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  return getOptionsFromDirections(file, row, directions, board);
}

export default function Rook() {
  return (
    <Box component='img' src={rook} alt='' sx={{width:'90%',height:'90%'}}/>
  );
}

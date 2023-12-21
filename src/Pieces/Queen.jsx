import React from "react";
import queen from "../Assets/Queen.png";
import { Box } from "@mui/material";
import { getOptionsFromDirections } from "../ChessBoard/ChessBoard";
export function queenMoves(file, row, board) {
   const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
   ];
   return getOptionsFromDirections(
      file,
      row,
      directions,
      board
   );
}

const Queen = () => {
   return (
      <Box
         component="img"
         src={queen}
         alt=""
         sx={{ width: "90%", height: "90%" }}
      />
   );
};

export default Queen;

import React, { useState , useEffect} from "react";
import { Box } from "@mui/material";
import Piece from "./Piece";
import styled from "styled-components";
import { GAME_START, MOVES, PIECES } from "../Pieces";
const Squ = styled.div`
   height: 60px;
   width: 60px;
   border: 1px solid black;
  background: ${(props) => {
    if (props.isAttack) return "#FF8C7C";
    if (props.isOption) return "#AFEEEE";
  }};
  @media (max-width: 450px){
   height: 35px;
   width: 35px;
};
`;
export function identifyPiece(piece) {
   if (!piece) return null;
   const [type] = piece;
   return { type: PIECES[type] };
}

export function findPositionFromMove(file, row, move) {
   const nextFile = String.fromCharCode(
      file.charCodeAt(0) + move[0]
   );
   const nextRow = row + move[1];
   return [nextFile, nextRow];
}

export function getOptionsFromMoves(
   file,
   row,
   moves,
   board
) {
   const piece = identifyPiece(board[file + row]);
   const options = [];
   moves.forEach((move) => {
      const newPosition = findPositionFromMove(
         file,
         row,
         move
      ).join("");
      const targetPiece = identifyPiece(board[newPosition]);
      if (targetPiece) {
         if (targetPiece === piece) return;
      }
      options.push(newPosition);
   });
   return options;
}

export function getOptionsFromDirections(
   file,
   row,
   directions,
   board
) {
   const piece = identifyPiece(board[file + row]);
   const options = [];
   function findPositions(direction) {
      let [f, r] = findPositionFromMove(
         file,
         row,
         direction
      );
      let pos = f + r;
      while (validPosition(pos)) {
         const targetPiece = identifyPiece(board[pos]);
         if (targetPiece) {
            if (targetPiece !== piece) {
               options.push(pos);
            }
            break;
         }
         options.push(pos);
         [f, r] = findPositionFromMove(f, r, direction);
         pos = f + r;
      }
   }
   for (const direction of directions)
      findPositions(direction);
   return options;
}
export function validPosition(pos) {
   let [file, row] = pos;
   row = parseInt(row, 10);
   return rows.includes(row) && files.includes(file);
}
function isAttack(piece) {
   if (piece) return true;
}

function isTurn(piece) {
   if (piece) return true;
}
const rows = [0, 1, 2, 3, 4, 5, 6, 7];
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ChessBoard = () => {
   const [options, setOptions] = useState([]);
   const [selected, setSelected] = useState();
   const [board, setBoard] = useState(GAME_START);
   useEffect(() => {
      if (!selected) return setOptions([]);
      const piece = identifyPiece(board[selected]);
      let [file, row] = selected;
      row = parseInt(row, 10);
      let options = MOVES[piece.type](file, row, board);
      setOptions(options);
   }, [selected, board]);
   function moveHere(key) {
      if (!selected) return;
      if (!options.includes(key)) return;
      const updatedBoard = {
         ...board,
         [selected]: null,
         [key]: board[selected],
      };
      setBoard(updatedBoard);
      setSelected();
   }
   return (
      <Box style={{ border: "2px solid black" }}>
         {rows.map((r, i) => {
            return (
               <Box display="flex" key={r}>
                  {files.map((f, i) => {
                     const key = f + r;
                     const piece = identifyPiece(
                        board[key]
                     );
                     return (
                        <Squ
                           key={key}
                           isOption={options.includes(key)}
                           isAttack={
                              options.includes(key) &&
                              isAttack(piece)
                           }
                           onClick={() => moveHere(key)}>
                           {piece && (
                              <Piece
                                 {...piece}
                                 {...(isTurn(piece)
                                    ? {
                                         selected:
                                            key ===
                                            selected,
                                         select: () =>
                                            setSelected(
                                               selected ===
                                                  key
                                                  ? null
                                                  : key
                                            ),
                                      }
                                    : {})}
                              />
                           )}
                        </Squ>
                     );
                  })}
               </Box>
            );
         })}
      </Box>
   );
};

export default ChessBoard;
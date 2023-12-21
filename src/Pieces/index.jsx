import { bishopMoves } from "./Bishop";
import { knightMoves } from "./Knight";
import { rookMoves } from "./Rook";
import { kingMoves } from "./King";
import { queenMoves } from "./Queen"
export const MOVES = {
  BISHOP: bishopMoves,
  KNIGHT: knightMoves,
  ROOK: rookMoves,
  KING: kingMoves,
  QUEEN: queenMoves
};

export const PIECES = {
  K: "KNIGHT",
  B: "BISHOP",
  R: "ROOK",
  I: "KING",
  Q: "QUEEN"
};

export const GAME_START = {
  f7: "K",
  g0: "B",
  a0: "R", 
  b7: "I",
  d0: "Q"
};

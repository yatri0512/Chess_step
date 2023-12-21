import React from "react";
import Bishop from "../Pieces/Bishop";
import Knight from "../Pieces/Knight";
import Rook from "../Pieces/Rook";
import King from "../Pieces/King";
import Queen from "../Pieces/Queen";
import styled from "styled-components";
const Square = styled.div`
  background: ${(props) => (props.selected ? "#F5DE3B" : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%
`;

const Piece = ({type, select, selected}) => {
   return (
      <Square
         selected={selected} onClick={select}>
         {type === "KNIGHT" && <Knight />}
         {type === "BISHOP" && <Bishop />}
         {type === "ROOK" && <Rook />}
         {type === "KING" && <King />}
         {type === "QUEEN" && <Queen />}
      </Square>
   );
};

export default Piece;

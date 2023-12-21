import React from "react";
import { Box } from "@mui/material";
const Rows = () => {
   const rows = [0, 1, 2, 3, 4, 5, 6, 7];
   return (
      <Box>
         <Box
            height="20px"
            width="20px"
            sx={{
               "@media (max-width: 450px)": {
                  height: "20px",
                  width: "20px",
               },
            }}></Box>
         {rows.map((r) => {
            return (
               <Box
                  height="32px"
                  width="20px"
                  textAlign={"center"}
                  paddingTop={"29px"}
                  sx={{
                     "@media (max-width: 450px)": {
                        height: "26px",
                        paddingTop: "8px",
                        width: "20px",
                        fontSize: "10px",
                     },
                  }}>
                  {r}
               </Box>
            );
         })}
      </Box>
   );
};

export default Rows;

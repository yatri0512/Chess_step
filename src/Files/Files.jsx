import React from "react";
import { Box } from "@mui/material";
const Files = () => {
   const files = [0, 1, 2, 3, 4, 5, 6, 7];
   return (
      <Box display={"flex"} alignItem={'center'}>
         {files.map((f) => {
            return (
               <Box
                  width="61px"
                  textAlign="center"
                  justifyContent={"center"}
                  sx={{
                     "@media (max-width: 450px)": {
                        width: "37px",
                        fontSize: "10px",
                     },
                  }}>
                  {f}
               </Box>
            );
         })}
      </Box>
   );
};

export default Files;

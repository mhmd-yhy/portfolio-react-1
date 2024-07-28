import React from "react";
/* Material UI */
import {Box, Typography} from "@mui/material";
export default function NotFoundPage() {
  return (
    <section>
      <Box style={{height: "calc(100vh - 212px)"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box bgcolor={"var(--primaryBackground)"} p={"80px"} borderRadius={"8px"}>
          <Typography color={"var(--greyDark)"}>404</Typography>
          <Typography color={"var(--greyDark)"}>PAGE NOT FOUND</Typography>
        </Box>
      </Box>
    </section>
  );
}

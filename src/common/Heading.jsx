import React from "react";
import {Typography} from "@mui/material";

export default function Heading({title}) {
  return (
    <Typography color={"var(--primaryColor)"} mb={"20px"} component={"h2"} variant="h3" data-aos="fade-down">
      {title}
    </Typography>
  );
}

import {Box} from "@mui/material";
import React from "react";
import {social} from "../data/dummydata";
export default function Footer() {
  return (
    <section style={{backgroundColor: "var(--primaryBackground)"}}>
      <Box className="container">
        {social.map((value, i) => {
          return (
            <i key={i} style={{marginLeft: "10px", cursor: "pointer", color: "var(--primaryColor)"}}>
              {value.icon}
            </i>
          );
        })}
      </Box>
    </section>
  );
}

import React from "react";
import {home} from "../data/dummydata";
import MyButton from "../common/MyButton";
import Typewriter from "typewriter-effect";
/* Material UI */
import {Box, Typography} from "@mui/material";
export default function Landing() {
  return (
    <section
      className="background-home"
      style={{display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 64px)"}}
    >
      {home.map((val, i) => {
        return (
          <Box key={i} className="container" sx={{textAlign: "center"}}>
            <Typography component="h1" sx={{fontWeight: "400"}}>
              {val.text}
            </Typography>
            <Typography component="h1" sx={{color: "var(--primaryColor)", fontSize: "32px", fontWeight: "800"}}>
              <Typewriter
                options={{
                  strings: [val.name, val.post, val.design],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography
              component="p"
              variant="body2"
              letterSpacing={1}
              lineHeight={2}
              m={"auto"}
              mb={"20px"}
              color={"var(--sliver)"}
              sx={{maxWidth: "700px"}}
            >
              {val.desc}
            </Typography>
            <MyButton text="Download CV" variant="outlined" color="var(--primaryColor)" fontSize="18px" />
          </Box>
        );
      })}
    </section>
  );
}

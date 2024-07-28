import React from "react";
import {about} from "../data/dummydata";
import Heading from "../common/Heading";
import MyButton from "../common/MyButton";
/* Material UI */
import {Box, Typography} from "@mui/material";
export default function About() {
  return (
    <section style={{textAlign: "start"}}>
      {about.map((value, i) => {
        return (
          <Box
            key={i}
            className="container about-boxes"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              height: {xs: "auto", md: "90vh"},
            }}
          >
            <Box component={"div"}>
              <img src={value.cover} alt="images" data-aos="fade-down-right" />
            </Box>
            <Box component={"div"} data-aos="fade-down-left">
              <Heading title={"About Me"} />
              <Typography component={"p"} color={"var(--sliver)"} mb={"20px"}>
                {value.desc}
              </Typography>
              <Typography component={"p"} color={"var(--sliver)"} mb={"20px"}>
                {value.desc1}
              </Typography>
              <Box component={"div"}>
                <MyButton
                  text="Download CV"
                  variant="contained"
                  color="var(--white)"
                  backgroundColor="var(--primaryColor)"
                />
                <MyButton
                  text="Download CV"
                  variant="outlined"
                  color="var(--primaryColor)"
                  backgroundColor="transparent"
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </section>
  );
}

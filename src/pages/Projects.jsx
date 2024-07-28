import React from "react";
import {project} from "../data/dummydata";
/* Material UI */
import {Box, Card, Typography} from "@mui/material";
export default function Projects() {
  return (
    <section className="background-projects">
      <Box className="container grid-4 ">
        {project.map((value, i) => {
          return (
            <Card key={i}
              sx={{bgcolor: "transparent", boxShadow: "none", p: "20px", textAlign: "center", mt: "15px"}}
              data-aos="zoom-out-up"
            >
              <Typography gutterBottom color={"var(--white)"} variant="h3">
                {value.icon}
              </Typography>

              <Typography gutterBottom color={"var(--primaryColor)"} fontWeight={"600"} component={"h2"} variant="h2">
                {value.num}
              </Typography>

              <Typography gutterBottom variant="body2" color={"var(--white)"}>
                {value.title}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </section>
  );
}

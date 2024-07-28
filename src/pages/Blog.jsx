import React from "react";
import {blog} from "../data/dummydata";
/* Material UI */
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Heading from "../common/Heading";
export default function Blog() {
  return (
    <section style={{textAlign: "center"}}>
      <Heading title={"Blog"} />
      <Box className="container grid-3" textAlign={"start"}>
        {blog.map((value, i) => {
          return (
            <Card key={i} data-aos="flip-up">
              <CardMedia component="img" alt="green iguana" height="250" image={value.cover} />
              <CardContent sx={{bgcolor: "var(--primaryBackground)"}}>
                <Typography gutterBottom variant="h6" color={"var(--white)"}>
                  {value.title}
                </Typography>
                <Typography mb={2} variant="body1" color={"var(--primaryColor)"}>
                  {value.date}
                </Typography>
                <Typography gutterBottom variant="body2" color={"var(--white)"}>
                  {value.desc}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </section>
  );
}

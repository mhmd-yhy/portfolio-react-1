import React from "react";
import {services} from "../data/dummydata";
import Heading from "../common/Heading";
/* Material UI */
import {Box, Card, Typography} from "@mui/material";
export default function Services() {
  return (
    <section className="" style={{textAlign: "center"}}>
      <Heading title={"services"} />
      <Box component={"div"} className="grid-3 container">
        {services.map((value, i) => {
          return (
            <Card
              key={i}
              sx={{bgcolor: "var(--primaryBackground)", p: "20px", textAlign: "start", mt: "15px"}}
              data-aos="flip-up"
            >
              <Typography gutterBottom color={"var(--primaryColor)"} variant="h3">
                {value.icon}
              </Typography>

              <Typography gutterBottom color={"var(--white)"} component={"h3"} variant="h6">
                {value.title}
              </Typography>

              <Typography gutterBottom variant="body2" color={"var(--sliver)"}>
                {value.desc}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </section>
  );
}

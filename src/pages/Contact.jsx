import React from "react";
import Heading from "../common/Heading";
import {contact} from "../data/dummydata";
/* Material UI */
import {Box, Typography} from "@mui/material";
export default function Contact() {
  const styleInput = {
    Padding: "10px",
    backgroundColor: "var(--white)",
  };
  return (
    <section>
      <Box className="container">
        <Heading title={"Keep In Touch"} />
        <Box mt={5} sx={{display: "flex", flexWrap: {xs: "wrap", md: "nowrap"}}}>
          <form style={{flexGrow: "1"}}>
            <Box sx={{display: "flex", gap: "10px"}}>
              <input data-aos="flip-down" type="text" placeholder="Name" style={styleInput} />
              <input data-aos="flip-down" type="email" placeholder="Email" style={styleInput} />
            </Box>
            <input data-aos="flip-down" type="text" placeholder="Subject" style={styleInput} />
            <textarea data-aos="flip-down" rows={"10"}></textarea>
            <input type="submit" value={"Submit"} style={styleInput} data-aos="fade-up" data-aos-duration="1500" />
          </form>
          <Box sx={{textAlign: {xs: "center", md: "start"}, m: {xs: "0 auto", md: "0 20px"}}}>
            {contact.map((value, i) => {
              return (
                <Box key={i} mb={3} data-aos="fade-up-left">
                  <i style={{marginBottom: "10px"}}>{value.icon}</i>
                  <Typography color={"var(--sliver)"} mb={1}>
                    {value.text1}
                  </Typography>
                  <Typography color={"var(--sliver)"} mb={1}>
                    {value.text2}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </section>
  );
}

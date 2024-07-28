import React from "react";
import {testimonials} from "../data/dummydata";
/* Slider */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* Material UI */
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import {Box, Typography} from "@mui/material";
export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="background-testimonials" style={{marginBottom: "40px"}}>
      <Box className="container">
        <Slider {...settings}>
          {testimonials.map((value, i) => {
            return (
              <Box mb={5} key={i}>
                <i
                  style={{display: "inline-block", padding: "20px", backgroundColor: "var(--white)"}}
                  data-aos="fade-left"
                >
                  <FormatQuoteOutlinedIcon sx={{color: "var(--primaryColor)"}} />
                </i>
                <Typography
                  sx={{maxWidth: "85%", m: "40px auto"}}
                  textAlign={"center"}
                  mt={5}
                  mb={4}
                  data-aos="fade-right"
                >
                  {value.text}
                </Typography>
                <div
                  className="img"
                  style={{
                    border: "3px solid var(--primaryColor)",
                    borderRadius: "50%",
                    display: "inline-block",
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    padding: "8%",
                  }}
                  data-aos="fade-left"
                >
                  <img
                    src={value.image}
                    style={{
                      borderRadius: "50%",
                      width: "92%",
                      height: "92%",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    alt=""
                  />
                </div>
                <Typography mb={2} data-aos="fade-up">
                  {value.name}
                </Typography>
                <Typography color={"var(--primaryColor)"} data-aos="fade-down">
                  {value.post}
                </Typography>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </section>
  );
}

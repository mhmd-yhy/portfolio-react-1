import React, {useState} from "react";
import Heading from "../common/Heading";
import {portfolio} from "../data/dummydata";
import MyButton from "../common/MyButton";
/* Material UI */
import {Box, Card, CardMedia, Stack, Typography} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
export default function Portfolio() {
  const [category, setCategory] = useState("all");
  let viewCategory = portfolio;

  const handleCategory = (text) => {
    setCategory(text);
  };

  const Filter = () => {
    const newArray = portfolio.filter((port) => {
      return port.category === category;
    });
    category === "all" ? (viewCategory = portfolio) : (viewCategory = newArray);
  };
  Filter();

  return (
    <section>
      <Box className="container" textAlign={"center"}>
        <Heading title={"Portfolio"} />
        <Stack spacing={2} direction="row" justifyContent={"center"} mb={"20px"}>
          <MyButton handleCategory={handleCategory} text="all" variant="outlined" color="var(--white)" />
          <MyButton handleCategory={handleCategory} text="marketing" variant="outlined" color="var(--white)" />
          <MyButton handleCategory={handleCategory} text="design" variant="outlined" color="var(--white)" />
          <MyButton handleCategory={handleCategory} text="development" variant="outlined" color="var(--white)" />
        </Stack>
        <Box className="grid-3">
          {viewCategory.map((value, i) => {
            return (
              <Card key={i} className="card-Portfolio" sx={{cursor: "pointer"}} data-aos="flip-left">
                <CardMedia sx={{height: 300}} image={value.cover} title={value.title} />
                <Box className="overlay">
                  <Typography>{value.title}</Typography>
                  <Typography>{value.name}</Typography>
                  <i>
                    <VisibilityOutlinedIcon sx={{color: "var(--white)"}} />
                  </i>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
    </section>
  );
}

import React from "react";
/* Material UI */
import {Button} from "@mui/material";
export default function MyButton({text, variant, color, backgroundColor, fontSize, handleCategory}) {
  return (
    <Button
      className="border-radius"
      variant={variant}
      sx={{
        fontSize: {fontSize},
        textTransform: "capitalize",
        color: {color},
        borderColor: "var(--primaryColor)",
        backgroundColor: {backgroundColor},
        "&:hover": {borderColor: "var(--primaryColor)", backgroundColor: {backgroundColor}},
        boxShadow: "none",
        ml: "5px",
      }}
      onClick={() => handleCategory(text)}
      data-aos="zoom-out"
    >
      {text}
    </Button>
  );
}

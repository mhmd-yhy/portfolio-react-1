import React from "react";
import {Link} from "react-router-dom";

/* Mateial Ui */

import {MenuItem, ListItemText} from "@mui/material";

export default function MenuItems({item}) {
  return (
    <MenuItem sx={{height: "20%"}}>
      <Link
        to={item.url}
        style={{
          height: "100%",
          width: "100%",
          textDecoration: "none",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="navLink"
      >
        <ListItemText>{item.text}</ListItemText>
      </Link>
    </MenuItem>
  );
}

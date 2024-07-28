import React from "react";
import {navlink} from "../data/dummydata";
import MenuItems from "./MenuItems";

/* Mateial Ui */
import {Paper, MenuList} from "@mui/material";
export default function Menu({menuMood}) {
  return (
    <Paper
      sx={{
        display: {xs: `${menuMood === true ? "flex" : "none"}`, md: "none"},
        flexDirection: "column",
        position: "absolute",
        top: "calc(0px + 56px);",
        left: 0,
        width: "100%",
        zIndex: "100",
        backgroundColor: "var(--primaryBackground)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <MenuList
        sx={{
          display: `flex`,
          flexDirection: "column",
          width: "100%",
          height: "calc(100vh - 56px)",
        }}
      >
        {navlink.map((item) => {
          return <MenuItems key={Math.random()} item={item} />;
        })}
      </MenuList>
    </Paper>
  );
}

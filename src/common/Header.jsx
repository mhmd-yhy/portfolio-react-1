import * as React from "react";
import {useState} from "react";
import Menu from "./Menu";
import {navlink} from "../data/dummydata";
import {Link} from "react-router-dom";

/* Mateial Ui */
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {AppBar, Toolbar, Box} from "@mui/material";

export default function Header() {
  const [menuMood, setMenuMood] = useState(false);
  const handleOpenCloseNavMenu = () => {
    setMenuMood(!menuMood);
  };
  return (
    <AppBar
      position="static"
      sx={{backgroundColor: "var(--headingColor)", position: "sticky", top: "0", left: "0", zIndex: "9999"}}
    >
      <Toolbar className="container" sx={{position: "static", justifyContent: "space-between"}}>
        <Box sx={{flexGrow: "1", display: "flex", justifyContent: "space-between"}}>
          <img src="favicon.png" alt="Logo" data-aos="fade-right" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: {xs: "none", md: "flex"},
            justifyContent: "end",
            gap: "25px",
          }}
          data-aos="fade-left"
        >
          {navlink.map((linkItem) => (
            <Link
              to={linkItem.url}
              key={Math.random()}
              style={{my: 2, color: "var(--greyDark)", display: "block", textDecoration: "none"}}
              className="navLink"
            >
              {linkItem.text}
            </Link>
          ))}
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{display: {xs: "Block", md: "none"}}}
          onClick={handleOpenCloseNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu menuMood={menuMood} />
      </Toolbar>
    </AppBar>
  );
}

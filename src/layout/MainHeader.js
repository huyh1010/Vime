import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Logo from "../components/Logo";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import UserIcon from "../components/UserIcon";

//change typography to link to later

function MainHeader() {
  const [show, setShow] = useState(false);

  const transitionAppBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionAppBar);
    return () => window.removeEventListener("scroll", transitionAppBar);
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <Box>
        <AppBar
          position="sticky"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></AppBar>
        <Toolbar variant="">
          <Logo />
          <Typography
            sx={{
              padding: "5px",
              fontWeight: "bold",
              color: "white",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            Movies
          </Typography>
          <Typography
            sx={{
              padding: "5px",
              fontWeight: "bold",
              color: "white",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            TV Shows
          </Typography>
          <Typography
            sx={{
              padding: "5px",
              fontWeight: "bold",
              color: "white",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            Discover
          </Typography>

          <Box sx={{ flexGrow: 0.8 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box display={"flex"} alignItems={"center"}>
            <UserIcon />
            <Typography
              sx={{ fontWeight: "bold", color: "white", marginLeft: "10px" }}
            >
              User
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}

export default MainHeader;

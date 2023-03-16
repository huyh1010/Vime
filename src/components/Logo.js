import React from "react";
import { Box } from "@mui/material";
import vimelogo from "../vimelogo.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  const logo = (
    <Box>
      <img
        className="home-logo"
        src={vimelogo}
        alt="logo"
        height="50px"
        onClick={() => navigate("/")}
      />
    </Box>
  );
  return logo;
}

export default Logo;

import React from "react";
import usericon from "../usericon.png";
import { Box } from "@mui/material";

function UserIcon() {
  const logo = (
    <Box>
      <img src={usericon} alt="logo" width="50px" className="icon-user" />
    </Box>
  );
  return logo;
}

export default UserIcon;

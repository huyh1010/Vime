import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function MainFooter() {
  return (
    <Box
      sx={{
        bgcolor: "#2b2e4a",
        color: "#ddd",
        fontWeight: "light",
      }}
    >
      <Stack padding={"30px"}>
        <Typography variant="p" sx={{ fontSize: "15px", paddingBottom: "5px" }}>
          Copyright © 2023 Vime.Inc. All rights reserved.
        </Typography>
        <Box display={"flex"}>
          <Typography
            variant="p"
            sx={{ marginRight: "10px", fontSize: "13px" }}
          >
            Internet Service Terms
          </Typography>
          <div className="border-line"></div>
          <Typography
            variant="p"
            sx={{ marginLeft: "10px", marginRight: "10px", fontSize: "13px" }}
          >
            Vime App & Policy
          </Typography>
          <div className="border-line"></div>
          <Typography
            variant="p"
            sx={{ marginLeft: "10px", marginRight: "10px", fontSize: "13px" }}
          >
            Cookie Policy
          </Typography>
          <div className="border-line"></div>
          <Typography variant="p" sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Support
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default MainFooter;

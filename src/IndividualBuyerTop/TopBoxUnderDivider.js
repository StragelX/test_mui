import * as React from "react";
import { Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

function TopBoxUnderDivider() {
  return (
    <Box className="flex items-center justify-between">
      <Box className="flex items-center">
        <Typography variant="subtitle2" sx={{ paddingRight: "10px" }}>
          Agreement Date:
        </Typography>

        <Typography variant="subtitle3">04/07/2021</Typography>
      </Box>

      <Box className="flex items-center">
        <AutorenewIcon></AutorenewIcon>

        <Typography
          variant="subtitle2"
          sx={{ paddingRight: "5px", paddingLeft: "5px" }}
        >
          Requisition Date:
        </Typography>

        <Typography variant="subtitle3">04/07/2021</Typography>
      </Box>

      <Box className="flex items-center">
        <SportsScoreIcon></SportsScoreIcon>

        <Typography
          variant="subtitle2"
          sx={{ paddingRight: "5px", paddingLeft: "5px" }}
        >
          Closing Date:
        </Typography>

        <Typography variant="subtitle3">04/09/2021</Typography>
      </Box>
    </Box>
  );
}

export default TopBoxUnderDivider;

import { Box, Typography, Avatar, Divider } from "@mui/material";
import * as React from "react";

function Solicitor() {
  return (
    <Box className="flex items-center justify-between">
      <Typography variant="subtitle2" sx={{ paddingRight: "10px" }}>
        Solicitor:
      </Typography>

      <Avatar />

      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ backgroundColor: "#c4c4c4", height: "1.375rem" }}
      />
    </Box>
  );
}

export default Solicitor;

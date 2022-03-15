import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function BuyerInfo() {
  return (
    <Box className="flex justify-between items-center mb-9 pl-6 pr-10">
      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Buyer Name
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Contact Info
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Buyer Type
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Data
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Status
        </Typography>
      </Box>
    </Box>
  );
}

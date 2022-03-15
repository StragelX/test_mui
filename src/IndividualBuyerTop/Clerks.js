import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";

function Clerks() {
  return (
    <Box className="flex items-center justify-between">
      <Typography variant="subtitle2" sx={{ paddingRight: "10px" }}>
        Clerk (s):
      </Typography>

      <Avatar
        sx={{
          borderColor: "#fff",
          borderStyle: "solid",
          borderWidth: "0.125rem",
          zIndex: "4",
        }}
      />

      <Avatar
        sx={{
          borderColor: "#fff",
          borderStyle: "solid",
          borderWidth: "0.125rem",
          marginLeft: "-0.5rem",
          zIndex: "3",
        }}
      />

      <Avatar
        sx={{
          borderColor: "#fff",
          borderStyle: "solid",
          borderWidth: "0.125rem",
          marginLeft: "-0.5rem",
          zIndex: "2",
        }}
      />

      <Avatar
        sx={{
          borderColor: "#fff",
          borderStyle: "solid",
          borderWidth: "0.125rem",
          marginLeft: "-0.5rem",
          zIndex: "1",
        }}
      >
        +2
      </Avatar>
    </Box>
  );
}

export default Clerks;

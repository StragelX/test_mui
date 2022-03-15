import * as React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";

function BuyerNameId() {
  return (
    <Box className="flex items-center">
      <Button variant="contained" className="topBtn" sx={{ marginRight: "10px !important" }}>
        Purchase
      </Button>

      <Typography variant="h6">ID 8045 04/07/2021 - Erik Edwards</Typography>

      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ backgroundColor: "#000", height: "1.438rem" }}
      />

      <Typography variant="h6" color="primary">
        800 000
      </Typography>
    </Box>
  );
}

export default BuyerNameId;

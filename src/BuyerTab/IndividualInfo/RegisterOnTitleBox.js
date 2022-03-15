import { Box } from "@mui/material";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Switch from "@mui/material/Switch";

export default function RegisterOnTitleBox() {
  return (
    <Box className="flex px-6 py-6 justify-between	items-center">
      <Box
        className="py-4 px-6 flex justify-between	items-center"
        sx={{
          borderRadius: "0.25rem",
          borderColor: "rgba(0, 0, 0, 0.12)",
          borderStyle: "solid",
          borderWidth: "0.063rem",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Register On Title"
          className="mr-5"
        />

        <HelpOutlineIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      </Box>

      <FormControlLabel
        control={<Switch />}
        labelPlacement="start"
        label="Buy via Power of Attorney"
      />
    </Box>
  );
}

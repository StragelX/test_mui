import { Box, Divider, Typography, Button, TextField } from "@mui/material";
import * as React from "react";
import RegisterOnTitleBox from "./RegisterOnTitleBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormControlLabel from "@mui/material/FormControlLabel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Switch from "@mui/material/Switch";
import BottomLine from "./BottomLine";

export default function IndividualInfoBox() {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <RegisterOnTitleBox />

      <Divider />

      <Box className="flex align-center justify-between px-6 py-6">
        <Typography variant="subtitle3" sx={{ lineHeight: "36px" }}>
          Residence and Contact Information
        </Typography>
        <Button>
          <KeyboardArrowUpIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
        </Button>
      </Box>

      <Box className="px-6 pt-6 pb-16 grid grid-cols-2 gap-[80px]">
        <Box>
          <Typography
            variant="subtitle4"
            sx={{ display: "block", marginBottom: "60px !important" }}
          >
            Residence and Citizenship
          </Typography>

          <Box className="flex align-center justify-between h-10 mb-10">
            <Typography variant="subtitle5">
              First Time Home Buyer <HelpOutlineIcon />
            </Typography>
            <FormControlLabel
              control={<Switch />}
              labelPlacement="start"
              label=""
            />
          </Box>

          <Box className="flex align-center justify-between h-10 mb-10">
            <Typography variant="subtitle5">
              Move In
              <HelpOutlineIcon />
            </Typography>
            <FormControlLabel
              control={<Switch />}
              labelPlacement="start"
              label=""
            />
          </Box>

          <Box className="grid grid-cols-2 gap-[60px] mb-12">
            <TextField
              id="standard-basic"
              label="* Street Address"
              variant="standard"
              sx={{ display: "block" }}
            />

            <TextField
              id="standard-basic"
              label="* Apartment,Suite,Etc."
              variant="standard"
              sx={{ display: "block" }}
            />
          </Box>

          <Box className="grid grid-cols-2 gap-[60px] mb-12">
            <TextField
              id="standard-basic"
              label="* City"
              variant="standard"
              sx={{ display: "block" }}
            />

            <TextField
              id="standard-basic"
              label="* Province"
              variant="standard"
              sx={{ display: "block" }}
            />
          </Box>

          <Box className="grid grid-cols-2 gap-[60px] mb-12">
            <TextField
              id="standard-basic"
              label="* ZIP/Postal Code"
              variant="standard"
              sx={{ display: "block" }}
            />
          </Box>
        </Box>

        <Box>
          <Typography
            variant="subtitle4"
            sx={{ display: "block", marginBottom: "40px !important" }}
          >
            Contact Info
          </Typography>

          <TextField
            id="standard-basic"
            label="* Phone"
            variant="standard"
            sx={{ display: "block", marginBottom: "40px" }}
          />

          <TextField
            id="standard-basic"
            label="* Email"
            variant="standard"
            sx={{ display: "block" }}
          />
        </Box>
      </Box>

      <BottomLine />
    </Box>
  );
}

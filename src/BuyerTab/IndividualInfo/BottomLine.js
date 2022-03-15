import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select,
  Button,
} from "@mui/material";
import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function BottomLine() {
  const [type, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChangeData = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ backgroundColor: "#fff8e1" }}
      className="px-6 py-10 flex align-center justify-between"
    >
      <Typography variant="subtitle5" sx={{ lineHeight: "42px" }}>
        Performed By:
      </Typography>

      <Box className="w-[205px]">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose a Person</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>Person 1</MenuItem>
            <MenuItem value={2}>Person 2</MenuItem>
            <MenuItem value={3}>Person 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="subtitle5" sx={{ lineHeight: "42px" }}>
        Date:
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChangeData}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Button variant="contained" className="bottomBtn">
        Validate
      </Button>
    </Box>
  );
}

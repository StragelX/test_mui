import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select from "@mui/material/Select";

export default function TypeOfSelect() {
  const [type, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="w-[365px]">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type of Ownership</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Type of Ownership 1</MenuItem>
          <MenuItem value={2}>Type of Ownership 2</MenuItem>
          <MenuItem value={3}>Type of Ownership 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

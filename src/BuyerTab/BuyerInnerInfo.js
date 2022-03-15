import { Box, Typography, Button } from "@material-ui/core";
import * as React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function BuyerInnerInfo() {
  return (
    <Box className="flex justify-between items-center px-6 pt-6 pb-11">
      <Box>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.38)" }}>
          No Information
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.38)" }}>
          No Information
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }}>
          Individual
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }}>0%</Typography>
      </Box>

      <Box>
        <Typography
          className="flex items-center"
          sx={{ color: "rgba(0, 0, 0, 0.87)" }}
        >
          <span className="block flex-none mr-6 w-3 h-3 rounded-full bg-[#ffab00]"></span>
          <Button>
            <DeleteOutlineIcon
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            ></DeleteOutlineIcon>
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

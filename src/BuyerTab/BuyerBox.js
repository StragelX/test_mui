import { Box, Divider } from "@mui/material";
import * as React from "react";
import TypeOfSelect from "./TypeOfSelect";
import BuyerInfo from "./BuyerInfoTop";
import IndividualInfoBox from "./IndividualInfo/IndividualInfoBox";
import BuyerInnerInfo from "./BuyerInnerInfo";

function BuyerBox() {
  return (
    <Box>
      <Box className="px-6 pb-6 pt-8 flex">
        <TypeOfSelect />
      </Box>

      <Divider />

      <Box className="px-6 pt-10 pb-[135px]">
        <BuyerInfo />

        <Box
          sx={{
            borderRadius: "0.625rem",
            borderColor: "#e0e0e0",
            borderStyle: "solid",
            borderWidth: "0.063rem",
            backgroundColor: "rgba(224, 224, 224, 0)",
            overflow: "hidden",
          }}
        >
          <BuyerInnerInfo />

          <IndividualInfoBox />
        </Box>
      </Box>
    </Box>
  );
}

export default BuyerBox;

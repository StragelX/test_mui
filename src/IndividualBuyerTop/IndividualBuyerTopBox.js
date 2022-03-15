import * as React from "react";
import { Box } from "@mui/material";
import GreenDivider from "./GreenDivider";
import TopBoxUnderDivider from "./TopBoxUnderDivider";
import Clerks from "./Clerks";
import Solicitor from "./Solicitor";
import BuyerNameId from "./BuyerNameId";

function IndividualBuyerTopBox() {
  return (
    <Box className="bg-white mt-6 rounded-10 mb-7 py-11 px-8">
      <Box className="flex items-center justify-between">
        <BuyerNameId />

        <Box className="flex items-center">
          <Solicitor />

          <Clerks />
        </Box>
      </Box>
      <GreenDivider />

      <TopBoxUnderDivider />
    </Box>
  );
}

export default IndividualBuyerTopBox;

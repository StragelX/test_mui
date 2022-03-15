import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import BuyerBox from "../BuyerTab/BuyerBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabsline() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Buyer" {...a11yProps(0)} />
          <Tab label="Solicitor" {...a11yProps(1)} />
          <Tab label="Seller" {...a11yProps(2)} />
          <Tab label="Broker" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BuyerBox />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Solicitor
      </TabPanel>
      <TabPanel value={value} index={2}>
        Seller
      </TabPanel>
      <TabPanel value={value} index={3}>
        Broker
      </TabPanel>
    </Box>
  );
}

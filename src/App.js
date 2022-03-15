import Container from "@mui/material/Container";
import theme from "./theme";
import "./App.scss";
import { ThemeProvider } from "@mui/material/styles";
import IndividualBuyerTopBox from "./IndividualBuyerTop/IndividualBuyerTopBox";
import VerticalTabs from "./IndividualBuyerContent/VerticalTabs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <IndividualBuyerTopBox />

        <VerticalTabs />
      </Container>
    </ThemeProvider>
  );
}

export default App;

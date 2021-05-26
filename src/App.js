import Header from "./components/Header/Header";
import BoxCheckOut from "./components/BoxCheckOut/BoxCheckOut";
import "./styles/globals.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#7ded72",
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <BoxCheckOut />
      </MuiThemeProvider>
    </div>
  );
}

export default App;

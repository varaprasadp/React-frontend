import React from "react";
import Calculator from "./screens/Calculator";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from "@material-ui/core/colors/cyan";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: cyan[700],
      },
      secondary: {
        main: cyan[800],
      },
    },
  });
class App extends React.Component {
  
  render() {
   
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Container">
          <Calculator />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

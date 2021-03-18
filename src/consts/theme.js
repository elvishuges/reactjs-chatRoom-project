import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
const breakpoints = createBreakpoints({});

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2E3B55",
      contrastText: "#fff",
      // This is an orange looking color
    },
    secondary: {
      main: "#4765A1",
      contrastText: "#fff", //Another orange-ish color
    },
    info: {
      main: "#677AA1",
      contrastText: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;

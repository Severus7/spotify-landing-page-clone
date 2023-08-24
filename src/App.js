import {
  Box,
  List,
  ListItem,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  const darkTheme = createTheme({
    typography: {
      fontFamily: ['"Poppins"'].join(","),
    },
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Grid container spacing={0.5}>
          <Grid item lg={3}>
            <SideBar />
          </Grid>
          <Grid item lg={9}>
            <Box sx={{ overflow: "auto" }}>
              <Main />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import {
  AppBar,
  Button,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const TopBar = ({ children }) => {
  return (
    <AppBar
      position="static"
      component="nav"
      sx={{
        background: "rgba(0, 0, 0, 0.5)",
        boxShadow: "none",
        borderRadius: "5px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          color="#1DB954"
        >
          Spotify
        </Typography>
        <Typography mr={3}>Sign up</Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: 25,
            backgroundColor: "white",
            padding: "10px 30px 10px 30px",
            ":hover": {
              bgcolor: "#1DB954",
            },
          }}
        >
          <Typography fontWeight={600} textTransform="initial">
            Log in
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

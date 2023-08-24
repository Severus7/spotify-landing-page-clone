import { Box, List, ListItem, Stack } from "@mui/material";
import React from "react";
import PlaylistComponent from "./PlaylistComponent";
import MenuComponent from "./MenuComponent";

const SideBar = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <MenuComponent />
        <PlaylistComponent />
      </Stack>
    </Box>
  );
};

export default SideBar;

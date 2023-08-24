import React from "react";
import BoxComponent from "./BoxComponent";
import {
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  Toolbar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PlaylistItem from "./PlaylistItem";

const PlaylistComponent = () => {
  return (
    <BoxComponent>
      <MenuItem sx={{ marginBottom: "5px" }}>
        <ListItemIcon>
          <QueueMusicIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1" component="p" ml={3} fontSize="18px">
            Your Library
          </Typography>
        </ListItemText>
        <Typography variant="body2" color="text.secondary" fontSize="24px">
          +
        </Typography>
      </MenuItem>

      <Box
        sx={{ overscrollBehaviorY: "contain", overflowY: "auto" }}
        maxHeight="200px"
        mb={5}
      >
        <PlaylistItem
          title="Create your first playlist"
          context="It's easy, we'll help you"
          buttonName="Create a playlist"
        />
        <PlaylistItem
          title="Let's find some podcast to follow"
          context="We'll keep you updated on new episodes"
          buttonName="Browse podcasts"
        />
      </Box>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        mt={10}
        mb={10}
      >
        <List>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Legal
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              About Ads
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Cookies
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Privacy Center
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Privacy Policy
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Accessibility
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography variant="caption" component="p" fontSize={10}>
              Privacy Policy
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </BoxComponent>
  );
};

export default PlaylistComponent;

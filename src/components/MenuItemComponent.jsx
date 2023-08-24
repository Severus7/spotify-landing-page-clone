import {
  MenuItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Home, Settings } from "@mui/icons-material";

const MenuItemComponent = ({ icon, label }) => {
  return (
    <MenuItem sx={{ marginBottom: "5px" }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>
        <Typography variant="body1" component="p" ml={3} fontSize="18px">
          {label}
        </Typography>
      </ListItemText>
    </MenuItem>
  );
};

export default MenuItemComponent;

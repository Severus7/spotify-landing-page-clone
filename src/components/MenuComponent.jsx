import React from "react";
import BoxComponent from "./BoxComponent";
import { MenuList } from "@mui/material";
import MenuItemComponent from "./MenuItemComponent";
import { Home, Search } from "@mui/icons-material";

const MenuComponent = () => {
  return (
    <BoxComponent>
      <MenuList>
        <MenuItemComponent icon={<Home fontSize="large" />} label="Home" />
        <MenuItemComponent icon={<Search fontSize="large" />} label="Search" />
      </MenuList>
    </BoxComponent>
  );
};

export default MenuComponent;

import { Box, colors } from "@mui/material";

const BoxComponent = ({ children }) => {
  return (
    <Box borderRadius={3} bgcolor={colors.grey[900]} p={1}>
      {children}
    </Box>
  );
};

export default BoxComponent;

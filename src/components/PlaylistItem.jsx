import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const PlaylistItem = ({ title, context, buttonName }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: "5px" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              marginBottom={2}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              color="text.secondary"
              gutterBottom
              marginBottom={4}
            >
              {context}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 5,
                backgroundColor: "white",
                ":hover": {
                  bgcolor: "#1DB954",
                },
              }}
            >
              <Typography fontWeight={600} textTransform="initial">
                {buttonName}
              </Typography>
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PlaylistItem;

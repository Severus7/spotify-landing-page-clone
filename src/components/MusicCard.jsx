import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MusicCard = ({ image, headline, caption }) => {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt="sample-image"
        />
        <CardContent sx={{ boxSizing: "border-box", overflow: "hidden" }}>
          <Typography gutterBottom variant="body1" component="p">
            {headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {caption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MusicCard;

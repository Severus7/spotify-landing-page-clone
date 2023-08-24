import { Box, CssBaseline, Grid, Typography, colors } from "@mui/material";
import React from "react";
import TopBar from "./TopBar";
import MusicCard from "./MusicCard";

const Main = () => {
  return (
    <Box borderRadius={3} bgcolor={colors.grey[900]}>
      <CssBaseline />
      <TopBar />

      <Box component="main" p={3}>
        <Typography variant="h6" component="h2" mb={4}>
          Spotify Playlists
        </Typography>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg"
              headline="Today's Top Hits"
              caption="Joshua is on the top of the Hottest 50!"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="CaviarRap"
              caption="New music from Quavo, and Polo G"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="All Out 2010s"
              caption="The biggest songs of the 2010s"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Rock Classics"
              caption="Rock legends and epic songs"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Chill Hits"
              caption="Kick back to the best new chill hits"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" component="h2" mb={4}>
          Focus
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Peaceful Piano"
              caption="Peaceful piano to help you focus"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/175690/pexels-photo-175690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Deep Focus"
              caption="Keep calm and focus with this playlist"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Instrumental Study"
              caption="Focus with soft study"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Focus Flow"
              caption="Enter the zone"
            />
          </Grid>
          <Grid item xs={12 / 5} mb={2}>
            <MusicCard
              image="https://images.pexels.com/photos/1231258/pexels-photo-1231258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              headline="Workday Lounge"
              caption="Lounge and chill out music"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;

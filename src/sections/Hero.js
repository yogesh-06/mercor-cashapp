import { Box, Container, Grid, Typography, styled } from "@mui/material";
import IntroCube from "../assets/images/intro-cube 1.png";
import IntroCubes from "../assets/images/intro-cubes 1.png";
import Phone from "../assets/images/intro-phone.png";
import IntroPillar from "../assets/images/intro-pillar 1.png";
import IntroStairs from "../assets/images/intro-stairs 1.png";
import Navbar from "../components/Navbar";

import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";
import { RootStyle } from "../components/RootStyle";

const useStyles = makeStyles((theme) => ({
  introPhone: {
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      height: 240,
      width: 200,
    },
  },

  backgroundSpark: {
    width: "100%",
    height: "100%",
    position: "absolute",
    // objectFit: "contain",
    pointerEvents: "none",
  },

  cubeNstairs: {
    position: "absolute",
    top: "10%",
    left: "10%",
    maxWidth: "85%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      top: 110,
      left: 70,
      maxWidth: "50%",
    },
  },

  cubesNpillar: {
    position: "absolute",
    top: "58%",
    left: "11%",
    maxWidth: "75%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <RootStyle color="#000000">
      <Box
        component="img"
        src="/static/Vector.png"
        className={classes.backgroundSpark}
      />
      <Navbar />

      <Container
        sx={{
          position: "relative",
          top: -95,
          padding: 0,
          pointerEvents: "none",
        }}
      >
        <Grid container className={classes.cubeNstairs}>
          <Grid item>
            <Box component="img" src={IntroCube} />
          </Grid>
          <Grid item>
            <Box
              component="img"
              src={IntroStairs}
              sx={{ display: { xs: "none", md: "block" } }}
            />
          </Grid>
        </Grid>

        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          overflow="hidden"
        >
          <Typography variant="h1" sx={{ color: "white" }}>
            CASH
          </Typography>
          <Box component="img" src={Phone} className={classes.introPhone}></Box>
          <Typography variant="h1" sx={{ color: "white", zIndex: 100 }}>
            APP
          </Typography>
          {/* <Box style={{ position: "absolute", top: 0, left: 0 }}></Box> */}
        </Grid>

        <Grid container className={classes.cubesNpillar}>
          <Grid item>
            <Box component="img" src={IntroCubes}></Box>
          </Grid>
          <Grid item>
            <Box component="img" src={IntroPillar}></Box>
          </Grid>
        </Grid>
      </Container>
      <Grid
        sx={{
          px: { xs: 1, md: 12 },
          position: "relative",
          top: { xs: "-42%", md: "-35%" },
        }}
      >
        <Footer />
      </Grid>
    </RootStyle>
  );
}

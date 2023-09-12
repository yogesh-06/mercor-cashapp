import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Phone from "../assets/images/intro-phone.png";
import IntroCube from "../assets/images/intro-cube 1.png";
import IntroCubes from "../assets/images/intro-cubes 1.png";
import IntroPillar from "../assets/images/intro-pillar 1.png";
import IntroStairs from "../assets/images/intro-stairs 1.png";
import BackgroundSpark from "../assets/images/Vector.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <Grid backgroundColor="#000000" height="100vh">
      <Box
        component="img"
        src={BackgroundSpark}
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
          top: { xs: "-42%", md: "-37%" },
        }}
      >
        <Footer isHero />
      </Grid>
    </Grid>
  );
}

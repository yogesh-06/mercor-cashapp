import { Box, Container, Grid, Typography } from "@mui/material";
import { Title } from "../utils/utils";
import Navbar from "../components/Navbar";
import Phone from "../assets/intro-phone.png";
import EyeButton from "../assets/eye-button.png";
import IntroCube from "../assets/intro-cube 1.png";
import IntroCubes from "../assets/intro-cubes 1.png";
import IntroPillar from "../assets/intro-pillar 1.png";
import IntroStairs from "../assets/intro-stairs 1.png";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  introPhone: {
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      height: 240,
      width: 200,
    },
  },
}));
const containerStyle = {
  position: "absolute",
  // display: "flex",
  // justifyContent: "space-between",
};
export default function Hero() {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundColor: "#000000", height: "100vh" }}>
      <Box
        component="img"
        src="/static/Vector.png"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          // objectFit: "contain",
        }}
      ></Box>

      <Navbar />
      <Container sx={{ position: "relative", padding: 0 }}>
        {/* <Grid minHeight="100vh" position="absolute"> */}
        <Grid
          container
          position="absolute"
          top={80}
          left={120}
          maxWidth="85%"
          justifyContent="space-between"
        >
          <Grid item>
            <Box component="img" src={IntroCube}></Box>
          </Grid>
          <Grid item>
            <Box component="img" src={IntroStairs}></Box>
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
          <Box style={{ position: "absolute", top: 0, left: 0 }}></Box>
        </Grid>
        <Grid
          container
          position="absolute"
          top={485}
          left={120}
          maxWidth="77%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Box component="img" src={IntroCubes}></Box>
          </Grid>
          <Grid item>
            <Box component="img" src={IntroPillar}></Box>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Container>
    </Box>
  );
}

import { Box, Container, Grid, Typography } from "@mui/material";
import IntroCube from "../assets/images/intro-cube 1.png";
import IntroCubes from "../assets/images/intro-cubes 1.png";
import Phone from "../assets/images/intro-phone.png";
import IntroPillar from "../assets/images/intro-pillar 1.png";
import IntroStairs from "../assets/images/intro-stairs 1.png";
import Navbar from "../components/Navbar";

import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  introPhone: {
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      height: 240,
      width: 200,
    },
  },
}));
// const containerStyle = {
//   position: "absolute",
//   // display: "flex",
//   // justifyContent: "space-between",
// };
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
      {/* <Grid paddingX={300}> */}
      <Navbar />
      {/* </Grid> */}
      <Container sx={{ position: "relative", padding: 0 }}>
        <Grid
          container
          position="absolute"
          top={80}
          left={90}
          maxWidth="90%"
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
          top={480}
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
      </Container>
      <Grid paddingX={19} position="relative" top={-155}>
        <Footer />
      </Grid>
    </Box>
  );
}

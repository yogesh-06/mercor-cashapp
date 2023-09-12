import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import Column from "../assets/images/banking-column.png";
import Cubes from "../assets/images/banking-cubes.png";
import Hole1 from "../assets/images/banking-hole-1.png";
import Hole from "../assets/images/banking-hole.png";
import Monster from "../assets/images/banking-monster.png";
import Phone from "../assets/images/banking-phone.png";
import Ramp1 from "../assets/images/banking-ramp-1.png";
import Ramp2 from "../assets/images/banking-ramp-2.png";
import Stairs1 from "../assets/images/banking-stairs-1.png";
import Stairs2 from "../assets/images/banking-stairs-2.png";
import Track1 from "../assets/images/banking-track-1.png";
import Track2 from "../assets/images/banking-track-2.png";
import Tube from "../assets/images/banking-tube.png";

const useStyles = makeStyles((theme) => ({
  hole: {
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  },

  bankingPhone: {
    position: "relative",
    left: "-15%",
    [theme.breakpoints.down("sm")]: {
      top: -90,
      left: "42%",
      width: "90%",
    },
  },
}));

export default function Banking() {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        backgroundColor: "#00D54B",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        zIndex: -99,
      }}
    >
      <Box component="img" src={Hole} alt="Hole" className={classes.hole} />
      <Grid
        sx={{
          pl: 8,
          height: "74%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box component="img" src={Column} />
        <Box component="img" src={Stairs2} />
      </Grid>

      <Grid
        container
        sx={{
          position: "absolute",
          top: { xs: "15%", md: "22%" },
          marginLeft: { xs: -5, md: -20 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            width: { xs: "70%", md: "22%" },
            pb: { xs: 10, md: 2 },
            pl: 1,
          }}
        >
          <Typography variant="h3" color="#fff">
            Banking
          </Typography>
          <Typography variant="caption" fontFamily="sans-serif">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </Typography>
        </Grid>
        <Grid item>
          <Box component="img" src={Phone} className={classes.bankingPhone} />
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "60%",
          position: "absolute",
          top: "28%",
          right: "25%",
        }}
      >
        <Box component="img" src={Ramp1} sx={{ marginLeft: -8 }} />
        <Box component="img" src={Cubes} />
      </Grid>
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "55%",
          position: "absolute",
          top: "38%",
          right: "8%",
        }}
      >
        <Box component="img" src={Stairs1} />
        <Box component="img" src={Monster} />
      </Grid>
      <Box
        component="img"
        src={Track2}
        sx={{
          position: "absolute",
          top: "3%",
          right: "15%",
          display: { xs: "none", md: "flex" },
        }}
      />
      <Box
        component="img"
        src={Track1}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          top: "30%",
          left: "33%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <Box
        component="img"
        src={Ramp2}
        sx={{
          display: { xs: "none", md: "inline-grid" },
          position: "absolute",
          top: "83%",
          marginLeft: -18,
          transform: "translateY(-50%)",
        }}
      />
      <Grid
        sx={{
          width: "80%",
          display: "flex",
          position: "absolute",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          bottom: 0,
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "end",
            width: "60%",
          }}
        >
          <Box component="img" src={Tube} />
          <Box component="img" src={Hole1} />
        </Grid>
      </Grid>
    </Grid>
  );
}

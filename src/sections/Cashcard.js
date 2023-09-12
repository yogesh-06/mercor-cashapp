import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Burger from "../assets/images/boost-burger.png";
import Card from "../assets/images/boost-card.png";
import Coffee from "../assets/images/boost-coffee.png";
import Hand from "../assets/images/boost-hand.png";
import Phone from "../assets/images/boost-phone.png";
import Shoe from "../assets/images/boost-shoe.png";
import Stairs1 from "../assets/images/boost-stairs-1.png";
import Stairs2 from "../assets/images/boost-stairs-2.png";

const useStyles = makeStyles((theme) => ({
  phone: {
    [theme.breakpoints.down("md")]: {
      width: "150%",
    },
  },
}));
export default function Cashcard() {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        zIndex: -99,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          item
          sx={{
            marginLeft: { xs: -16, md: 0 },
            zIndex: -1,
          }}
        >
          <Box component="img" src={Stairs2} />
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "block" },
            zIndex: -1,
          }}
        >
          <Box component="img" src={Stairs1} />
        </Grid>
      </Grid>
      <Box
        container
        sx={{
          gap: 2,
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "flex-start",
          top: { xs: 8, md: "26%" },
          left: { xs: 0, md: "-20%" },
        }}
      >
        <Grid
          item
          sx={{
            width: { xs: "70%", md: "23%" },
            pt: { xs: 4, md: 8 },
            pl: { xs: 1, md: 8 },
          }}
        >
          <Typography variant="h3" color="#00D54B">
            Cash Card <br /> & Boost
          </Typography>
          <Typography variant="caption" fontFamily="sans-serif" color="#fff">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </Typography>
        </Grid>
        <Grid item>
          <Box component="img" src={Phone} className={classes.phone} />
        </Grid>
      </Box>
      <Grid>
        <Box
          component="img"
          src={Hand}
          sx={{
            position: "absolute",
            bottom: { xs: "38%", md: "68%" },
            right: { xs: "14%", md: "14%" },
          }}
        />
      </Grid>
      <Box
        component="img"
        src={Card}
        sx={{
          position: "absolute",
          top: { xs: "38%", md: "34%" },
          left: { xs: "14%", md: "73%" },
        }}
      />
      <Box
        component="img"
        src={Burger}
        sx={{
          position: "absolute",
          top: { xs: "86%", md: "62%" },
          right: { xs: "24%", md: "29%" },
          transform: "translateY(-50%)",
        }}
      />
      <Box
        component="img"
        src={Coffee}
        sx={{
          position: "absolute",
          top: { xs: "84%", md: "74%" },
          right: { xs: "2%", md: "21%" },
        }}
      />
      <Box
        component="img"
        src={Shoe}
        sx={{
          position: "absolute",
          top: { xs: "86%", md: "58%" },
          right: { xs: "64%", md: "2%" },
          display: { xs: "none", md: "block" },
        }}
      />
    </Grid>
  );
}

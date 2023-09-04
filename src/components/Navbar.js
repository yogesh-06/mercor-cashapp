import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeCapitalise } from "../utils/utils";
import EyeButton from "../assets/eye-button.png";
import Logo from "../assets/cashapp/logo.png";

export default function Navbar() {
  const navItems = [
    { title: "Sign In", route: "" },
    { title: "Legal", route: "" },
    { title: "Licenses", route: "" },
    { title: "Security", route: "" },
    { title: "Careers", route: "" },
    { title: "Press", route: "" },
    { title: "Status", route: "" },
    { title: "Support", route: "" },
    { title: "Codeblog", route: "" },
  ];

  return (
    <Container
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 3,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box component="img" src={Logo}></Box>
      <Grid display="flex" gap={2}>
        {navItems.map((item) => {
          return (
            <Typography variant="h6" sx={{ color: "white" }}>
              {makeCapitalise(item.title)}
            </Typography>
          );
        })}
      </Grid>
      <Box component="img" src={EyeButton}></Box>
    </Container>
  );
}
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Drawer,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

import EyeButton from "../assets/images/eye-button.png";
import { makeCapitalise } from "../utils/utils";
import Logo from "../assets/images/logo.png";

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

const useStyles = makeStyles((theme) => ({
  navContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

const NavIcon = styled(Icon)(() => ({
  color: "#00D54B",
  height: 32,
  width: 32,
  "&:hover": {
    cursor: "pointor",
  },
}));

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [openNavbar, setOpenNavbar] = useState(false);

  const onOpenNavbar = () => {
    setOpenNavbar(true);
  };

  const onCloseNavbar = () => {
    setOpenNavbar(false);
  };

  return (
    <Grid className={classes.navContainer}>
      <Box component="img" src={Logo}></Box>
      <Grid display={{ xs: "none", md: "flex" }} gap={2}>
        {navItems.map((item) => {
          return (
            <Typography key={item.title} variant="h6" sx={{ color: "white" }}>
              {makeCapitalise(item.title)}
            </Typography>
          );
        })}
      </Grid>
      <CustomDrawer openNavbar={openNavbar} onCloseNavbar={onCloseNavbar} />
      {isSmall ? (
        <NavIcon icon="fa:navicon" onClick={onOpenNavbar} />
      ) : (
        <Box component="img" src={EyeButton} />
      )}
    </Grid>
  );
}

export const CustomDrawer = ({ openNavbar, onCloseNavbar }) => {
  return (
    <Drawer
      anchor="top"
      open={openNavbar}
      onClose={onCloseNavbar}
      PaperProps={{
        style: {
          backgroundColor: "#020202bf",
        },
      }}
    >
      <Grid
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box component="img" src={Logo} />
        <NavIcon icon="fa:navicon" onClick={onCloseNavbar} />
      </Grid>
      <Grid
        sx={{
          borderTop: "1px solid gray",
        }}
      >
        {navItems.map((item) => {
          return (
            <Typography
              key={item.title}
              variant="h6"
              sx={{ color: "white", p: 2 }}
            >
              {makeCapitalise(item.title)}
            </Typography>
          );
        })}
      </Grid>
    </Drawer>
  );
};

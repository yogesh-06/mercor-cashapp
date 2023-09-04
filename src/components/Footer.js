import { Button, Grid } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
function Footer() {
  return (
    <Grid container>
      <Grid display="flex">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default Footer;

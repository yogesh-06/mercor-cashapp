import { Grid, styled } from "@mui/material";

export const RootStyle = styled(Grid)(({ color }) => ({
  backgroundColor: color,
  height: "100vh",
}));

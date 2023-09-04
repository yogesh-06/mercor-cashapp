import { Container, Grid, Typography } from "@mui/material";

const asteriskStyle = {
  fontSize: "2rem",
  lineHeight: "1",
};
export default function Payment() {
  return (
    <Container sx={{ backgroundColor: "#fff", height: "100vh" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography sx={asteriskStyle}>*</Typography>
        </Grid>
        <Grid item>
          <Typography sx={asteriskStyle}>*</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography sx={asteriskStyle}>*</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography sx={asteriskStyle}>*</Typography>
        </Grid>
        <Grid item>
          <Typography sx={asteriskStyle}>*</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

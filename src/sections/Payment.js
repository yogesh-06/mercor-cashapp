import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import PaymentFloor from "../assets/images/payment-floor.svg";
import Column1 from "../assets/images/payments-column-1.png";
import Column2 from "../assets/images/payments-column-2.png";
import Column from "../assets/images/payments-column.png";
import PaymentsPhone from "../assets/images/payments-phone 1.png";
import PillarLg from "../assets/images/payments-pillar-large.png";
import PillarMd1 from "../assets/images/payments-pillar-medium-1.png";
import PillarMd2 from "../assets/images/payments-pillar-medium-2.png";
import PillarMd3 from "../assets/images/payments-pillar-medium-3.png";
import PillarMd from "../assets/images/payments-pillar-medium.png";
import PillarSm from "../assets/images/payments-pillar-small.png";

// const paymentFloorStyle = {
//   position: "absolute",
//   zIndex: -100,
//   paddingBottom: 2,
//   height: { xs: "48%", md: "" },
// };

const useStyles = makeStyles((theme) => ({
  paymentFloorStyle: {
    position: "absolute",
    zIndex: -100,
    paddingBottom: 16,
    [theme.breakpoints.down("md")]: {
      // height: "48%",
    },
  },
}));

export default function Payment() {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ flex: 1 }} />
      <Grid display="flex" alignItems="flex-end">
        <Box
          component="img"
          src={Column1}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          sx={{
            position: "relative",
            bottom: { xs: "80%", md: "95%" },
            left: { xs: "3%", md: "7%" },
            minWidth: { xs: "46%", md: 345 },
          }}
        >
          <Typography variant="h3" color="#00D54B">
            Payments
          </Typography>
          <Typography variant="caption" fontFamily="sans-serif" color="#000">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </Typography>
        </Box>
        <Box
          component="img"
          src={PaymentsPhone}
          sx={{
            position: "relative",
            bottom: { xs: "40%", md: "45%" },
            left: { xs: "-70%", md: "-12%" },
          }}
        />
        <Box
          component="img"
          src={PillarMd}
          zIndex={1}
          paddingBottom={3}
          position="absolute"
          left={160}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={PillarSm}
          paddingBottom={7}
          position="absolute"
          left={270}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={PillarMd1}
          sx={{
            pb: 4,
            position: "absolute",
            zIndex: 1,
            left: { xs: "30%", md: "39%" },
          }}
        />
        <Box
          component="img"
          src={PillarMd2}
          position="absolute"
          left="48%"
          zIndex={1}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={PillarLg}
          position="relative"
          left="-42%"
          paddingBottom={12}
          sx={{ display: { xs: "none", md: "block" } }}
        />

        <Box
          component="img"
          src={Column2}
          position="absolute"
          left={320}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={PillarMd3}
          position="relative"
          left="-34%"
          bottom="40%"
          zIndex={-1}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={Column}
          position="absolute"
          right={0}
          paddingBottom={7}
          zIndex={-50}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={PaymentFloor}
          className={classes.paymentFloorStyle}
        />
      </Grid>
    </Grid>
  );
}

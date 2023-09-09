import { Box, Container, Grid, Typography } from "@mui/material";
import PaymentFloor from "../assets/images/payment-floor.svg";
import Column from "../assets/images/payments-column.png";
import Column1 from "../assets/images/payments-column-1.png";
import Column2 from "../assets/images/payments-column-2.png";
import PillarLg from "../assets/images/payments-pillar-large.png";
import PillarMd1 from "../assets/images/payments-pillar-medium-1.png";
import PillarMd2 from "../assets/images/payments-pillar-medium-2.png";
import PillarMd3 from "../assets/images/payments-pillar-medium-3.png";
import PillarMd from "../assets/images/payments-pillar-medium.png";
import PillarSm from "../assets/images/payments-pillar-small.png";
import PaymentsPhone from "../assets/images/payments-phone 1.png";

const asteriskStyle = {
  fontSize: "2rem",
  lineHeight: "1",
};
export default function Payment() {
  return (
    <Grid sx={{ height: "100vh" }}>
      <Grid sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1 }} />
        <Grid display="flex" alignItems="flex-end">
          <Box component="img" src={Column1} />
          <Box position="relative" bottom="95%" left="11%" width={290}>
            <Typography variant="h3" color="#00D54B">
              Payments
            </Typography>
            <Typography variant="caption" fontFamily="sans-serif">
              Send and receive money with anyone, donate to an important cause,
              or tip professionals. Just enter a $cashtag, phone number, or
              <br /> scan their QR code to pay.
            </Typography>
          </Box>
          <Box
            component="img"
            src={PaymentsPhone}
            position="relative"
            bottom="45%"
            right="8%"
          />
          <Box
            component="img"
            src={PillarMd}
            zIndex={1}
            paddingBottom={3}
            position="absolute"
            left={160}
          />
          <Box
            component="img"
            src={PillarSm}
            paddingBottom={7}
            position="absolute"
            left={270}
          />
          <Box
            component="img"
            src={PillarMd1}
            paddingBottom={4}
            position="absolute"
            left="39%"
            zIndex={1}
          />
          <Box
            component="img"
            src={PillarMd2}
            position="absolute"
            left="48%"
            zIndex={1}
          />
          <Box
            component="img"
            src={PillarLg}
            position="relative"
            left="34%"
            paddingBottom={10}
          />

          <Box component="img" src={Column2} position="absolute" left={320} />
          <Box
            component="img"
            src={PillarMd3}
            position="absolute"
            right="19%"
            bottom="21%"
            zIndex={-1}
          />
          <Box
            component="img"
            src={Column}
            position="absolute"
            right={0}
            paddingBottom={7}
            zIndex={-50}
          />
          <Box
            component="img"
            src={PaymentFloor}
            position="absolute"
            zIndex={-100}
            paddingBottom={2}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

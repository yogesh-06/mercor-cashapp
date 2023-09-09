import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

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

export default function Banking() {
  return (
    <Box sx={{ backgroundColor: "#00D54B", height: "100vh" }}>
      <Grid display="flex" justifyContent="space-between">
        <Box component="img" src={Hole} alt="Hole" />
        <Box component="img" src={Track2} paddingRight={20} paddingTop={3} />
      </Grid>
      <Grid display="flex">
        <Stack
          alignItems="flex-start"
          gap={12}
          position="relative"
          left={70}
          top={-50}
        >
          <Box component="img" src={Column} alt="Column" />
          <Box
            component="img"
            src={Stairs2}
            alt="Stairs2"
            position="relative"
            right={25}
          />
        </Stack>

        <Grid
          display="flex"
          alignItems="center"
          position="relative"
          left={100}
          top={-25}
        >
          <Stack>
            <Box
              component="img"
              src={Track1}
              position="relative"
              left={78}
              top={-35}
            />
            <Box width={290} position="relative" top={-60}>
              <Typography variant="h3" color="#fff">
                Banking
              </Typography>
              <Typography variant="caption" fontFamily="sans-serif">
                Send and receive money with anyone, donate to an important
                cause, or tip professionals. Just enter a $cashtag, phone
                number, or
                <br /> scan their QR code to pay.
              </Typography>
            </Box>
            <Box
              component="img"
              src={Ramp2}
              position="relative"
              right={90}
              top={20}
            />
          </Stack>
          <Grid paddingTop={7} zIndex={1}>
            <Box
              component="img"
              src={Phone}
              position="relative"
              right={35}
              top={-30}
            />
            <Box
              component="img"
              src={Tube}
              position="relative"
              bottom={0}
              right={60}
            />
          </Grid>
        </Grid>

        <Grid display="flex" alignItems="center">
          <Grid display="flex" flexDirection="column" alignItems="flex-end">
            <Box component="img" src={Ramp1} />
            <Box component="img" src={Cubes} />
            <Box component="img" src={Hole1} />
          </Grid>
          <Grid>
            <Box component="img" src={Stairs1} />
            <Box component="img" src={Monster} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

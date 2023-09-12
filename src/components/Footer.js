import React from "react";
import { Icon } from "@iconify/react";
import { Grid, IconButton, Typography, styled } from "@mui/material";

const SOCIAL_ICONS = [
  "memory:message-text",
  "ri:twitter-fill",
  "uil:instagram",
];
const SOURCE_ICONS = [
  { icon: "ic:baseline-apple", title: "APP STORE" },
  { icon: "bxl:play-store", title: "GOOGLE PLAY" },
];

const RootStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export default function Footer({ isHero }) {
  return (
    <RootStyle container>
      <Grid item display="flex" gap={2} sx={{ height: { xs: 40, md: 50 } }}>
        {SOURCE_ICONS.map(({ icon, title }) => (
          <IconButton
            variant="outline"
            sx={{
              borderRadius: 1,
              backgroundColor: isHero ? "#000000" : "#fff",
              border: `1px solid ${!isHero ? "#000000" : "#fff"}`,
            }}
          >
            <Icon icon={icon} color="#00D54B" height={32} width={30} />
            <Typography
              variant="subtitle2"
              color={isHero ? "white" : "#000000"}
            >
              {title}
            </Typography>
          </IconButton>
        ))}
      </Grid>

      <Grid
        item
        gap={1}
        sx={{ display: { xs: "block", md: "flex" } }}
        display="flex"
        alignItems="center"
      >
        {isHero && (
          <Grid item>
            <IconButton sx={{ pr: 8, display: { xs: "none", md: "block" } }}>
              <Icon
                icon="quill:arrow-down"
                color="#00D54B"
                height={32}
                width={30}
              />
            </IconButton>
          </Grid>
        )}
        <Grid item py={2}>
          <Typography
            variant="body1"
            color="#B6B6B6"
            fontFamily="sans-serif"
            sx={{
              textAlign: { xs: "center", md: "start" },
              width: { xs: "100%", md: 380 },
            }}
            px={3}
          >
            Brokerage services by CashApp investing LLC. member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App Facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </Typography>
        </Grid>
        <Grid item>
          {SOCIAL_ICONS.map((icon) => (
            <IconButton>
              <Icon
                icon={icon}
                color={isHero ? "#fff" : "#000000"}
                height={26}
                width={30}
              />
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </RootStyle>
  );
}

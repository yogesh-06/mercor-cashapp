import { Icon } from "@iconify/react";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { makeCapitalise } from "../utils/utils";
export default function Footer() {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid display="flex" gap={2} height={50}>
        <IconButton
          sx={{
            gap: 1,
            px: 2,
            borderRadius: 1,
            backgroundColor: "#000000",
            border: "1px solid white",
          }}
          variant="outline"
        >
          <Icon
            icon="ic:baseline-apple"
            color="#00D54B"
            height={32}
            width={30}
          />
          <Typography variant="subtitle2" color="white">
            {makeCapitalise("App Store")}
          </Typography>
        </IconButton>

        <IconButton
          sx={{
            gap: 1,
            px: 2,
            borderRadius: 1,
            backgroundColor: "#000000",
            border: "1px solid white",
          }}
          variant="outline"
        >
          <Icon icon="bxl:play-store" color="#00D54B" height={32} width={30} />
          <Typography variant="subtitle2" color="white">
            {makeCapitalise("Google Play")}
          </Typography>
        </IconButton>
      </Grid>
      <IconButton
        sx={{
          px: 2,
        }}
      >
        <Icon icon="quill:arrow-down" color="#00D54B" height={32} width={30} />
      </IconButton>
      <Grid display="flex" alignItems="center" gap={2}>
        <Typography
          variant="body1"
          color="#B6B6B6"
          fontFamily="sans-serif"
          width={330}
        >
          Brokerage services by CashApp investing LLC. member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App Facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </Typography>
        <Grid gap={1}>
          <IconButton>
            <Icon
              icon="memory:message-text"
              color="white"
              height={26}
              width={30}
            />
          </IconButton>{" "}
          <IconButton>
            <Icon icon="ri:twitter-fill" color="white" height={26} width={30} />
          </IconButton>{" "}
          <IconButton>
            <Icon icon="uil:instagram" color="white" height={26} width={30} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Floor from "../assets/images/investing-floor.png";
import Graph1 from "../assets/images/investing-graph-1.png";
import Graph2 from "../assets/images/investing-graph-2.png";
import Graph3 from "../assets/images/investing-graph-3 1.png";
import StockPhone from "../assets/images/investing-stocks.png";
import BitcoinPhone from "../assets/images/investing-bitcoin.png";

import Footer from "../components/Footer";

export default function Investing() {
  return (
    <Grid
      height="100vh"
      backgroundColor="#00D54B"
      position="relative"
      overflow="hidden"
    >
      <Box
        component="img"
        src="/static/Vector.png"
        width="100%"
        sx={{ position: "absolute", zIndex: 0 }}
      />
      <Box
        component="img"
        src={Floor}
        width="100%"
        sx={{
          height: { xs: 250, md: "auto" },
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          pt: { xs: 3, md: 6 },
          height: { xs: "auto", md: "90%" },
        }}
      >
        <Typography variant="h2" sx={{ color: "#fff" }}>
          Investing
        </Typography>
        <Grid
          container
          gap={6}
          zIndex={5}
          sx={{
            pt: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
            zIndex: 15,
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              px: 1,
              gap: { xs: 1, md: 8 },
              display: "flex",
              flexDirection: { xs: "row-reverse", md: "row" },
            }}
          >
            <Grid
              sx={{
                width: 340,
                pt: { xs: 2, md: 6 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#000000",
                  pb: { xs: 0, md: 1 },
                }}
              >
                Stocks
              </Typography>
              <Typography variant="caption" fontFamily="sans-serif">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </Typography>
              <Grid sx={{ pt: 2, display: { xs: "block", md: "none" } }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#000000",
                    pb: { xs: 0, md: 1 },
                  }}
                >
                  Bitcoin
                </Typography>
                <Typography variant="caption" fontFamily="sans-serif">
                  Cash App is the fastest way to convert dollars to bitcoin.
                  From your home screen, six taps are all it takes to stack
                  sats, buy an entire bitcoin, or just see what it’s all about.
                </Typography>
              </Grid>
            </Grid>
            <Box component="img" src={StockPhone} />
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", md: "flex" } }}
            md={5}
            gap={8}
            display="flex"
          >
            <Box component="img" src={BitcoinPhone} />
            <Grid width={340} pt={6}>
              <Typography variant="h4" color="#000000" pb={1}>
                Bitcoin
              </Typography>
              <Typography variant="caption" fontFamily="sans-serif">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        textAlign="end"
        zIndex={5}
        sx={{ position: "relative", top: { xs: "-42%", md: "-69%" } }}
      >
        <Box component="img" src={Graph2} />
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        zIndex={5}
        sx={{
          position: "absolute",
          top: { xs: "52%", md: "60%" },
        }}
      >
        <Grid item>
          <Box component="img" src={Graph1} />
        </Grid>
        <Grid item>
          <Box component="img" src={Graph3} />
        </Grid>
      </Grid>
      <Grid
        sx={{
          zIndex: 5,
          px: { xs: 1, md: 12 },
          position: "relative",
          top: { xs: "-23%", md: "-53%" },
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}

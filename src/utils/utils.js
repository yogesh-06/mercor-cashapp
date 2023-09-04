import { Typography } from "@mui/material";
import React from "react";

export function Title({ title, style }) {
  return (
    <Typography
      sx={{
        ...style,
        fontWeight: 800,
        fontSize: 40,
        lineHeight: 40,
      }}
    >
      {title}
    </Typography>
  );
}

export function makeCapitalise(str) {
  return str?.toUpperCase();
}

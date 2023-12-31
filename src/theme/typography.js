// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "AgrandirHeavy";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 350,
  fontWeightMedium: 550,
  fontWeightBold: 650,
  h1: {
    fontWeight: 800,
    lineHeight: 54 / 64,
    fontSize: pxToRem(90),
    ...responsiveFontSizes({ sm: 190, md: 190, lg: 170 }),
  },
  h2: {
    fontWeight: 650,
    lineHeight: 64 / 70,
    fontSize: pxToRem(34),
    ...responsiveFontSizes({ sm: 34, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 38 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 800,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 8, md: 10, lg: 12 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 12 / 14,
    fontSize: pxToRem(12),
  },
  body1: {
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(9),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.2,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 12, md: 16, lg: 17 }),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;

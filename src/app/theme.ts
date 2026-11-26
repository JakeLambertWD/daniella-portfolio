import { createTheme } from "@mantine/core";
import { colors } from "@/utils/constants";

export const theme = createTheme({
  /** Put your mantine theme override here */
  white: colors.ivory,
  black: colors.espresso,
  fontFamily: "var(--font-body), system-ui, sans-serif",
  headings: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontWeight: "400",
  },

  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1184px",
    xl: "1440px",
    xxl: "1680px",
  },

  colors: {
    // Blush scale, lightest to darkest. Index 0 keeps the original accent so
    // existing `persianPink[0]` usages are unchanged.
    persianPink: [
      "#D8B6B6",
      "#F7EFEF",
      "#EEDDDD",
      "#E3CACA",
      "#C99D9D",
      "#B78585",
      "#A06F6F",
      "#8A5A5A",
      "#6E4747",
      "#523535",
    ],
  },
});

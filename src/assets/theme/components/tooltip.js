/**
=========================================================
* dhiraj bhor portfolio 1
=========================================================

* Product Page: https://www.dhiraj.com
* Copyright 2023 dhiraj bhor

Coded by dhirajbhor11

 =========================================================

* .
*/

// @mui material components
import Fade from "@mui/material/Fade";

// dhirajbhor11 portfolio base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// dhirajbhor11 portfolio helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

export default {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: black.main,
    },
  },
};

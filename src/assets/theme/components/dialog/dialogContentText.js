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

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

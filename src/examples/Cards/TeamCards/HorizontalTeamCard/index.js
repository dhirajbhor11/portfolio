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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// dhirajbhor11 portfolio components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ image, name, position, description, link }) {
  return (
    <Link to={link}>
      <Card sx={{ mt: 3 }}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
            <MKBox width="100%" pt={2} pb={1} px={2}>
              <MKBox
                component="img"
                src={image}
                alt={name}
                width="100%"
                borderRadius="md"
                shadow="lg"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
            <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
              <MKTypography variant="h5">{name}</MKTypography>
              <MKTypography variant="h6" color={position.color} mb={1}>
                {position.label}
              </MKTypography>
              <MKTypography variant="body2" color="text">
                {description}
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;

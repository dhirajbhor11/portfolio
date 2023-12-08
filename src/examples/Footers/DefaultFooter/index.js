/*
=========================================================
* dhiraj bhor portfolio 1
=========================================================

* Product Page: https://www.dhiraj.com
* Copyright 2023 dhiraj bhor

Coded by dhirajbhor11

 =========================================================

* .
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

function DefaultFooter() {
  // const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container sx={{ mb: 10 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                Want to Connect With Me!
              </MKTypography>
              <MKTypography variant="body1" color="text">
                dhirajbhor11@gmail.com
              </MKTypography>
              <MKTypography variant="body1" color="text">
                +91-7972337103
              </MKTypography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              my={{ xs: 5, lg: "auto" }}
              mr={{ xs: 0, lg: "auto" }}
              sx={{ textAlign: { xs: "center", lg: "right" } }}
            >
              <MKSocialButton
                component="a"
                href="mailto:dhirajbhor11@gmail.com"
                target="_blank"
                color="youtube"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-google" />
                &nbsp;email
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://api.whatsapp.com/send?phone=+917972337103"
                target="_blank"
                color="vimeo"
                sx={{ mr: 1 }}
              >
                <i className="fab fa-whatsapp" />
                &nbsp;whatsapp
              </MKSocialButton>
              <MKSocialButton
                component="a"
                href="https://www.linkedin.com/in/dhirajbhor11/"
                target="_blank"
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
                &nbsp;linkedin
              </MKSocialButton>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </MKBox>
  );
}

export default DefaultFooter;

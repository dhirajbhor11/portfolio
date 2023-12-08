/*
=========================================================
* Dhiraj Portfolio
=========================================================

* Product Page: https://www.dhiraj.com/
* Copyright 2024 dhiraj bhor

Coded by dhirajbhor11

 =========================================================

* .
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faFire, faCloud } from "@fortawesome/free-solid-svg-icons";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import DesignBlocks from "pages/LandingPages/AboutUs/sections/DesignBlocks";
import Projects from "pages/LandingPages/AboutUs/sections/Projects";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import Counters from "pages/LandingPages/AboutUs/sections/Counters";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "#",
          label: "Download Resume",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Dhiraj Bhor
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Full-Stack Developer | Data Analyst | React Developer
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Skills
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <Tooltip title="React" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <i className="fab fa-react" />
                </MKTypography>
              </Tooltip>
              <Tooltip title="python" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <i className="fab fa-python" />
                </MKTypography>
              </Tooltip>
              <Tooltip title="nodejs" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <i className="fab fa-node" />
                </MKTypography>
              </Tooltip>
              <Tooltip title="css3" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <i className="fab fa-css3" />
                </MKTypography>
              </Tooltip>
              <Tooltip title="java-script" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <i className="fab fa-js" />
                </MKTypography>
              </Tooltip>
              <Tooltip title="power-bi" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <FontAwesomeIcon icon={faChartColumn} />
                </MKTypography>
              </Tooltip>
              <Tooltip title="Firebase" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <FontAwesomeIcon icon={faFire} />
                </MKTypography>
              </Tooltip>
              <Tooltip title="AWS,GCP" placement="top">
                <MKTypography component="a" variant="h3" color="white" href="#" mr={3}>
                  <FontAwesomeIcon icon={faCloud} />
                </MKTypography>
              </Tooltip>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <DesignBlocks />
        <Projects />
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter />
      </MKBox>
    </>
  );
}

export default AboutUs;

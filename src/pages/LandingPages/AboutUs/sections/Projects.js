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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import dhirajGpt from "assets/images/dhirajgpt.png";
import triptWith from "assets/images/tripWith.png";
import powerBi from "assets/images/power-bi.png";
import game_2048 from "assets/images/2048.png";

function Projects() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Projects
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              A snapshot of my contributions and achievements.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={dhirajGpt}
                name="dhirajGpt"
                position={{ color: "info", label: "Prortfolio Chatbot" }}
                description="Introducing my portfolio chatbot – a conversational showcase of my skills and accomplishments. Uncover the details of my resume through interactive dialogue, making the exploration of my professional background both informative and engaging."
                link="https://github.com/dhirajbhor11/dhirajGPT"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={triptWith}
                name="TripWith"
                position={{ color: "info", label: "Trip Planning Portal" }}
                description="Embark on seamless travel adventures with our innovative trip planning website. Empowering organizers to craft and share exciting journeys, while providing a platform for companions to effortlessly join these trips. Elevate your travel experience with us."
                link="https://github.com/dhirajbhor11/TripWith"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={powerBi}
                name="Sales Report"
                position={{ color: "info", label: "Power Bi Report" }}
                description="Experience data-driven decision-making with our Power BI sales report. Gain a competitive edge by exploring sales trends, performance metrics, and actionable insights, all presented in an easily digestible visual format."
                link="https://github.com/dhirajbhor11/Sales-Report"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={game_2048}
                name="2048"
                position={{ color: "info", label: "Number Game" }}
                description="Dive into the addictive challenge of our 2048 game! Merge tiles strategically to reach the elusive 2048 tile and beyond. With sleek design and intuitive gameplay, this puzzle will test your wit and keep you entertained for hours."
                link="https://github.com/dhirajbhor11/2048"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;

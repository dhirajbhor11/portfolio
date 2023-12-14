/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={2} my={6}>
      <Container>
        <Grid item xs={12} md={8} sx={{ mb: 6 }}>
          <MKTypography variant="h3">Education</MKTypography>
          <MKTypography variant="body2" opacity={0.8}>
            {""}
          </MKTypography>
        </Grid>
        <Grid container item xs={12} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Master of Computer Application"
                  year="2019-2022"
                  college="Dr.D.Y.Patil Institute Of MCA and Management,Akurdi,Pune"
                  university="Savitribai Phule Pune University"
                  percentage="79%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Bachelor of Computer Application"
                  year="2016-2019"
                  college="A.C.S College, Narayangaon,Pune"
                  university="Savitribai Phule Pune University"
                  percentage="63.71%"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="book"
                  title="12 th"
                  year="2016"
                  college="G.R.P. Sabnis, Narayangaon,Pune"
                  board="Maharashtra State Board of Secondary & Higher Secondary Education, Pune"
                  percentage="64.56%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="book"
                  title="10 th"
                  year="2014"
                  school="N.V.Ranjani,Pune"
                  board="Maharashtra State Board of Secondary & Higher Secondary Education, Pune"
                  percentage="63.25%"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

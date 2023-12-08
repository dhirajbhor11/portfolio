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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// dhirajbhor11 portfolio components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function ProjectCard({ projectName, projectDetail, projecteDesc, index }) {
  return (
    <Grid container justifyContent="center" py={1}>
      <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 0 }}>
        <MKBox alignItems="left">
          <MKTypography variant="h4">{`${index + 1}) ${projectName}`}</MKTypography>
        </MKBox>
        <MKTypography component="span" variant="body2" fontWeight="bold" ml={1}>
          {projectDetail}
        </MKTypography>
        <MKTypography variant="body1" fontWeight="light" color="text" ml={2}>
          {projecteDesc.map((data, index) => (
            <span key={projectName + index}>
              <span>{data}</span>
              <br />
            </span>
          ))}
        </MKTypography>
      </Grid>
    </Grid>
  );
}

// Typechecking props for the ProjectCard
ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDetail: PropTypes.string,
  projecteDesc: PropTypes.array,
  index: PropTypes.number,
};

export default ProjectCard;

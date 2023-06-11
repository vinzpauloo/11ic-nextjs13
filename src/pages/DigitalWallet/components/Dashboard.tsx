import React from "react";

// ** MUI Components
import { Grid } from "@mui/material";

// ** Custom Components
import Container from "./Container";

const Dashboard = () => {
  return (
    <Container>
        <Grid container>
            {/* Left Side / 11c  */}
            <Grid item sm={4}>
                LEFT
            </Grid>

            {/* Right Side //  */}
            <Grid item sm={8}>
                RIGHT
            </Grid>
        </Grid>
    </Container>
  );
};

export default Dashboard;

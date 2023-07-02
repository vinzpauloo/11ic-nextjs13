// ** MUI Imports
import { Paper, Stack, Typography } from "@mui/material";

// =================================================================
const Introduction = () => {
  return (
    <Paper sx={{ backgroundColor: "#313131", padding: 2 }}>
      <Stack direction="column" gap={2}>
        <Typography sx={{ color: "#FFF", fontSize: 12, fontWeight: 900 }}>
          11ic IS FULLY LICENSED AND REGULATED IN THE PAGCOR TO PROVIDE ONLINE
          SPORTSBOOK WAGERING AND OTHER GAMBLING SERVICES. IT SHOULD BE NOTED
          THAT ONLINE GAMBLING DEBTS ARE ENFORECEABLE BY LAW IN THE PHILIPPINES.
        </Typography>

        <Typography sx={{ color: "#FFF", fontSize: 11 }}>
          These Terms and Conditions are effective as of 1st September 2018 and
          supercede any previous terms and conditions. If you do not agree to
          any of these Terms and Conditions, as may be amended from time to time
          or any other rules in force, you should not use or access the
          website(s) and the services.
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Introduction;

// ** MUI Imports
import { Paper, Typography } from "@mui/material";

// ** Data Imports
import AffiliateData from "@/data/AffiliateData";

// =================================================
const AffiliateDetails = () => {
  return (
    <>
      {AffiliateData.map((item, index) => (
        <Paper key={index} sx={{ backgroundColor: "#313131", mb: 2, p: 2 }}>
          <Typography sx={{ color: "#FFF", fontSize: 11 }}>
            {index + 1}. {item.details}
          </Typography>
        </Paper>
      ))}
    </>
  );
};

export default AffiliateDetails;

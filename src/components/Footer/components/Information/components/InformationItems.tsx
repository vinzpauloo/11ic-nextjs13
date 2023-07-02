// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Type Imports
import { InformationItemsProps } from "@/types/information-items";

// =================================================================
const InformationItems = ({
  sxWrap,
  firstSxTitle,
  secondSxTitle,
  firstTitle,
  secondTitle,
  firstOnClick,
  secondOnClick,
}: InformationItemsProps) => {
  return (
    <Box sx={sxWrap}>
      <Typography sx={firstSxTitle} onClick={firstOnClick}>
        {firstTitle}
      </Typography>
      <Typography sx={secondSxTitle} onClick={secondOnClick}>
        {secondTitle}
      </Typography>
    </Box>
  );
};

export default InformationItems;

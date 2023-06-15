// ** React Imports
import React from "react";

// ** MUI Imports
import { AccordionDetails, Box, Typography } from "@mui/material";

// ** Types
interface AccordionDetailedProps {
  description: string;
  image: string;
}

// =================================================================
const AccordionDetailed = ({ description, image }: AccordionDetailedProps) => {
  return (
    <AccordionDetails sx={styles.container}>
      <Typography sx={styles.description}>{description}</Typography>
      <Box component="img" src={image} sx={styles.image} />
    </AccordionDetails>
  );
};

const styles = {
  container: {
    backgroundColor: "#323432",
  },
  description: {
    color: "#FFF",
    fontSize: {
      xs: 12,
      sm: 14,
    },
  },
  image: {
    objectFit: "contain",
    objectPosition: "center",
    width: "100%",
    height: "auto",
  },
};

export default AccordionDetailed;

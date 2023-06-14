import React from "react";

// ** Next Imports
import Image from "next/image";

// ** MUI imports
import { Box, SxProps } from "@mui/material";

// ** Custom Components
import MenuButton from "@/scenes/Profile/components/MenuButton";

const imgpath = "/images/profile/icons";

type Props = {};

const FilterPaymentOptions = (props: Props) => {
  const paymentButtons = [
    { id: 1, src: `${imgpath}/expresspay.png`, alt: "express" },
  ];

  return (
    <Box sx={styles.container}>
      {paymentButtons.map((btn) => (
        <MenuButton key={btn.id} sx={styles.menuButton}>
          <Image src={`${btn.src}`} alt={btn.alt} width={20} height={20} />
          <Box>Express</Box>
        </MenuButton>
      ))}
    </Box>
  );
};

export default FilterPaymentOptions;

const styles: { [key: string]: SxProps } = {
  container: {
    display: "flex",
    gap: "1rem",
  },
  menuButton: {
    minWidth: "initial",
    width: "137px",
    height: "auto",
    padding: 0,
    backgroundColor: "rgb(20,20,20)",
    paddingInline: ".8em",
    paddingBlock: "1em",
    justifyContent: "center",
  },
};

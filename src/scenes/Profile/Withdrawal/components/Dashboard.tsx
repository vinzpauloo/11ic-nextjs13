"use client";

import React from "react";

// ** Next Imports
import Image from "next/image";

// ** MUI Imports
import { Box } from "@mui/material";

// ** Custom Components
import ListMenuButtons from "@/scenes/Profile/components/ListMenuButtons";
import MenuButton from "@/scenes/Profile/components/MenuButton";
import ContentWrap from "@/scenes/Profile/components/ContentWrap";

// ** Views
import ContentBankWithdrawal from "../views/ContentBankWithdrawal";
import ContentCryptoWithdrawal from "../views/ContentCryptoWithdrawal";

const Dashboard = () => {
  // Left buttons
  const buttonsList = [
    {
      id: 1,
      text: "Bank W/D",
      link: "ContentBankWithdrawal",
      icon: "/images/profile/icons/bank-transfer.png",
    },
    {
      id: 2,
      text: "Crypto W/D",
      link: "ContentCryptoWithdrawal",
      icon: "/images/profile/icons/usdt.png",
    },
  ];

  // ** Views Map
  const viewsMap: { [key: string]: React.ComponentType } = {
    ContentBankWithdrawal: ContentBankWithdrawal,
    ContentCryptoWithdrawal: ContentCryptoWithdrawal,
  };

  // This is the dynamic content // defaults to DigitalWallet
  const [currentComponent, setCurrentComponent] =
    React.useState<React.ComponentType>(ContentBankWithdrawal);

  return (
    <Box sx={styles.container}>
      <Box>
        <ListMenuButtons
          views={viewsMap}
          heading={<Box>Withdrawal</Box>}
          render={(handleClick) =>
            buttonsList.map((buttonitem) => (
              <MenuButton
                key={buttonitem.id}
                onClick={() => {
                  setCurrentComponent(handleClick(buttonitem.link));
                }}
              >
                <Image src={buttonitem.icon} alt="" width={20} height={20} />
                {buttonitem.text}
              </MenuButton>
            ))
          }
        />
      </Box>

      <ContentWrap>{currentComponent}</ContentWrap>
    </Box>
  );
};

export default Dashboard;

const styles = {
  container: {
    padding: {
      xs: "1rem",
      md: "2rem",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: "2rem",
  },
};

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
import ContentDigitalWallet from "../views/ContentDigitalWallet";
import ContentBankTransfer from "../views/ContentBankTransfer";
import ContentOnlinePay from "../views/ContentOnlinePay";
import ContentUSDT from "../views/ContentUSDT";

const Dashboard = () => {
  const buttonsList = [
    {
      id: 1,
      text: "Digital Wallet",
      link: "ContentDigitalWallet",
      icon: "/images/profile/icons/deposit.png",
    },
    {
      id: 2,
      text: "Bank Transfer",
      link: "ContentBankTransfer",
      icon: "/images/profile/icons/bank-transfer.png",
    },
    {
      id: 3,
      text: "Online Pay",
      link: "ContentOnlinePay",
      icon: "/images/profile/icons/online-pay.png",
    },
    {
      id: 4,
      text: "USDT",
      link: "ContentUSDT",
      icon: "/images/profile/icons/usdt.png",
    },
  ];

  // ** Views Map
  const viewsMap: { [key: string]: React.ComponentType } = {
    ContentDigitalWallet: ContentDigitalWallet,
    ContentBankTransfer: ContentBankTransfer,
    ContentOnlinePay: ContentOnlinePay,
    ContentUSDT: ContentUSDT,
  };

  // This is the dynamic content // defaults to DigitalWallet
  const [currentComponent, setCurrentComponent] =
    React.useState<React.ComponentType>(ContentDigitalWallet);

  return (
    <Box sx={styles.container}>
      <Box>
        <ListMenuButtons
          views={viewsMap}
          heading={<Box>Deposit</Box>}
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
    gap: {
      xs: ".5rem",
      md: "2rem",
    },
  },
};

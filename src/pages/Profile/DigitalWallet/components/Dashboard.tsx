import React from "react";

// ** MUI Components
import { Box,Button} from "@mui/material";

// ** Custom Components
import ListMenuButtons from "@/pages/Profile/components/ListMenuButtons";
import MenuButton from "@/pages/Profile/components/MenuButton";
import ContentWrap from "@/pages/Profile/components/ContentWrap";


const Dashboard = () => {

  const buttonsList = [
    {id : 1, text : 'Digital Wallet', link : '/profile/wallet-management', icon : '/images/profile/icons/deposit.png'},
    {id : 2, text : 'Bank Transfer', link : '/profile/wallet-management', icon : '/images/profile/icons/bank-transfer.png'},
    {id : 3, text : 'Online Pay', link : '/profile/wallet-management', icon : '/images/profile/icons/online-pay.png'},
    {id : 4, text : 'USDT', link : '/profile', icon : '/images/profile/icons/usdt.png'},
  ]

  return (
    <Box sx={styles.container}>
      <Box>
        <ListMenuButtons 
          render={ ( handleClick )=> (
              buttonsList.map( buttonitem => 
              <MenuButton key={buttonitem.id} onClick={ () => handleClick(buttonitem.link) }>
                <img src={buttonitem.icon} />
                {buttonitem.text}
              </MenuButton>) 
          )}
          heading={ <Box>Deposit</Box> }  />
      </Box>

      <ContentWrap>
        Wallet content
      </ContentWrap>

    </Box>
  );
};

export default Dashboard;

const styles = {
  container : {
    padding: '2rem',
    display:'flex',
    gap: '2rem',
    height:'100%',
  }
}

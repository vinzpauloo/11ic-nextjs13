import React from "react";

// ** MUI Components
import { Box,Grid, Typography } from "@mui/material";
import ListMenuButtons from "../../components/ListMenuButtons";


const Dashboard = () => {

  const buttonsList = [
    {id : 1, text : 'Digital Wallet'},
    {id : 2, text : 'Bank Transfer'},
    {id : 3, text : 'Online Pay'},
    {id : 4, text : 'USDT'},
  ]

  return (
    <div style={styles.container}>
      <Box>
        <ListMenuButtons 
          render={ ( handleClick )=> (
              buttonsList.map( item => <Box key={item.id} onClick={ () => handleClick(item.text) }>{item.text}</Box>)
          )}
          heading={ <Box>Deposit</Box> }  />
      </Box>

      <Box>

      </Box>

    </div>
  );
};

export default Dashboard;

const styles = {
  container : {
    padding: '1rem'
  }
}

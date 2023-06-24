"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { SxProps, Typography } from "@mui/material";

// ** Custom components
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout/Layout.component";
import TextBody from "@/components/Text/TextBody.component";
import BoxWrapper from "@/components/BoxWrapper/BoxWrapper.component";

// ** Data imports
import terms from "@/data/TermsConditions";
import VIPPackagesTable from "./views/VIPPackagesTable";
import SliderCards from "./components/SliderCards";

const VIPContent = () => {
  return (
    <Layout sx={{paddingTop : {
      xs : '5rem',
      md : '12rem'
      }}}>

      <SliderCards />

      <BoxWrapper mt={['1.5rem']}>
        <Typography sx={headingSx} color='white' component='h5'>Rebate</Typography>
        <TextBody>Daily turnover requirements ≥ 5,000 INR, Daily cash back bonus based on the proportion of net losses.</TextBody>

        <VIPPackagesTable />
        
      </BoxWrapper>

      <BoxWrapper>
        <Typography sx={headingSx} color='white' component='h5'>Terms and Conditions</Typography>
          <ol style={olStyles.orderedListWrapper}>
            {terms.map( (item, index) => (
              <li key={index} style={olStyles.orderedList}><TextBody>{item}</TextBody></li>
            ))}
          </ol>
      </BoxWrapper>

    </Layout>
  );
};

export default ProtectedRoute(VIPContent);

const headingSx : SxProps = {
  marginBottom : {
    xs : '.5rem',
    sm : '1.5rem'
  }
}

const olStyles : { [key : string ] : React.CSSProperties } = {
  orderedListWrapper : {
    paddingLeft: '1rem',
    display: 'grid',
    gap : '.7rem'
  },
  orderedList : {
    color : 'var(--accent)'
  }
  
}
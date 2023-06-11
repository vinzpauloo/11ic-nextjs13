import React, { PropsWithChildren } from 'react'

// ** MUI Components
import { Container as MUIContainer } from "@mui/material";

interface IProps extends PropsWithChildren  {}

const Container = (props: IProps) => {
  return (
    <MUIContainer sx={styles.container}>{props.children}</MUIContainer>
  )
}

const styles = {
    container: {
      paddingInline: ['1rem', '1rem', 0 ],
      maxWidth:'1136px',
      marginInline : 'auto',
      border: '3px solid red'
    },

};
export default Container
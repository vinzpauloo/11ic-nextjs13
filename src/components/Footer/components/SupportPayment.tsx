// ** React Imports
import React from "react";
import Ticker from "react-ticker";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

const payments = [
  {
    name: "PhonePe",
    image: "/images/footer/support-payment/PhonePe.svg",
  },
  {
    name: "Bank Transfer",
    image: "/images/footer/support-payment/bank-transfer.svg",
  },
  {
    name: "Paytm",
    image: "/images/footer/support-payment/paytm.svg",
  },
  {
    name: "BHIM",
    image: "/images/footer/support-payment/BHIM.svg",
  },
  {
    name: "Skrill",
    image: "/images/footer/support-payment/Skrill.svg",
  },
  {
    name: "Neteller",
    image: "/images/footer/support-payment/Neteller.svg",
  },
  {
    name: "Amazon Pay",
    image: "/images/footer/support-payment/amazon-pay.svg",
  },
  {
    name: "Google Pay",
    image: "/images/footer/support-payment/google-pay.svg",
  },
];

const SupportPayment = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Support Payment</Typography>

      <Ticker speed={5} mode="smooth">
        {({ index }) => (
          <Box sx={styles.tickerWrapper}>
            {payments.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.image}
                alt={item.name}
                sx={styles.image}
              />
            ))}
          </Box>
        )}
      </Ticker>
    </Box>
  );
};

const styles = {
  container: {
    flex: { lg: "1 0 50%" },
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "14px",
    mb: 2,
  },
  tickerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "40px",
  },
  image: {
    width: 100,
    height: "100%",
  },
};

export default SupportPayment;

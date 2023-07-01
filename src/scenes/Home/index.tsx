"use client";

// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import NoticeTicker from "./components/Notice";
import Carousel from "./components/Carousel";
import Sports from "./components/Sports";
import Casino from "./components/Casino";
import Games from "./components/Games";
import BackdropLoader from "@/shared-components/BackdropLoader";

// ** Services
import { useHomeService } from "@/services/api/HomeService";

// ** Third Party Imports
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useQuery } from "@tanstack/react-query";

// ** Zustand Store Imports
import { useHomeStore } from "@/zustand/home-store";

// =================================================================
const Home = () => {
  // ** Fingerprint JS **
  // const { data: fpjsData } = useVisitorData(
  //   { extendedResult: true },
  //   { immediate: true }
  // );

  // ** API **
  const { getHomePageInfo } = useHomeService();

  // ** Zustand Store **
  const {
    setBanner,
    setWebNotices,
    setLiveCasino,
    rummy,
    setRummy,
    lottery,
    setLottery,
    setSupportPayment,
  } = useHomeStore();

  // ** TanStack Query **
  const { isLoading } = useQuery({
    queryKey: ["homePageInfo"],
    queryFn: () =>
      getHomePageInfo({
        params: {},
        data: {
          // ipaddress: fpjsData?.ip,
          // fp: fpjsData?.visitorId,
          // device: fpjsData?.ipLocation?.accuracyRadius,
          ipaddress: "No Ip",
          fp: "No Visitor ID",
          device: 3,
        },
      }),
    onSuccess: (response) => {
      setBanner(response.data.banner);
      setWebNotices(response.data.web_notice);
      setLiveCasino(response.data.live_casino);
      setRummy(response.data.rummy);
      setLottery(response.data.lottery);
      setSupportPayment(response.data.support_payment);
    },
    onError: (error) => {
      console.log(error);
    },
    // enabled: !!fpjsData, // Only fetch when fpjsData is available
  });

  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        {isLoading ? (
          <BackdropLoader description="Loading..." />
        ) : (
          <>
            <Box sx={styles.carouselWrapper}>
              <Carousel />
              <NoticeTicker />
            </Box>
            <Sports />
            <Casino />
            <Games
              title="Rummy"
              firstBackground="linear-gradient(90deg, #F87700 0%, #F2D53C 100%)"
              firstGameTitle={rummy[0]?.title ?? "..."}
              firstBackgroundImage={rummy[0]?.image_link ?? "..."}
              firstAltName="Jili"
              secondBackground="linear-gradient(90deg, #931E1E 0%, #ED215E 100%)"
              secondGameTitle={rummy[1]?.title ?? "..."}
              secondBackgroundImage={rummy[1]?.image_link ?? "..."}
              secondAltName="MPoker"
              firstOnClick={() => (window.location.href = rummy[0]?.url_link)}
              secondOnClick={() => (window.location.href = rummy[1]?.url_link)}
            />
            <Games
              title="Lottery"
              firstBackground="linear-gradient(90deg, #201E93 0%, #5621ED 100%)"
              firstGameTitle={lottery[0]?.title ?? "..."}
              firstBackgroundImage={lottery[0].image_link ?? "..."}
              firstAltName="saba"
              secondBackground="linear-gradient(90deg, #0069B6 0%, #00D8B1 100%);"
              secondGameTitle={lottery[1]?.title ?? "..."}
              secondBackgroundImage={lottery[0].image_link ?? "..."}
              secondAltName="786"
              firstOnClick={() => (window.location.href = lottery[0]?.url_link)}
              secondOnClick={() =>
                (window.location.href = lottery[1]?.url_link)
              }
            />
          </>
        )}
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
  },
  innerContainer: {
    paddingTop: "164px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  carouselWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

export default Home;

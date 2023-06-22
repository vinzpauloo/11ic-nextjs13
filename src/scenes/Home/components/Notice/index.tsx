// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

// ** Third Party Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// ** Zustand Store Imports
import { useHomeStore } from "@/zustand/home-store";

// =================================================================
const NoticeTicker = () => {
  const newsItems = [
    {
      title:
        "Virtual Currency is a currency that does not have a physical form and only exists in digital form, also known as digital currency.",
    },
    {
      title: "lorem Ipsum is simply dummy",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates a quos nisi quas enim ad voluptatibus facere provident voluptatem, quaerat, reprehenderit obcaecati alias temporibus doloribus porro minus quod sint!",
    },
    {
      title:
        " Utot Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias dignissimos totam obcaecati aperiam, nam sequi nostrum tempore iusto tenetur incidunt voluptate praesentium distinctio et dolorem commodi! Consectetur, molestias iure?",
    },
  ];

  const { webNotices } = useHomeStore();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleWrapper}>
        <Typography textTransform="uppercase" sx={styles.title}>
          Notice
        </Typography>
      </Box>
      <Box sx={styles.tickerWrapper}>
        <Swiper
          direction="vertical"
          style={{ height: "25px" }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, type: undefined }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
        >
          {webNotices.map((item: { title: string; body: string }, index) => (
            <SwiperSlide key={index}>
              <Box sx={styles.slideWrapper}>
                <Typography>{`${item.title}: ${item.body}`}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box sx={styles.buttonWrapper}>
          <Button>
            <Typography sx={styles.checkMoreText}>Check More</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    p: {
      xs: 0.5,
    },
    textAlign: "center",
    width: "100px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 900,
  },
  tickerWrapper: {
    width: "100%",
    backgroundColor: "#232323",
    color: "#FFF",
    whiteSpace: "nowrap",
    overflow: "hidden",
    p: {
      xs: 0.5,
    },
  },
  buttonWrapper: {
    backgroundColor: "#F3B867",
    borderRadius: "12px",
    position: "absolute",
    top: {
      xs: 3,
    },
    right: 5,
    zIndex: 1,
  },
  checkMoreText: {
    fontSize: 8,
    color: "#000",
    fontWeight: 900,
  },
  slideWrapper: {
    width: "100%",
    height: "20px",
  },
};

export default NoticeTicker;

// ** React Imports
import React from "react";

// ** MUI Imports
import { Box } from "@mui/material";

// ** Third Party Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// ** Zustand Store Imports
import { useHomeStore } from "@/zustand/home-store";

// ** Mock Data
const sliderImages = [
  {
    image: `https://rare-gallery.com/resol/1366x768/340841-TWICE-Kpop-Kpop-K-Pop-Girls-I-Cant-Stop-Me-Group-Members-Eyes-Wide-Open-Album-Mina-Tzuyu-Sana-Dahyun-Chaeyoung-Jeongyeon-Jihyo-Nayeon-Momo.jpg`,
  },
  {
    image: `/images/slider/gidle.jpg`,
  },
  {
    image: `https://rare-gallery.com/resol/1366x768/342397-BLACKPINK-Kpop-K-pop-Girls-Ice-Cream-Jennie-Rose-Jisoo-Lisa.jpg`,
  },
  {
    image: `https://rare-gallery.com/mocahbig/1374455-le-sserafim-kpop-group-members-4k-pc-wallpaper.jpg`,
  },
];

// =================================================================
const Slider = () => {
  const { banner } = useHomeStore();

  return (
    <Box sx={styles.container}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, type: undefined }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        {banner.length > 0 &&
          banner.map((item: { image_link: string }, index) => {
            return (
              <SwiperSlide key={index}>
                <Box sx={styles.slideWrapper}>
                  <Box
                    component="img"
                    sx={styles.image}
                    alt="main-slider-images"
                    src={item.image_link}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

const styles = {
  container: {
    height: "424px",
    backgroundColor: "#606060",
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    borderRadius: "16px",
  },
  slideWrapper: {
    width: "100%",
    height: "425px",
  },
  image: {
    height: {
      xs: "425px",
      sm: "425px",
      md: "425px",
      lg: "480px",
      xl: "900px",
    },
    width: "100%",
    objectFit: {
      xs: "cover",
      sm: "cover",
      md: "cover",
      lg: "cover",
      xl: "cover",
    },
    objectPosition: "center",
  },
};

export default Slider;

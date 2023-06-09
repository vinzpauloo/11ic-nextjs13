// ** React Imports
import React from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import { Box } from "@mui/material";

// Swiper components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ** Types
interface CasinoRowProps {
  sliderImages: {
    image: string;
    image_link: string;
    status: string;
    url_link: string;
  }[];
  marginBottom?: number;
}

// =================================================================
const CasinoRow = (props: CasinoRowProps) => {
  const { sliderImages, marginBottom } = props;

  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={breakpoints}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      style={{ marginBottom: marginBottom }}
    >
      {sliderImages &&
        sliderImages?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              href={item.url_link}
              style={{ textDecoration: "none" }}
              onClick={(e) => {
                if (item.status === "disable") {
                  e.preventDefault();
                }
              }}
            >
              <Box
                component="img"
                sx={{
                  ...styles.slideItem,
                  opacity: item.status === "disable" ? 0.25 : null,
                }}
                alt="category-row-image"
                src={item.image_link}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

const styles = {
  slideItem: {
    height: {
      xs: "150px",
      sm: "206px",
      md: "206px",
      lg: "206px",
      xl: "206px",
    },
    width: {
      xs: "105px",
      sm: "100px",
      md: "100px",
      lg: "120px",
      xl: "164px",
    },

    objectFit: {
      xs: "cover",
      sm: "cover",
      md: "cover",
      lg: "cover",
      xl: "cover",
    },
    objectPosition: "center",
    borderRadius: "12px",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.25,
      transition: "all 0.3s ease-in-out",
    },
  },
};

const breakpoints = {
  320: {
    slidesPerView: 3,
    spaceBetween: 7,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 7,
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 7,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 7,
  },
  768: {
    slidesPerView: 6,
    spaceBetween: 10,
  },
  992: {
    slidesPerView: 8,
    spaceBetween: 10,
  },
  1200: {
    slidesPerView: 8,
    spaceBetween: 15,
  },
};

export default CasinoRow;

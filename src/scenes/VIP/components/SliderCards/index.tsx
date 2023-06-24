import React from 'react'

// ** MUI Imports
import { Box } from "@mui/material";

// ** Third Party Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "@/styles/vipCardSwiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import VIPCardItem from '../VIPCardItem';

// ** Data
import { levelsMap, userVIPDataDummy } from '@/data/VIPCardsData';

type Props = {}

const SliderCards = (props: Props) => {
    return (
        <Box>
            <Swiper
                loop={true}
                slidesPerView='auto'
                spaceBetween={10}

                breakpoints={{

                    600: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                    },
                }}

                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
            >   
                {
                    levelsMap.map( (level, index) => 
                        <SwiperSlide key={index + level.label}>
                            <VIPCardItem cardLevel={index} userVIPData={userVIPDataDummy} />
                        </SwiperSlide>
                    )
                }
                

            </Swiper>
        </Box>
    )
}

export default SliderCards
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import './Swiper.css'

import { Reviews } from '../../data/ReviewsData'

const SwiperRev = () => {
    return (
        <>
            <Swiper className="mySwiper"
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    >
                {Reviews.map(rev => (
                    <SwiperSlide>
                        <div key={rev.id}>
                            <span>{rev.title}</span>
                            <p>{rev.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperRev

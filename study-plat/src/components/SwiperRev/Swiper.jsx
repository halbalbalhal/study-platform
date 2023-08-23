import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css/pagination'

import { Pagination, Keyboard, Mousewheel } from "swiper"

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
                    keyboard={true}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Keyboard, Mousewheel]}
                    >
                {Reviews.map(rev => (
                    <SwiperSlide>
                        <div key={rev.id} className="rev__block">
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

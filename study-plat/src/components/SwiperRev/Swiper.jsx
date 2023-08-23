// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Keyboard, Mousewheel, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"

import './Swiper.css'

import { Reviews } from '../../data/ReviewsData'

const SwiperRev = () => {
    return (
        <>
            <span className="rev__title">What people say about us</span>

            <Swiper style={{
                        "--swiper-pagination-color": "#AE60EB",
                    }}
                    className="mySwiper"
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
                    <SwiperSlide className="swiperslide">
                        <div key={rev.id} className="rev__block">
                            <span className="rev__block__title">{rev.title}</span>
                            <p className="rev__block__text">{rev.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            

            {/* second swiper for mobile devices */}
            <Swiper style={{
                        "--swiper-pagination-color": "#AE60EB",
                        "--swiper-navigation-color": "#AE60EB"
                    }}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {Reviews.map(rev => (
                    <SwiperSlide className="swiperslide_2">
                        <div key={rev.id} className="rev__block">
                            <span className="rev__block__title">{rev.title}</span>
                            <p className="rev__block__text">{rev.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperRev

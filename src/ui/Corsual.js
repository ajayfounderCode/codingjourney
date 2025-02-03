import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
    const slides = [
        { id: 1, image: "https://www.youtube.com/embed/gw7MfmWJ1uo?si=72QR4LGKaewmc-vD" },
        { id: 2, image: "https://www.youtube.com/embed/5D1i-0gOxjw?si=-dQvJtj7UXtipfQT" },
        { id: 3, image: "https://www.youtube.com/embed/HQ2UD5lGr3E?si=n1oj5nyPlPvjn1vp" },
    ];

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* <img src={slide.image} alt={`Slide ${slide.id}`} className="carousel-image" /> */}
                        <iframe class='carousel-image' src="https://www.youtube.com/embed/gw7MfmWJ1uo?si=72QR4LGKaewmc-vD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                        // clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;

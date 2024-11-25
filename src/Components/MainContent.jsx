import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Style/MainContent.css";
import { Pagination } from "swiper/modules";
import { GiDuffelBag } from "react-icons/gi";

export default function MainContent() {
  // SLIDER DATA
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  // console.log(sliderData);

  const handleSlide = (a) => {
    // console.log(a)
    const detailOfThisLocation = sliderData.find((s) => s.location === a);
    setDetail(detailOfThisLocation);
  };

  // console.log(detail);

  return (
    <div className="w-[1440px] grid grid-cols-2 gap-16 mx-auto mt-40">
      {/* NAME */}

      {detail ? (
        <>
          <div className="relative">
            <h1 className="font-display4 font-extrabold text-8xl text-white">
              {detail?.location}
            </h1>
            <p className="font-display2 font-medium text-white mt-5">
              {detail?.description}
            </p>
            {detail && (
              <button className="w-36 h-12 bg-[#F9A51A] mt-5 rounded-lg absolute bottom-16 left-0">
                Booking
              </button>
            )}
          </div>
        </>
      ) : (
        <p className="font-display4 font-extrabold text-8xl text-white">
          WELCOME TO TRAVEL <GiDuffelBag className="text-white mt-4" />
        </p>
      )}

      {/* SLIDER */}

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderData.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative"
                onClick={() => handleSlide(slide.location)}
              >
                <img src={slide.image} alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl font-bold px-4 py-2 rounded-md font-display3">
                    {slide.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 
      <div className="flex gap-5">
        {sliderData.map((slide) => <img className="w-[250px] h-[416px]" src={slide.image}></img>)}
      </div> */}
    </div>
  );
}

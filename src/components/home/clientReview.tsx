"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const ClientService = () => {
  return (
    <div className="container mt-10">
      <h2 className="font-bold mb-3">Client Review</h2>
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          <SwiperSlide>
            <div className="h-[400px] w-full bg-lighter flex justify-center items-center flex-col rounded-md">
              <p className="font-semibold text-xl mb-2">Arko Roy Badhon</p>
              <p className="">Service is very good!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] w-full bg-lighter flex justify-center items-center flex-col">
              <p className="font-semibold text-xl mb-2">Arko Roy Badhon</p>
              <p className="">Service is very good!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] w-full bg-lighter flex justify-center items-center flex-col">
              <p className="font-semibold text-xl mb-2">Arko Roy Badhon</p>
              <p className="">Service is very good!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientService;

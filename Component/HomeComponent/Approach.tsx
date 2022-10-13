import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Data from "../../Utils/data";
import Card from "../Subcomponent/Card";
function Approach() {
  console.log("data", Data);
  return (
    <div className="approach-section">
      <div className="under-expert-section">
        <div className="under-approach-section-left">
          <p>Customer Firsr Approach</p>
          <h1>First choice of procurement partners across global</h1>
        </div>
        <div className="approach-slider">
          <Swiper
            slidesPerView={2.8}
            spaceBetween={66}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              1198: {
                slidesPerView: 2.8,
              },
              1099: {
                slidesPerView: 2.6,
                spaceBetween: 50,
              },
              970: {
                slidesPerView: 2.2,
                spaceBetween: 50,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {Data.card &&
              Data.card.map((x: any, idx: number) => {
                return (
                  <SwiperSlide key={idx}>
                    <Card data={x} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Approach;

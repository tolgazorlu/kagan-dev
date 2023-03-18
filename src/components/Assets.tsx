// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import Card from "./Card";

const assets = [
  { name: "asset-1", url: "src/assets/game/dunklogo.png", href: "#" },
  { name: "asset-2", url: "src/assets/game/silBastanLogo.png", href: "#" },
  { name: "asset-3", url: "src/assets/game/sillyBasketballIcon.png", href: "#" },
  { name: "asset-4", url: "src/assets/game/sudokulogonew.png", href: "#" },
];

export default () => {
  return (
    <div className="h-5/6 md:px-24 w-full flex flex-col">
      <div className="w-full flex justify-start text-xl md:text-2xl lg:text-2xl font-bold font-orbitron px-24">
        <span className="text-black">Creative</span>{" "}
        <span className="text-cyan-500">Games</span>
      </div>
      <div className="h-full w-full justify-center items-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="px-20 py-5"
        >
          {assets.map((item, index) => {
            return (
              <SwiperSlide key={index} className="my-10">
                <Card asset={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

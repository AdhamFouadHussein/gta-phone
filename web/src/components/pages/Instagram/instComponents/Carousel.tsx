import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../insta.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  image?: string;
};

const Carousel = ({ image }: Props) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
      <SwiperSlide style={{ height: "230px", width: "100%" }}>
        <img src={image} className=" w-full h-full object-contain" alt="..." />
      </SwiperSlide>
      {/* <SwiperSlide style={{ height: "230px", width: "100%" }}>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
          className=" w-full h-full"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide style={{ height: "230px", width: "100%" }}>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
          className=" w-full h-full"
          alt="..."
        />
      </SwiperSlide>
      <SwiperSlide style={{ height: "230px", width: "100%" }}>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
          className=" w-full h-full"
          alt="..."
        />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Carousel;

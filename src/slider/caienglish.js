import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination } from "swiper";

export default () => {
  return (
    <div style={{ marginLeft: "10px", marginTop: "100px" }}>
      <div style={{ marginLeft: "300px", marginTop: "100px", width: "1300px" }}>
        <h1>CAI English</h1>
        <p style={{ marginBottom: "50px", fontSize: "25px" }}>
          {" "}
         Computer - Aided Instruction for English enable students to develop effective self-directed
learning skills, allowing educators to teach in a more engaging and interactive
manner.{" "}
        </p>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {image.map((item, index) => (
            <SwiperSlide>
              <img alt={index} src={item.src}  style={{width: "1300px"}}/>
            </SwiperSlide>
          ))}
          <h2>Dashboard</h2>
        </Swiper>
      </div>

      {/* No 2 Carrousel

      <div style={{ marginLeft: "300px", marginTop: "100px", width: "1300px" }}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {image2.map((item, index) => (
            <SwiperSlide>
              <img alt={index} src={item.src}  style={{width: "1300px"}}/>
            </SwiperSlide>
          ))}
          <h2>Tenant Dashboard</h2>
        </Swiper>
      </div> */}
    </div>
  );
};
const image = [
  { src: "https://i.ibb.co/92r8YPB/1.png" },
  { src: "https://i.ibb.co/VVcBZsF/2.png" },
  { src: "https://i.ibb.co/ZgByfpK/3.png" },
  { src: "https://i.ibb.co/RTkPN3h/4.png" },
  { src: "https://i.ibb.co/7C3D3PY/5.png" },
  { src: "https://i.ibb.co/c3RDhWB/6.png" },
  { src: "https://i.ibb.co/pw26g2t/7.png" },
  { src: "https://i.ibb.co/d72vsH7/8.png" },
  { src: "https://i.ibb.co/B3qsq1w/9.png" },
  { src: "https://i.ibb.co/MpQpxyp/10.png" },
  { src: "https://i.ibb.co/dPkg2ds/11.png" },
];
// const image2 = [
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },
//   { src: "" },

// ];

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
        <h1>CAI Science</h1>
        <p style={{ marginBottom: "50px", fontSize: "25px" }}>
          {" "}
          Computer-Aided Learning
includes various features that can assist students in interacting in engaging lessons
and quizzes that will improve their ability to learn and gain more knowledge.{" "}
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
          <h2>Admin Dashboard</h2>
        </Swiper>
      </div>

      {/* {/* No 2 Carrousel */}

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
          <h2>User Dashboard</h2>
        </Swiper>
      </div> 
    </div>
  );
};
const image = [
  { src: "https://i.ibb.co/DfWxBVN/1.jpg" },
  { src: "https://i.ibb.co/KsmtR2t/2.jpg" },
  { src: "https://i.ibb.co/X4PGqhc/3.jpg" },
  { src: "https://i.ibb.co/nQtVyC6/4.jpg" },
  { src: "https://i.ibb.co/Wxg6yTk/5.jpg" },
  { src: "https://i.ibb.co/cYJSFtS/7.jpg" },
  { src: "https://i.ibb.co/zJDtQKx/8.jpg" },
  { src: "https://i.ibb.co/s5bgrH1/9.jpg" },
  { src: "https://i.ibb.co/C5kR03B/10.jpg" },
];
const image2 = [
  { src: "https://i.ibb.co/DfWxBVN/1.jpg" },
  { src: "https://i.ibb.co/KsmtR2t/2.jpg" },
  { src: "https://i.ibb.co/hZ5kyZY/12.jpg" },
  { src: "https://i.ibb.co/VHKFvZc/13.jpg" },
  { src: "https://i.ibb.co/FVPnhDm/14.jpg" },
  { src: "https://i.ibb.co/TY65pQf/15.jpg" },
  { src: "https://i.ibb.co/28ZrMRJ/16.jpg" },
  { src: "https://i.ibb.co/WKBgPMb/17.jpg" },
  { src: "https://i.ibb.co/pn6g7Nc/19.jpg" },
  { src: "https://i.ibb.co/pLcpbXV/20.jpg" },
  { src: "https://i.ibb.co/4ZcXhxG/21.jpg" },
  { src: "https://i.ibb.co/XCLsMw6/22.jpg" },
];

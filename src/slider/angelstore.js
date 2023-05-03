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
    <div style={{ marginLeft: "100px", marginTop: "100px" }}>
      <div style={{ marginLeft: "300px", marginTop: "100px", width: "1300px" }}>
        <h1>Angel Store</h1>
        <p style={{ marginBottom: "50px", fontSize: "25px" }}>
          {" "}
          Angel Store POint of Sale, organize and
monitors stocks inside the store. Having a system will surely help the owner and
the employees to work in an organize and manageable place and in order to
prevent loss of income and products.{" "}
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

      {/* No 2 Carrousel */}

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
      </div>
    </div>
  );
};
const image = [
  { src: "https://i.ibb.co/4gMY1GJ/2.png" },
  { src: "https://i.ibb.co/f18Kr09/3.png" },
  { src: "https://i.ibb.co/yNyvNgW/4.png" },
  { src: "https://i.ibb.co/bWxHbM9/image.png " },
  { src: "https://i.ibb.co/5FWCgVj/6.png" },
  { src: "https://i.ibb.co/bgcV3RM/7.png" },
  { src: "https://i.ibb.co/9n8F8XP/8.png" },
  { src: "https://i.ibb.co/XFBnBQQ/9.png" },
  { src: "https://i.ibb.co/mz4ZDYw/10.png" },
  { src: "https://i.ibb.co/DkZSKbp/11.png" },
  { src: "https://i.ibb.co/wB377qk/12.png" },
  { src: "https://i.ibb.co/2KtmCJD/13.png" },
  { src: "https://i.ibb.co/zrj3YSK/14.png" },
  { src: "https://i.ibb.co/6sgFsC6/15.png" },
  { src: "https://i.ibb.co/dQ42KcQ/16.png" },
  { src: "https://i.ibb.co/56BL0Rh/17.png" },
  { src: "https://i.ibb.co/92fFbrR/18.png" },
  { src: "https://i.ibb.co/XSbSBV4/19.png" },
  { src: "https://i.ibb.co/D1J1V6F/20.png" },
  { src: "https://i.ibb.co/bsQkm89/21.png" },
  { src: "https://i.ibb.co/F0B98kg/22.png" },
  { src: "https://i.ibb.co/Vgkbn3G/23.png" },
  { src: "https://i.ibb.co/q04Jh8K/24.png" },
  { src: "https://i.ibb.co/pyGPbcY/25.png" },
  { src: "https://i.ibb.co/fYtqVct/26.png" },
  { src: "https://i.ibb.co/DpgzB2j/27.png" },
  { src: "https://i.ibb.co/nL5CZV4/28.png" },
  { src: "https://i.ibb.co/XYcjRDc/29.png" },
  { src: "https://i.ibb.co/Qc5QYnn/30.png" },
  { src: "https://i.ibb.co/syPP7f2/31.png" },
  { src: "https://i.ibb.co/YQRJ2ZL/32.png" },
  { src: "https://i.ibb.co/vmmW5Y0/33.png" },
  { src: "https://i.ibb.co/xDnTY9B/34.png" },
  { src: "https://i.ibb.co/FhXV1JR/35.png" },
  { src: "https://i.ibb.co/D9tznZn/36.png" },
  { src: "https://i.ibb.co/C7zdkFy/37.png" },
  { src: "https://i.ibb.co/V3T3Rw7/38.png" },
  { src: "https://i.ibb.co/LCSXCRL/39.png" },
  { src: "https://i.ibb.co/LkmgKnW/40.png" },
  { src: "https://i.ibb.co/vJZH2XD/41.png" },
  { src: "https://i.ibb.co/XDdyQx2/42.png" },
  { src: "https://i.ibb.co/L6KqP7W/43.png" },
  { src: "https://i.ibb.co/RHPckYd/44.png" },
  { src: "https://i.ibb.co/SsVYdtc/45.png" },
  { src: "https://i.ibb.co/3pPgpPH/46.png" },
  { src: "https://i.ibb.co/KXD7ytX/47.png" },

];
const image2 = [
  { src: "https://i.ibb.co/vXTxNsW/49.png" },
  { src: "https://i.ibb.co/6nR7FYs/50.png" },
  { src: "https://i.ibb.co/QY5Cv8M/51.png" },
  { src: "https://i.ibb.co/k41n4Lq/52.png" },
  { src: "https://i.ibb.co/6Fr02Vv/53.png" },
  { src: "https://i.ibb.co/BKZHS8C/54.png" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
  // { src: "" },
];

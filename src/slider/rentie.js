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
        <h1>Rentie</h1>
        <p style={{ marginBottom: "50px", fontSize: "25px" }}>
          {" "}
          Rentie is a "tiangge" located in Baras Rizal Supermarket. This is
          system created for faster process and accurate collection of tenant
          informations and payments.{" "}

          {/* rentIE is a website developed in order to help management to collect and
           record payment of the rent, create financial report and monitor the rent of 
           the tenants. rentIE consists of multiple features that have its individual
            functions to obtain organized and arranged data. The website will make the
             task of the workers much easier and flexible at the same time. */}

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
              <img alt={index} src={item.src} />
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
              <img alt={index} src={item.src} />
            </SwiperSlide>
          ))}
          <h2>Tenant Dashboard</h2>
        </Swiper>
      </div>
    </div>
  );
};
const image = [
  { src: "https://i.ibb.co/3ykZz4S/Slide1.png" },
  { src: "https://i.ibb.co/0hWjBYH/Slide2.png" },
  { src: "https://i.ibb.co/YjcSS1m/Slide3.png" },
  { src: "https://i.ibb.co/BZqVgsb/Slide4.png" },
  { src: "https://i.ibb.co/jrgky5V/Slide5.png" },
  { src: "https://i.ibb.co/ydJ0v2g/Slide6.png" },
  { src: "https://i.ibb.co/5hfdCC6/Slide7.png" },
  { src: "https://i.ibb.co/82TQZL8/Slide8.png" },
  { src: "https://i.ibb.co/KVcQyBt/Slide9.png" },
  { src: "https://i.ibb.co/rd4fpLr/Slide10.png" },
  { src: "https://i.ibb.co/GHtSWJH/Slide11.png" },
  { src: "https://i.ibb.co/D1gvyKt/Slide12.png" },
  { src: "https://i.ibb.co/Yc9vqNh/Slide13.png" },
  { src: "https://i.ibb.co/fpnRm75/Slide14.png" },
  { src: "https://i.ibb.co/PcRvNHH/Slide15.png" },
  { src: "https://i.ibb.co/R4SRJ6n/Slide16.png" },
  { src: "https://i.ibb.co/RHyf3zN/Slide17.png" },
  { src: "https://i.ibb.co/WVqSSx6/Slide18.png" },
  { src: "https://i.ibb.co/znpkn8s/Slide19.png" },
  { src: "https://i.ibb.co/SxbDfCw/Slide20.png" },
  { src: "https://i.ibb.co/rfh1Sst/Slide21.png" },
];
const image2 = [
  { src: "https://i.ibb.co/Yjcrygh/Slide23.png" },
  { src: "https://i.ibb.co/pPkXKjL/Slide24.png" },
  { src: "https://i.ibb.co/tXyNZTL/Slide25.png" },
  { src: "https://i.ibb.co/xS3n1c2/Slide26.png" },
  { src: "https://i.ibb.co/CJvhshP/Slide27.png" },
  { src: "https://i.ibb.co/S07JMt5/Slide28.png" },
  { src: "https://i.ibb.co/kM64dyP/Slide29.png" },
  { src: "https://i.ibb.co/d2YWkxF/Slide30.png" },
  { src: "https://i.ibb.co/z7Sk6VZ/Slide31.png" },
  { src: "https://i.ibb.co/5k0sHvY/Slide32.png" },
  { src: "https://i.ibb.co/sbKCrg2/Slide33.png" },
  { src: "https://i.ibb.co/dMFpwjL/Slide34.png" },
];

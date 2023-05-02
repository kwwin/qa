import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default () => {
  return (
    <div style={{ marginLeft: '300px', marginTop: '100px'}}>
      <h1>Rentie</h1>
      <p style={{marginBottom: '50px', fontSize: '25px'}}> Rentie is a "tiangge" located in Baras Rizal Supermarket. This is system created for faster
        process and accurate collection of tenant informations and payments.  </p>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{clickable: true }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     <h2>Admin Dashboard</h2>
      <SwiperSlide>
      <img src="https://i.ibb.co/3ykZz4S/Slide1.png" alt="1"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/0hWjBYH/Slide2.png" alt="2"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/YjcSS1m/Slide3.png" alt="3"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/BZqVgsb/Slide4.png" alt="4"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/jrgky5V/Slide5.png" alt="5"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/ydJ0v2g/Slide6.png" alt="6"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/5hfdCC6/Slide7.png" alt="7"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/82TQZL8/Slide8.png" alt="8"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/KVcQyBt/Slide9.png" alt="9"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/rd4fpLr/Slide10.png" alt="10"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/GHtSWJH/Slide11.png" alt="11"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/D1gvyKt/Slide12.png" alt="12"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/Yc9vqNh/Slide13.png" alt="13"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/fpnRm75/Slide14.png" alt="14"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/PcRvNHH/Slide15.png" alt="15"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/R4SRJ6n/Slide16.png" alt="16"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/RHyf3zN/Slide17.png" alt="17"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/WVqSSx6/Slide18.png" alt="18"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/znpkn8s/Slide19.png" alt="19"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/SxbDfCw/Slide20.png" alt="20"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/rfh1Sst/Slide21.png" alt="21"/></SwiperSlide>
    </Swiper>


{/* No 2 Carrousel */}

<div style={{marginTop: '100px'}}>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     <h2>Tenant Dashboard</h2>
      <SwiperSlide>
      <img src="https://i.ibb.co/Yjcrygh/Slide23.png" alt="1"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/pPkXKjL/Slide24.png" alt="2"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/tXyNZTL/Slide25.png" alt="3"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/xS3n1c2/Slide26.png" alt="4"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/CJvhshP/Slide27.png" alt="5"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/S07JMt5/Slide28.png" alt="6"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/kM64dyP/Slide29.png" alt="7"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/d2YWkxF/Slide30.png" alt="8"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/z7Sk6VZ/Slide31.png" alt="9"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/5k0sHvY/Slide32.png" alt="10"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/sbKCrg2/Slide33.png" alt="11"/></SwiperSlide>

      <SwiperSlide>
      <img src="https://i.ibb.co/dMFpwjL/Slide34.png" alt="12"/></SwiperSlide>
    </Swiper>
    </div>

    </div>
    
  );
};
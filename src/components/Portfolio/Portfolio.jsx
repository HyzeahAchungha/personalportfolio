import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/pagination";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
     
        spaceBetween={5}
        slidesPerView={4}
        grabCursor={{clickable:true}}
       
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" width={'30%'}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt=""width={'30%'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt=""width={'30%'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" width={'30%'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

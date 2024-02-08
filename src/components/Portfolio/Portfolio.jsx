import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-scroll";
import "swiper/css/pagination";
import "swiper/css";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import ecommerce from "../../img/e-commerece.png";
import calculator from "../../img/age.png";
import travel from "../../img/beta.png";
import socials from "../../img/achungha.png";
import uncoventional from "../../img/unconventional.png";
import { themeContext } from "../../Context";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]); // Enable required Swiper modules


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
      grabCursor={true}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }}
      pagination={{ clickable: true }}
      className="portfolio-slider"
    >
        <SwiperSlide>
          <div className="image-container">
            <a href="https://e-commerce-theta-liard.vercel.app/">
              <img src={ecommerce} alt="" width={'20%'} />
              <button class="overlay-text">View live demo</button>
            </a>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <a href="https://calculator-age-six.vercel.app/">
              <img src={calculator} alt="" width={'20%'} />
              <button class="overlay-text">View live demo</button>
            </a>
          </div>

        </SwiperSlide>
        <Link to="contact" spy={true} smooth={true}>

          <button className="button n-button">Contact</button>
        </Link>
        <SwiperSlide>
          <div className="image-container">
            <a href="https://traveltour-pi.vercel.app/about">
              <img src={travel} alt="" width={'20%'} />
              <button class="overlay-text">View live demo</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <a href="https://chating-application-kdpx.vercel.app/auth">
              <img src={socials} alt="" width={'20%'} />
              <button class="overlay-text">View live demo</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <a href="https://data-girl-calculator-app.vercel.app/">
              <img src={uncoventional} alt="" width={'20%'} />
              <button class="overlay-text">View live demo</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

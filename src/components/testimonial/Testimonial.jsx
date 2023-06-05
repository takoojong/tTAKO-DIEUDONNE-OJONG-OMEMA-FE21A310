import React from "react";
import "./testimonial.css";
import AVTRI from '../../assets/img.jpg'
import AVTRI1 from "../../assets/img.jpg";
import AVTRI2 from "../../assets/img.jpg";
import AVTRI3 from "../../assets/img.jpg";


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {/*modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}*/}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI} alt="avatar" />
          </div>
          <h5 className="client__name">Sabins</h5>
          <small className="client__review">
          A massive thank you for all of your help collecting the data points and the content for
           the board meeting. I was really pleased with how the presentation landed and hung together. 
           It wouldn't have been as slick if it wasn't for your assistance and input. Thank you!
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI3} alt="avatar" />
          </div>
          <h5 className="client__name">Jane Mikel</h5>
          <small className="client__review">
          “We really appreciate your business and helping to share the word about Trill-Dev in Buea.”
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI3} alt="avatar" />
          </div>
          <h5 className="client__name">Jane Mikel</h5>
          <small className="client__review">
          What a week! I'm really proud of the work you've put into arguably the best tender
           submission we’ve ever drafted. You've done an amazing job of spinning that plate
            along with numerous demos, follow-ups and proposals. You're doing an awesome job 
            and I'm delighted to have you in our team. Enjoy the weekend, you've earned it!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI3} alt="avatar" />
          </div>
          <h5 className="client__name">Jane Mikel</h5>
          <small className="client__review">
          “We really appreciate your business and helping to share the word about Trill-Dev in Buea.”
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default testimonial;

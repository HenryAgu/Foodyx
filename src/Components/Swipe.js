// stylesheet
import "./Swipe.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Images
import review1 from "../Images/review1.svg";
import review2 from "../Images/review2.svg";
import review3 from "../Images/review3.svg";
import review4 from "../Images/review4.svg";
import rate from "../Images/rate.svg";
import rate2 from "../Images/rate2.svg";

const Swipe = () => {
  return (
    <div className="swipe">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="inner-slide">
            <div className="inner-slide-header">
              <div className="author">
                <img src={review1} alt="review1" />
                <div className="author-name">
                  <h3>Adah Jonathan</h3>
                  <p>Fitness Trainer</p>
                </div>
              </div>
              <div className="rate">
                <img src={rate} alt="rate" />
              </div>
            </div>
            <div className="review-text">
              <p>
                <span>"</span>I naturally became mindful of things I eat as of
                late. I looked for platforms that would have me measure the
                calories of things I eat inorder for me to keep fit and I was
                really glad I found out FOODYX. It has been so helpful to my
                fitness goal.<span>"</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <div className="inner-slide-header">
              <div className="author">
                <img src={review2} alt="review2" />
                <div className="author-name">
                  <h3>Mary Lydia</h3>
                  <p>Mother</p>
                </div>
              </div>
              <div className="rate">
                <img src={rate2} alt="rate2" />
              </div>
            </div>
            <div className="review-text">
              <p>
                <span>"</span>It took me quite a long time to figure out this
                platform and since I found out the platform I haven’t looked
                back. I have used the platform on myself and have also used it
                for my children which has been so wonderful.<span>"</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <div className="inner-slide-header">
              <div className="author">
                <img src={review1} alt="review1" />
                <div className="author-name">
                  <h3>Jennifer Diana</h3>
                  <p>Mother</p>
                </div>
              </div>
              <div className="rate">
                <img src={rate} alt="rate" />
              </div>
            </div>
            <div className="review-text">
              <p>
                <span>"</span>The platform has really helped my fitness journey
                as an Enthusiasric gym lover. The platform has made sure I can
                monitor all I eat while working out dedicatedly in the gym. This
                is a platform everyone that loves to watch his or her weight
                needs to use.<span>"</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <div className="inner-slide-header">
              <div className="author">
                <img src={review3} alt="review3" />
                <div className="author-name">
                  <h3>Agu Henry</h3>
                  <p>Fitness Instructor</p>
                </div>
              </div>
              <div className="rate">
                <img src={rate} alt="rate" />
              </div>
            </div>
            <div className="review-text">
              <p>
                <span>"</span>I naturally became mindful of things I eat as of
                late. I looked for platforms that would have me measure the
                calories of things I eat inorder for me to keep fit and I was
                really glad I found out FOODYX. It has been so helpful to my
                fitness goal.<span>"</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner-slide">
            <div className="inner-slide-header">
              <div className="author">
                <img src={review4} alt="review4" />
                <div className="author-name">
                  <h3>Stephanie Jane</h3>
                  <p>Mother</p>
                </div>
              </div>
              <div className="rate">
                <img src={rate2} alt="rate2" />
              </div>
            </div>
            <div className="review-text">
              <p>
                <span>"</span>It took me quite a long time to figure out this
                platform and since I found out the platform I haven’t looked
                back. I have used the platform on myself and have also used it
                for my children which has been so wonderful.<span>"</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;

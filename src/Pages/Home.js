// stylesheet
import "./Home.css";

// Navlink
import { NavLink } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

// Component
import Swiper from "../Components/Swipe";

// Images
import HeroImage from "../Images/Hero.svg";

import brandImage1 from "../Images/brand1.svg";
import brandImage2 from "../Images/brand2.svg";
import brandImage3 from "../Images/brand3.svg";
import brandImage4 from "../Images/brand4.svg";
import brandImage5 from "../Images/brand5.svg";
import brandImage6 from "../Images/brand6.svg";

import showcaseImage from "../Images/showcase.svg";

import analyse from "../Images/analyse.svg";
import learn from "../Images/learn.svg";
import stay from "../Images/stay.svg";

// Animated page
import AnimatedPage from "../Components/AnimatedPage";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Foodyx | #1 Food Calorie Checker Globally</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AnimatedPage>
        <div className="home">
          {/* Hero Section */}
          <div className="hero">
            <div className="hero-text">
              <span>#1 Food Calorie Checker Globally</span>
              <h1>We help you Live A Healthier Life Everyday</h1>
              <p>
                Take good care of your health starting from your daily food
                intake. Always remember Health is wealth
              </p>
              <NavLink to="/carolies-calculator">
                <button>Get started</button>
              </NavLink>
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="HeroImage" />
            </div>
          </div>
          {/* Brand Section */}
          <div className="brand_image">
            <img src={brandImage1} alt="brandImage1" />
            <img src={brandImage2} alt="brandImage2" />
            <img src={brandImage3} alt="brandImage3" />
            <img src={brandImage4} alt="brandImage4" />
            <img src={brandImage5} alt="brandImage5" />
            <img src={brandImage6} alt="brandImage6" />
          </div>
          {/* Showcase section */}
          <div className="show_case">
            <div className="showcase_image">
              <img src={showcaseImage} alt="showcaseImage" />
            </div>
            <div className="showcase_text">
              <h2>
                Start making the choices that lead to weight control. Lose
                weight and keep it off!
              </h2>
              <p>
                See a breakdown of calories and nutrients, compare serving
                sizes, and discover how the food you eat supports your goals.
              </p>
            </div>
          </div>
          {/* Our benefits */}
          <div className="benefits">
            <div className="benefits_header">
              <h3>OUR BENEFITS</h3>
            </div>
            <div className="benefits-texts">
              <h2>The Fitness you seek here is guaranteed</h2>
              <p>
                We are consistently improving what the website can offer. We are
                focused on providing the best for every users that wants to keep
                being fit. Start using our free calorie counter and exercise
                journal and we'll show you how!
              </p>
            </div>
          </div>
          <div className="direction">
            <div className="direction_card first_card">
              <img src={analyse} alt="analyse" />
              <h3>Analyse your meals and recipes</h3>
              <p>
                Enter recipes and meals and see full nutritional information in
                seconds. View and track calories,
              </p>
            </div>
            <div className="direction_card second_card">
              <img src={learn} alt="learn" />
              <h3>Learn. Track. Improve</h3>
              <p>
                Keeping a food diary helps you understand your habits and
                increases your likelihood of hitting your goals.
              </p>
            </div>
            <div className="direction_card third_card">
              <img src={stay} alt="stay" />
              <h3>Stay Motivated</h3>
              <p>
                Join the World’s Largest Fitness Community for advice, tips, and
                support 24/7.
              </p>
            </div>
          </div>
          {/* Review */}
          <div className="review">
            <div className="review_header">
              <span>CUSTOMERS’ REVIEWS</span>
              <h1>Customer’s Success Stories</h1>
              <p>
                Every day, more than 200 members reach their goals with Foodyx.
                Get inspired for the journey ahead.
              </p>
            </div>
            <Swiper />
          </div>
          {/* Last showcase */}
          <div className="last_showcase">
            <h1>The first Step to becoming Healthier</h1>
            <p>
              Achieve your health and weight goal by tracking your food and
              learning along the way
            </p>
            <NavLink to="/carolies-calculator">
              <button>Get started</button>
            </NavLink>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default Home;

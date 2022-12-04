// stylesheet
import "./CaroliesPage.css";

// State hook
import { useState } from "react";

// axios
import axios from "axios";

// Helmet
import { Helmet } from "react-helmet";

// Images
import calculator from "../Images/calculator.svg";
import Meals from "./Meals";

const CaroliesPage = () => {
  const APP_ID = "4954ae6c";
  const APP_KEY = "0485bb861eee80fcc63d02ece26379f8";

  //   user input for search
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const generateRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        setData(res.data.hits);
      });
  };
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Carolies Calculator Page | #1 Food Calorie Checker Globally
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="carolies">
        <div className="carolies-header">
          <div className="inner-carolies-header">
            <div className="calories-header">
              <img src={calculator} alt="calculator" />
              <h1>Food Calorie Calculator</h1>
            </div>
            <div className="calories-text">
              <p>
                Foodyx Calorie Calculator below allows you to choose from
                thousands of foods and brands, and see the calories inside the
                food. Get started by entering your food and drink choices under
                “Keywords”.
              </p>
            </div>
          </div>
        </div>
        {/* ?Search food */}
        <div className="search_food">
          <div className="search-zone">
            <p>Enter Keyword for Food</p>
            <div className="search_box">
              <input
                type="text"
                placeholder="Enter name of food"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={generateRecipe}>Search for Food</button>
            </div>
          </div>
        </div>
        <Meals data={data}/>
      </div>
    </div>
  );
};

export default CaroliesPage;

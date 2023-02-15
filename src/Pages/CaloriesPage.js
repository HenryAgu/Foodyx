// stylesheet
import "./CaloriesPage.css";

// State hook
import { useState } from "react";

// axios
import axios from "axios";

// Helmet
import { Helmet } from "react-helmet";

// Images
import calculator from "../Images/calculator.svg";
import Meals from "./Meals";



const CaloriesPage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;

  //   user input for search
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const generateRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
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
      <div className="calories">
        <div className="calories-header">
          <div className="inner-calories-header">
            <div className="calories-head">
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
        {data.length>=1 ? <Meals data={data}/>: <h5>No match found</h5>}
      </div>
    </div>
  );
};

export default CaloriesPage;

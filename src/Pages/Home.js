// stylesheet
import "./Home.css";

// Helmet
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Foodyx | #1 Food Calorie Checker Globally</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default Home;

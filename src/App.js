// stylesheet
import "./App.css";

// Router
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes/>
        <Footer />
      </Router>
    </>
  );
}

export default App;

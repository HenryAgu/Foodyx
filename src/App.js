// stylesheet
import "./App.css";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "../src/Pages/Home";
import CaloriesPage from "../src/Pages/CaloriesPage";
import ScrollToTop from "./Components/ScrollToTop";

// Animate Presence from framer-motion
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/carolies-calculator"
              element={<CaloriesPage />}
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react'

// Animate Presence from framer-motion
import { AnimatePresence } from "framer-motion";

// Router
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../Pages/Home";
import CaloriesPage from "../Pages/CaloriesPage";

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes key={location.pathname} location={location}>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/carolies-calculator"
        element={<CaloriesPage />}
      />
    </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes
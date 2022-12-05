// stylesheet
import './App.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from '../src/Pages/Home';
import CaloriesPage from '../src/Pages/CaloriesPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path='/carolies-calculator' element={<CaloriesPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

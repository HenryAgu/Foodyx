// stylesheet
import './App.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from '../src/Pages/Home';
import CaroliesPage from './Pages/CaroliesPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path='/carolies-calculator' element={<CaroliesPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

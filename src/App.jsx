import { useState } from 'react'
import MainPage from './pages/mainPage/main_page';
import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";
import Amenities from './pages/Amenities/amenities';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="amenities" element={<Amenities/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App

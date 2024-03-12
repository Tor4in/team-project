import { useState } from 'react'
import MainPage from './pages/mainPage/main_page';
import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";
import Amenities from './pages/amenities/amenities';
import Availability from './pages/availability/availability';
import { FloorPage } from './pages/floorPlanes/floorPage';
import ScrollToTop from './scripts/scrollToTop';
function App() {
  //test
  return (
    <>
      <Router>
				<ScrollToTop/>
        <Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="amenities" element={<Amenities/>}/>
					<Route path="availability" element={<Availability/>}/>
					<Route path="floor_plans" element={<FloorPage/>}/>
					

        </Routes>
      </Router>
    </>
  );
}

export default App

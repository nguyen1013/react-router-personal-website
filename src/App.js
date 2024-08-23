import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, BrowserRouter, Routes } 
from "react-router-dom";
import './App.css';

import Themes from './components/Themes';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="portfolio" element={<Portfolio />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

// function Root() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {  
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

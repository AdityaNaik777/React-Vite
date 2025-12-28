import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/products";
import About from "./pages/about";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <div className="bg-black text-white ">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>
        <Route path="/products" element={<Product />} >
          <Route path='men' element={<Men/>}/>    
          <Route path="women" element={<Women/>}/>
        </Route>
        <Route path="/*" element={<Notfound/>}/>
        {/* <Route path='/products/men' element={<Men/>}/>    
        <Route path="/products/women" element={<Women/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

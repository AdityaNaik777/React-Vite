import React from "react";
import about from "../pages/about";
import {Link} from "react-router-dom";
import products from "../pages/products";
const Navbar = () => {
  return (
    <div className="flex py-4 px-8 bg-cyan-600 justify-between">
      <h2 className="text-2xl font-bold">AIQuizHub</h2>
      <div className="flex gap-10">
        <Link to='/'>Home</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { categories, mockData } from "../assets/MockDate";
import HeroImage from "../assets/images/hero-page.png";
import InfoSec from "../components/InfoSec";
import Categories from "../components/Categories";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORY
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img
            src={HeroImage}
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-16 left-8">
            <p className="text-gray-600 mb-4">Code With ME</p>
            <h2 className="text-3xl font-bold">Welcome to Shopinsta</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              MILLIONS + Products
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <InfoSec />
      <Categories />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 gap-6 lg:grid-cols-5 cursor-pointer">
          {products.products.slice(0,5).map(((product)=> (
            <ProductCart product={product}/>
          )))}
        </div>
      </div>
    </div>
  );
};

export default Home;

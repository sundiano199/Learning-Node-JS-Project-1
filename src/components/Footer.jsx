import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiBeachBallLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black px-2 md:px-6 py-12 md:py-8 flex flex-col md:flex-row justify-evenly  ">
      
      <div className="md:flex-1 ">
        <h1 className="text-green-300 font-bold text-3xl">
          DATALY. </h1>
          <p className="text-gray-300 pr-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="text-white flex justify-between my-2 md:pr-20 pr-0 size=30">
            {/* icons */}
            <FaFacebookSquare className="text-3xl md:text-2xl"  />
            <FaInstagram className="text-3xl md:text-2xl" />
            <FaTwitterSquare className="text-3xl md:text-2xl" />
            <FaGithub className="text-3xl md:text-2xl" />
            <PiBeachBallLight className="text-3xl md:text-2xl"/>
          </div>
       
      </div>
      <div className="flex md:flex-row md:flex-[2] gap-5 md:gap-40 justify-between py-10 md:py-0">
      <div className="flex-1">
        <h2 className="text-gray-400 font-medium">Solutions</h2>
        <ul className="text-gray-300 text-sm leading-8">
          <li>Analytics</li>
          <li>Marketting</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-gray-400 font-medium">Support</h2>
        <ul className="text-gray-300 text-sm leading-8">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API status</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-gray-400 font-medium">Company</h2>
        <ul className="text-gray-300 text-sm leading-8">
          
          <li>About</li>
          <li>Blogs</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Careers</li>
          
        </ul>
      </div>
      <div className="">
        <h2 className="text-gray-400 font-medium">Legal</h2>
        <ul className="text-gray-300 text-sm leading-8">
          <li>Claims</li>
          <li>Policy</li>
          <li>Terms</li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};
export default Footer;

import React from "react";


const Footer = () => {
  return (
    <div className="bg-black px-6 py-8 grid md:flex">
      
      <div className="flex-1 row-span-3">
        <h1 className="text-green-400 font-bold text-3xl">
          DATALY. </h1>
          <p className="text-white text- ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
       
      </div>
      <div className="flex flex-1">
      <div className="flex-1">
        <h2 className="text-gray-300">Solutions</h2>
        <ul className="text-white">
          <li>Analytics</li>
          <li>Marketting</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-gray-300">Support</h2>
        <ul className="text-white">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API status</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-gray-300">Company</h2>
        <ul className="text-white">
          <li>Company</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Jobs</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-gray-300">Legal</h2>
        <ul className="text-white">
          <li>CLaims</li>
          <li>Policy</li>
          <li>Claims</li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};
export default Footer;

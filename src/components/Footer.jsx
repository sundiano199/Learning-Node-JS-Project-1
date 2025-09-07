import React from "react";


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
       
      </div>
      <div className="flex md:flex-col md:flex-[2] gap-5 md:gap-40 justify-between">
      <div className="flex-1">
        <h2 className="text-gray-400 font-medium">Solutions</h2>
        <ul className="text-goffnmkray-300 text-sm leading-8">
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
          
        </ul>3
      </div>
      <div className="flex-1">
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

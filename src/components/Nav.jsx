import React from "react";

const Nav = () => {
  return (
    <div className="flex gap-6 flex-row m-12 justify-around max-md:mx-0">
          <img className="h-[40px] w-[150px] max-md:mx-0 " src="../assets/images/header-logo.svg" alt="logo" />
          <ul className="flex gap-12 flex-row ml-20 max-md:hidden">
            <li className="text-stone-500 text-lg">Home</li>
            <li className="text-stone-500 text-lg">AboutUs</li>
            <li className="text-stone-500 text-lg">Product</li>
            <li className="text-stone-500 text-lg">ContactUs</li>
      </ul>
      <p className=" text-xl ml-20 max-md:hidden ">Sign In/Explore Now</p>
      <img className=' hidden h-8 w-8 max-md:block' src="../../assets/icons/hamburger.svg" alt="" />
    </div>
  );
};

export default Nav;

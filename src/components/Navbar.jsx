import React from "react";

const Navbar = () => {
  return (
    <header class="flex items-center justify-between bg-slate-600 py-4 px-4 text-sm text-white">
      <div style={{paddingLeft:'100px'}} class="flex items-center ">
        <div class="flex">
          <a id="main" style={{letterSpacing:'0.005rem'}} class="mr-3 text-xl font-semibold  ">
            Invoice Generator
          </a>
        </div>
        <div class="ml-11 flex space-x-4">
          <a class="mr-3 font-semibold hover:text-gray-400 transition-all">Help</a>
          <a class="mr-3 font-semibold hover:text-gray-400 transition-all">Invoicing Guide</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  // sticky

      const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
      };
  return (
    <div className="font-Inter relative flex items-center justify-between text-white px-8 sm:px-14 py-3 sm:py-[10px]  border-solid border-b-[0.2px] border-slate-300 z-[999] ">
      <div className="leading-[15px] font-serif font-extrabold text-[#003049] hover:text-[#b80f0f] flex flex-col align-middle justify-center  ">
        <p>CRYSTALLITE</p>
        <p className="whitespace-nowrap">LOGISTICS LTD</p>
      </div>

      <div
        className={`fixed z-[0] bg-transparent sm:justify-center sm:static right-0 top-[50px] w-full sm:top-auto sm:right-auto sm:flex-co flex-col sm:flex-row flex px-5 py-10 sm:py-0 gap-y-[4vh] sm:gap-y-0  min-h-[100vh] sm:min-h-0 sm:h-auto sm:flex text-sm gap-2 md:gap-[4vw] sm:px-5 bg-white transition-all duration-700 ease-in-out transform  ${
          isMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100"
        }`}
      >
        <p
          onClick={() => {
            navigate("/");
            // resetForm();
          }}
          className="text-4xl font-semibold sm:text-lg text-[#003049] cursor-pointer hover:text-[#b80f0f]"
        >
          Home
        </p>
        <p
          onClick={() => {
            navigate("/about");
            // resetForm();
          }}
          className="text-4xl font-semibold sm:text-lg text-[#003049] cursor-pointer hover:text-[#b80f0f]"
        >
          About Us
        </p>
        <button
          className="bg-[#003049] py-2 px-4 text-sm rounded block sm:hidden hover:text-[#b80f0f]"
          onClick={() => openLink("mailto:crystallitelogistics@gmail.com")}
        >
          Contact Us
        </button>
      </div>
      <div className="hidden sm:block">
        <button className="bg-[#003049] hover:bg-[#b80f0f] transition duration-300 py-2 px-4 text-sm rounded whitespace-nowrap">
          Contact Us
        </button>
      </div>
      <div
        className="block sm:hidden text-black"
        onClick={() => setIsMenu(!isMenu)}
      >
        <p className="font-extrabold text-2xl">{isMenu ? "X" : "☰"}</p>
      </div>
    </div>
  );
}

export default Navbar;

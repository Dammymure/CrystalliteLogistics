import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Whatsapp from "../logos/whatsapp.svg";
import Email from "../logos/email.png";
import Arrow from "../logos/icons8-arrow-right-50.png";
import Whatsapp2 from "../logos/whatsapp2.svg";

import Image1 from "../images/image1.webp";
import Image2 from "../images/image2.webp";
import Image3 from "../images/image3.webp";

import Warehouse from "../images/warehouse.jpg"
import Security from "../images/security2.jpg"
import Tourism from "../images/tourism.jpg"
import Import from "../images/importExport.jpg"
import Clearing from "../images/clearing.jpg"
import Auto from "../images/auto.jpg"

import LazyBackground from "../component/LazyLoading.jsx";

function Home() {
  const images = [Image1, Image2, Image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const [showIcon, setShowIcon] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // WhatsApp link 
  const whatsappURL = `https://wa.me/08027190867?text=Hello, I have an Inquiry`;

    const openLink = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
    <div className="bg-white h-screen font-Inter">
      <Navbar />

      <LazyBackground src={images[currentImage]} width="100%" height="100vh">
        <section
          className="bg-container relative flex h-100vh sm:h-[100vh] bg-cover bg-center"
          // style={{ backgroundImage: `url(${loadedImages[currentImage]})` }}
        >
          <div className="px-2 sm:px-16">
            <div className="pt-5 sm:pt-10 ">
              <h1 className="text-7xl sm:text-9xl lg:text-9xl text-left text-white font-bold relative">
                Your Trusted Partners
              </h1>
            </div>

            <div className="relative sm:w-[85%]">
              <p className="text-3xl sm:text-4xl text-slate-200">
                Crystallite Logistics delivers excellence in logistics,
                warehousing, transportation, and supply chain management
                services.
              </p>

              <div className="flex-row pt-3 sm:pt-0 text-white align-middle content-center items-center justify-between sm:flex">
                <h1
                  className="text-2xl pb-2 sm:pb-0 underline cursor-pointer hover:text-slate-300 flex align-middle content-center items-center"
                  onClick={() => openLink("mailto:example@example.com")}
                >
                  Talk To Us
                  <span>
                    <img
                      className="w-8 -rotate-45"
                      alt="arrow icon"
                      src={Arrow}
                    />
                  </span>
                </h1>
                <div className="flex flex-row w-14 gap-2 py-2 sm:w-14">
                  <img
                    className="cursor-pointer"
                    src={Email}
                    alt="Email"
                    onClick={() => openLink("mailto:example@example.com")}
                  />

                  <img
                    href={whatsappURL}
                    className="sm:w-14 cursor-pointer block"
                    src={Whatsapp}
                    alt="Whatsapp"
                    onClick={() => openLink(whatsappURL)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </section>
      </LazyBackground>

      <section className="mx-2">
        <div className="sm:w-[85%] content-center align-middle justify-center mx-auto text-center py-5 my-5 sm:py-16 bg-[#1d8b993f] rounded-2xl">
          <p className="text-slate-500 text-2xl py-2">
            Trusted Industry Leader
          </p>
          <h1 className="sm:w-[60%] mx-auto text-2xl sm:text-5xl sm:py-6">
            Delivering Logistics Solutions with Care, Speed and Affordability
          </h1>
          <p className="sm:w-[55%] mx-auto text-slate-700 text-sm">
            With over 15 years of experience, Crystallite Logistics Company has
            earned a reputation for reliable and affordable logistics solutions.
          </p>
        </div>
      </section>

      <section className="bg-[#ffff] h-fit px-2">
        <div>
          <h1 className="text-2xl font-semibold text-center text- py-4 sm:text-4xl">
            Our Services
          </h1>
          {/* SERVICES */}
          <div className="sm:w-[75%] sm:mx-auto justify-center align-middle items-center content-center ">
            <ul className="">
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className=" border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Warehouse}
                    alt="logistics"
                  />
                </div>
                <div className="text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    {/* {"#e3d9d9 "} */}
                    Logistics & Warehousing
                  </h1>
                  <p className="text-sm">
                    We provide comprehensive logistics and warehousing solutions
                    designed to streamline your supply chain and ensure timely,
                    secure delivery of your products. Our state-of-the-art
                    warehousing facilities offer optimal storage conditions and
                    real-time inventory tracking. With customizable services and
                    dedicated support, we cater to your unique business needs,
                    enhancing efficiency and reliability.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className="order-1 sm:order-2 border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Clearing}
                    alt="logistics"
                  />
                </div>
                <div className="order-2 sm:order-1 text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    Clearing & Forwarding
                  </h1>
                  <p className="text-sm">
                    Our Clearing & Forwarding services ensure seamless import
                    and export operations, handling all customs documentation
                    and compliance efficiently. With a dedicated team of experts
                    and robust global network, we streamline the process to
                    minimize delays and reduce costs. Trust us to navigate the
                    complexities of international shipping, delivering your
                    goods swiftly and securely.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className="order-1 sm:order-2 border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Auto}
                    alt="logistics"
                  />
                </div>
                <div className="order-2 sm:order-2 text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    Automobiles & Tyre Sales
                  </h1>
                  <p className="text-sm">
                    We offer a comprehensive range of high-quality automobiles
                    and tyres to meet your diverse needs. Our selection includes
                    the latest models from top manufacturers and durable tyres
                    that ensure safety and performance. Trust us for expert
                    advice, competitive pricing, and exceptional customer
                    service in every purchase.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className="order-1 md:order-2 border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Tourism}
                    alt="logistics"
                  />
                </div>
                <div className="order-2 sm:order-1 text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    Tourism
                  </h1>
                  <p className="text-sm">
                    Our bespoke tourism services that create unforgettable
                    travel experiences tailored to your interests. Our expert
                    team provides personalized itineraries, ensuring you enjoy
                    the best attractions, accommodations, and cultural insights.
                    Discover the world with us and turn your travel dreams into
                    reality.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className="order-1 sm:order-1 border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Security}
                    alt="logistics"
                  />
                </div>
                <div className="order-2 sm:order-2 text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    Escort & Protocol
                  </h1>
                  <p className="text-sm">
                    We provide professional Escort & Protocol services to ensure
                    seamless and secure transportation for VIPs and dignitaries.
                    Our experienced team offers personalized assistance, from
                    airport transfers to event coordination, guaranteeing a
                    smooth and efficient experience. Trust us to handle all
                    aspects of protocol management with the utmost discretion
                    and professionalism.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 hover:bg-[#002f4932] duration-500 ease-linear rounded-xl mb-10">
                <div className="order-1 md:order-2 border rounded-xl">
                  <img
                    className="rounded-xl w-screen h-56 hover:scale-105 duration-300 ease-linear"
                    src={Import}
                    alt="logistics"
                  />
                </div>
                <div className="order-2 sm:order-1 text-left py-3 pr-2 pl-4">
                  <h1 className="pl- text- pb-2 font-bold text-[#b80f0f]">
                    Import & Export
                  </h1>
                  <p className="text-sm">
                    We specialize in seamless import and export services,
                    ensuring your goods are transported efficiently across
                    international borders. Our comprehensive solutions include
                    customs clearance, freight forwarding, and real-time
                    tracking, providing you with peace of mind and timely
                    deliveries. Trust us to handle the complexities of global
                    trade while you focus on growing your business.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#003049] w-100vw px-2 sm:px-0">
        <div className="flex flex-col  sm:flex-row sm:w-[75%] justify-between mx-auto  items-center py-16">
          <div className=" flex flex-col gap-4">
            <div className="leading-[15px] font-serif font-extrabold text-white flex flex-col align-middle justify-center  ">
              <p>CRYSTALLITE</p>
              <p className="whitespace-nowrap">LOGISTICS LTD</p>
              <p className="whitespace-nowrap text-xs text-slate-200 font-medium">
                RC: 1672578
              </p>
            </div>

            <div className=" sm:w-[60%] flex-col flex sm:flex-row text-xs sm:gap-6 gap-3 text-[#667382]">
              <h1 className="t">
                Lagos Office: No 104/106, Apapa-Oshodi, Express Way, Cele
                Bus-Stop By Emacleb Filling Station, Lagos.
              </h1>
              <h1 className="">
                Abuja Office: No 1 Rockville Rd. Centage Estate, Apo Abuja
              </h1>
              <h1 className="">
                Lokoja Office: No 148, IBB Way Opposite Nepa HQ. Lokoja Kogi
                State
              </h1>
            </div>

            <div className="flex flex-col gap-4 text-xs text-[#667382]">
              <h1 className="">08027190867, 08032574190</h1>
              <p className="">
                Copyright © 2024 Salesforce. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showIcon && (
        <div className="fixed bottom-7 right-5 cursor-pointer">
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <img className="w-14 sm:w-16" src={Whatsapp2} alt="WhatsApp Icon" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;

// {/* <details>
//   <summary>Lyrics</summary>
//   <p>helllllo</p>
// </details>; */}

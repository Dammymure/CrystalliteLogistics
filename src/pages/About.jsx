import React from "react";
import Navbar from "../component/Navbar";
import Vision from "../images/vision.jpg"
import Delivery from "../images/delivery.jpg"
import Efficiency from "../images/efficient.jpg"
import Customer from "../images/customer.jpg"
  import Staff from "../images/staff.jpg"
  import Operation from "../images/operation2.jpg"
  import Enquiry from "../images/enquiry.jpg"


import Tick from "../icons/tick.png"
import CheckTick from "../icons/checkTick.png"
import Question from "../icons/icons8-question-mark-100.png"
function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="mx-auto pt-2 sm:pt-10">
        <div className="w-screen px-3 sm:px-0 sm:w-[75%] mx-auto">
          <div className="bg-white flex flex-col sm:flex-row gap-2 sm:gap-10 py-2 sm:py-10">
            <h1 className="text-2xl sm:text-5xl font-montserrat">About Us</h1>
            <p className="text-sm sm:text-xl">
              Crystallite Logistics Ltd. (RC: 1672578) is your preferred freight
              service company with significant expertise at helping your
              businesses reach new markets, reduce transportation costs, improve
              supply chain efficiency, and ultimately increase profitability. We
              help you transport, store, and distribute your goods to intended
              destination. We facilitate movement of goods/cargos by ship,
              train, truck or airplane.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row py-10 bg-blue-200 rounded-3xl p-10">
            <div>
              <h1 className="mx-auto text-4xl sm:text-7xl font-telma">
                Our Vision
              </h1>
              <p className="mx-auto py-2">
                To be the preferred choice in Freight logistics service in
                Nigeria.
              </p>
            </div>
            <div>
              <img
                className="w-[100%] h-64 rounded-3xl"
                src={Vision}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3 py-16">
          <h1 className="text-3xl sm:text-5xl text-center font-montserrat">
            Our Mission
          </h1>
          <div className="flex mx-auto items-center content-center justify-center align-middle gap-5 text-white">
            <p className="bg-[#003049] hover:bg-[#060606] duration-700 w-44 sm:w-56 h-52 sm:h-56 text-center content-center p-1 text-xl sm:text-base">
              FREIGHT SERVICES
              <br />
              <span className="text-slate-400 text-sm">
                To deliver quality warehousing and Logistics Services.
              </span>
            </p>
            <p className="bg-[#003049] hover:bg-[#060606] duration-700 w-44 sm:w-56 h-52 sm:h-56 text-center content-center p-1 text-xl sm:text-base">
              CUSTOMER SATISFACTION <br />
              <span className="text-slate-400 text-sm">
                To continually meet and exceed customer’s expectation through up
                to date logistics solutions.
              </span>
            </p>
          </div>
        </div>
        <section className="bg-[#ef233c] py-5 sm:p-5 flex flex-col text-white">
          <div className="w-screen px-3 sm:w-[85%] mx-auto">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-5xl font-bold font-montserrat">
                Haulage Delivery
              </h1>
              <p className="font-thin text-xl sm:text-2xl">
                With our strategic locations, we are able to reach all the major
                cities in Nigeria.
              </p>
            </div>
            <div className="py-10 ">
              <h2 className="py-5 font-bold text-sm sm:text-xl">
                WHY <span>CHOOSE</span> CRYSTALLINE LOGISTICS
              </h2>
              <ul className="flex flex-col gap-2 sm:flex-row  text-slate-800">
                <div className="grid  gap-2 w-[100%]">
                  <li className="bg-white grid grid-cols-2  hover:bg-red-300/100 rounded-xl  justify-between">
                    <div className="p-2">
                      <h1 className="pb-2 text-black capitalize text-sm sm:text-base font-bold">
                        DELIVERY
                      </h1>
                      <p className="">We deliver all consignments on time.</p>
                    </div>
                    <div className="">
                      <img
                        className="h-36 w-[100%]"
                        src={Delivery}
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="bg-white grid grid-cols-2 hover:bg-red-300/100 rounded-xl  justify-between ">
                    <div className="p-2">
                      <h1 className="pb-2 text-black capitalize font-bold text-sm">
                        Staff
                      </h1>
                      <p className="">
                        Our staff and management operates with great integrity
                      </p>
                    </div>
                    <div className="">
                      <img className="h-36 w-[100%]" src={Staff} alt="" />
                    </div>
                  </li>
                </div>
                <div className="grid  gap-2 w-[100%]">
                  <li className="bg-white grid grid-cols-2  hover:bg-red-300/100 rounded-xl  justify-between">
                    <div className="p-2">
                      <h1 className="pb-2 text-black capitalize text-sm sm:text-base font-bold">
                        Efficient
                      </h1>
                      <p className="">We are innovative and efficient</p>
                    </div>
                    <div className="">
                      <img
                        className="h-36 w-[100%]"
                        src={Efficiency}
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="bg-white grid grid-cols-2 hover:bg-red-300/100 rounded-xl  justify-between ">
                    <div className="p-2">
                      <h1 className="pb-2 text-black capitalize font-bold text-sm">
                        Customer
                      </h1>
                      <p className="">
                        Customer satisfaction is our topmost priority
                      </p>
                    </div>
                    <div className="">
                      <img
                        className="h-36 w-[100%]"
                        src={Customer}
                        alt=""
                      />
                    </div>
                  </li>
                </div>
                {/* <div className="grid gap-2">
                  <li className="bg-white grid grid-cols-2 hover:bg-red-300/100 rounded-xl  justify-between">
                    <div className="p-2">
                      <h1 className="pb-2 text-black capitalize font-bold text-sm">
                        Efficient
                      </h1>
                      <p>We are innovative and efficient</p>
                    </div>
                    <div>
                      <img className="h-36 w-[100%]" src={Image1} />
                    </div>
                  </li>
                  <li className="bg-white  hover:bg-red-300/100 rounded-xl p-2 flex justify-between">
                    <div>
                      <h1 className="pb-2 text-black capitalize font-bold">
                        Customer
                      </h1>
                      <p>Customer satisfaction is our topmost priority</p>
                    </div>
                    <div>
                      <img className="w-56" src={Image1} />
                    </div>
                  </li>
                </div> */}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="sm:w-[75%] px-3 sm:px-0 mx-auto py-2 sm:py-10 content-center order-2 sm:order-1">
            <div className="flex align-middle content-center items-center gap-2">
              <h1 className="text-3xl sm:text-5xl py-4">Our</h1>
              <h1 className="font-sharpie text-5xl sm:text-7xl py-4">
                Operations
              </h1>
            </div>
            <div className="flex flex-col gap-3 text-xl sm:text-xl">
              <div className="flex items-center gap-4">
                <img className="w-9 sm:w-12" src={Tick} alt="" />
                <p>
                  Preservation, safe handling, and transportation of perishable
                  items
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-9 sm:w-12" src={Tick} alt="" />
                <p>
                  Safe handling and transportation of dangerous goods (gas and
                  flammable liquids)
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-9 sm:w-12" src={Tick} alt="" />
                <p>Import/Export documentation.</p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-9 sm:w-12" src={Tick} alt="" />
                <p>Warehousing</p>
              </div>
            </div>
          </div>
          <div className="order-1 sm:order-2">
            <img
              className="w-[100vw] sm:w-[50vw]"
              src={Operation}
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="w-[85%] mx-auto flex flex-col py-2 sm:py-14">
            <h1 className="text-2xl sm:text-5xl font-montserrat py-10">
              Business Procedure
            </h1>
            <div className="flex flex-col content-center justify-center align-middle mx-auto gap-5 text-white text-sm sm:text-sm">
              <div className="flex gap-5 sm:gap-10">
                <div className="flex flex-col bg-blue-500 w-40 sm:w-64 h-44 sm:h-44 rounded-3xl content-center p-1 text-center items-center">
                  <img className="w-7 sm:w-14" src={CheckTick} alt="" />

                  <p>
                    We charge based on weight and distance from pick up location
                    to drop off location.
                  </p>
                </div>
                <div className="flex flex-col bg-red-500 w-40 sm:w-64 h-44 sm:h-44 rounded-3xl content-center p-1 text-center items-center">
                  <img className="w-7 sm:w-14" src={CheckTick} alt="" />
                  <p>We preserve your perishable goods.</p>
                </div>
              </div>
              <div className="flex gap-5 sm:gap-10">
                <div className="flex flex-col bg-purple-500 w-40 sm:w-64 h-44 sm:h-44 rounded-3xl content-center p-1 text-center items-center">
                  <img className="w-7 sm:w-14" src={CheckTick} alt="" />
                  <p>
                    We safely handle your gas and flammable liquids which are
                    classified as dangerous goods.
                  </p>
                </div>

                <div className="flex flex-col bg-pink-500 w-40 sm:w-64 h-44 sm:h-44 rounded-3xl content-center p-1 text-center items-center">
                  <img className="w-7 sm:w-14" src={CheckTick} alt="" />
                  <p>
                    We help you with customs documentation and cargo clearing.
                  </p>
                </div>
              </div>

              <div className="flex flex-col mx-auto  bg-orange-500 w-44 sm:w-64 h-44 sm:h-44 rounded-3xl content-center p-1 text-center items-center">
                <img className="w-7 sm:w-14" src={CheckTick} alt="" />
                <p className="">
                  We adhere strictly to the Nigerian customs regulations and the
                  international regulations on safe handling of containers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:w-[75%] px-3 sm:px-0 order-1 sm:order-2 mx-auto py-10 content-center">
            <div className="flex py-5 gap-2">
              <img className="w-10" src={Question} alt="" />
              <h2 className="text-2xl">
                Have any <span>enquiries?</span>{" "}
              </h2>
            </div>
            <p className="text-sm sm:text-lg pb-5">
              Do you have any enquiries, or would you like to know more about
              our company? <br />
            </p>
            <p className="text-sm sm:text-lg">
              Please contact us via whats app 08027190867 or call 08032574190 or
              email us at xxxxxxx@gmail.com
            </p>
          </div>
          <div className="order-1 sm:order-2">
            <img src={Enquiry} alt="" />
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
      </section>
    </div>
  );
}

export default About;

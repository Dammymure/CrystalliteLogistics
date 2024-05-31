import React from 'react'

function Footer() {
  return (
    <div>
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
          {/* <div className="flex flex-row w-8 gap-2 py-2 sm:w-14 ">
            <img className=" cursor-pointer" src={Email} alt="Email" />

            <img className="cursor-pointer" src={Whatsapp} alt="Whatsapp" />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer
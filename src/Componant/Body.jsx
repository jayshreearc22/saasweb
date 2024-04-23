import React from "react";
import cylinder from "../Componant/images//cylinder.png";
import Visual from "../Componant/images//Visual.png";
import half from "../Componant/images//half.png";


const Body = () => {
  return (
    <div className="  h-[710px] max-sm:h-[1100px] mt-18 bg-gradient-to-tr max-lg:h-[1400px] from-blue-500  via-slate-200  to-blue-100  ">
      <div className="flex items-center mr-5 ">
        <div>
          <div className="relative top-32 left-5 ml-5 max-sm:ml-0 ">
            <div className="w-[137px] h-[29px] border-[1px] gap-[10px] rounded-xl  border-gray-400  ">
              <a className=" font-sans font-medium text-sm  pl-2 " href="#">
                Version 2.0 is here
              </a>
            </div>
            <div className=" w-[550px] h-[250px] max-sm:w-auto max-sm:h-[132px] ">
              <h1
                id="head"
                className=" font-bold text-[90px] max-sm:text-[54px] "
              >
                Pathway to productivity
              </h1>
            </div>
            <div className=" mt-10 w-[457px] h-[99px] max-sm:w-[364px]">
              <p id="para" className="font-normal text-xl">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
            </div>

            <div className="flex mt-7">
              <a
                className=" border-2 rounded-xl text-white font-medium text-base bg-black hover:text-black border-black hover:bg-white px-[15px] py-[7px] pb-2  "
                href="#"
              >
                Get for free
              </a>
              <a
                className="py-[10px] gap-1 ml-5 mr-2 text-black font-semibold "
                href="#"
              >
                Learn more
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-black font-bold  mt-[15px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

    <div className="max-sm:flex-col max-sm:ml-16">
    <div className=" absolute w=[216px] h-[197px] top-[140px] left-[550px] max-sm:hidden ">
          <img className="  " src={cylinder} alt="cylinder" />{" "}
        </div>
        <div  className="max-sm:flex">
          {" "}
          <img
            className="  absolute w-[648px] h-[648px] top-[140px] right-6 max-sm:w-[388px] max-lg:top-[700px] max-sm:h-[388px] max-sm:top-[700px]  max-sm:left-[0] "
            src={Visual}
            alt="Visual"
          />{" "}
        </div>

        <div className=" max-lg:hidden">
          {" "}
          <img
            className=" absolute w-[231.18px]  bottom-[-100px] right-6 max-md:hidden   max-xl:bottom-[-300px]  z-10"
            src={half}
            alt="half"
          />{" "}
        </div>
    </div>
      </div>
    </div>
  );
};

export default Body;

import { NavLink } from "react-router-dom";
import rectangle1 from "../../../assets/images/shapes/Rectangle 148.svg";
import rectangle2 from "../../../assets/images/shapes/Rectangle 149.svg";
import Venus from "../../../assets/images/Frame (7).svg";
import './SectionServices.css'
function Section1Services() {
  return (
    <section className="relative w-full  flex flex-col lg:flex-row ">
      <aside className="relative w-full lg:w-[180px] min-h-auto    px-10 py-10">
        <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0038FF]  lg:block"></div>

        <div className="mb-10">
          <img src={Venus} alt="" />
        </div>

        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-[#0038FF] cursor-pointer">
            Home
          </NavLink>
          <NavLink className="hover:text-[#0038FF] cursor-pointer">
            Services
          </NavLink>
          <a href="/" className="hover:text-[#0038FF] cursor-pointer">
            Solutions
          </a>
          <a href="/" className="hover:text-[#0038FF] cursor-pointer">
            Contact us
          </a>
          <a href="/" className="hover:text-[#0038FF] cursor-pointer">
            more...
          </a>
        </nav>
      </aside>

      <div
        className=" px-6 md:px-12 lg:px-24 py-10 lg:py-24
     w-full lg:w-auto ml-auto bg-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-10 lg:mb-16">
          Services
        </h1>
        <p className="text-xl md:text-[22px] font-semibold mb-4">
          Features that blows mind
        </p>

        <p className="text-gray-500 mb-10 md:mb-12 text-sm md:text-base">
          End-to-end payments and financial management in a <br />
          single solution. Meet the right platform to help realize.
        </p>

        <div className="mt-12 lg:mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-6 border border-[#CFCFCF]  clip-bottom-right ">
            <img alt="" src={rectangle2} className="mb-2" />
            <img alt="" src={rectangle1} className="mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Connect wallets & exchanges
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              End-to-end payments and financial <br /> management in a single
              solution. Meet the <br /> right platform to help realize.
            </p>
          </div>

          <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-6 border border-[#CFCFCF] clip-bottom-right">
            <img alt="" src={rectangle2} className="mb-2" />
            <img alt="" src={rectangle1} className="mb-4" />

            <h3 className="font-semibold text-gray-800 mb-2">
              Connect wallets & exchanges
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              End-to-end payments and financial <br /> management in a single
              solution. Meet the <br /> right platform to help realize.
            </p>
          </div>

          <div>
            <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-6 border border-[#CFCFCF] mb-10 clip-bottom-right">
              <h3 className="font-semibold text-gray-800 mb-2">
                Save money year-round
              </h3>
            </div>

            <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-6 border border-[#CFCFCF]  clip-bottom-right">
              <h3 className="font-semibold text-gray-800 mb-2">
                Save money year-round
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1Services;

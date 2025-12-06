import { NavLink } from "react-router-dom";
import Venus from "../../../assets/images/Frame (7).svg";
import Hero from "../../../assets/images/hero-dots.svg";
function Section1Hero() {
  return (
    <section className="relative flex flex-col md:flex-row w-full overflow-hidden">
      <aside className="relative w-full md:w-[180px] min-h-auto md:min-h-screen px-10 py-10">
        <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0038FF]"></div>

        <div className="mb-14 flex md:block justify-center">
          <img src={Venus} alt="" className="w-[162px] h-[29px]" />
        </div>

        <nav className="flex flex-col gap-4 text-gray-700 font-medium text-center md:text-left">
          <NavLink to="/" className="hover:text-[#0038FF]">
            Home
          </NavLink>
          <NavLink to="/services" className="hover:text-[#0038FF]">
            Services
          </NavLink>
          <NavLink className="hover:text-[#0038FF]">Solutions</NavLink>
          <NavLink className="hover:text-[#0038FF]">Contact us</NavLink>
          <NavLink className="hover:text-[#0038FF]">more...</NavLink>
        </nav>

        <div className="mt-10 md:mt-[500px] text-center md:text-left">
          <span className="text-[#0038FF] font-semibold">Language</span>
          <div className="flex items-center gap-1 mt-2 justify-center md:justify-start cursor-pointer">
            <span>English</span>
            <svg
              className="mt-1 "
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="#000"
            >
              <path d="M0.146447 0.146447C0.323958 -0.0310644 0.601734 -0.0472018 0.797475 0.0980345L0.853553 0.146447L5.16667 4.45933L9.47978 0.146447C9.65729 -0.0310644 9.93507 -0.0472018 10.1308 0.0980345L10.1869 0.146447C10.3644 0.323958 10.3805 0.601734 10.2353 0.797475L10.1869 0.853553L5.52022 5.52022C5.34271 5.69773 5.06493 5.71387 4.86919 5.56863L4.81311 5.52022L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" />
            </svg>
          </div>
        </div>
      </aside>

      <div
        className="
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        py-20 md:py-20 
        px-6 md:px-20 
        flex flex-col md:flex-row 
        items-center 
        gap-10 md:gap-20
        lg:translate-x-56
        md:translate-x-12
        sm:translate-x-9
      "
      >
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-light leading-[1.2]">
            The new <br />
            generation of <br />
            smart and secure <br />
            infrastructure is <br />
            <span className="font-bold">here.</span>
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
            The best infrastructures helps you provide your customers{" "}
            <br className="hidden md:block" />
            the best services in a best way.
          </p>

          <div className="flex gap-2 mt-10 md:mt-32 md:translate-x-60">
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="w-2 h-2 rounded-full border border-[#0038FF]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start mt-8 md:mt-0">
        <img
          src={Hero}
          alt=""
          className=" sm:w-[266px]  md:w-[366px] md:h-[366px] opacity-95 max-w-full"
        />
      </div>
    </section>
  );
}

export default Section1Hero;

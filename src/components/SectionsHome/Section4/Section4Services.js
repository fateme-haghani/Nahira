import logo from "../../../assets/images/&.svg";
import circle from "../../../assets/images/f54b89ee29fef7a07a360250edaae3d1 2.svg";
function Section4Services() {
  return (
    <section
      className="
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        bg-black 
        py-20 md:py-32 
        flex flex-col items-center 
        overflow-hidden
      "
    >
      <img
        alt=""
        src={circle}
        className="w-56 sm:w-64 md:w-72 opacity-90 max-w-full"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <img
            src={logo}
            alt="& logo"
            className="
              w-[70px] h-[70px] 
              sm:w-[80px] sm:h-[80px] 
              md:w-[90px] md:h-[90px]
              object-contain 
              select-none 
              -translate-x-4 sm:-translate-x-6 md:-translate-x-7
            "
          />

          <div className="flex flex-col leading-tight text-center sm:text-left">
            <h1 className="text-white text-3xl sm:text-4xl font-bold sm:-translate-x-4 md:-translate-x-8">
              Services
            </h1>
            <h1 className="text-white text-3xl sm:text-4xl font-bold sm:-translate-x-3 md:-translate-x-7">
              Solutions
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4Services;

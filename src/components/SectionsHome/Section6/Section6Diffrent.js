import frame1 from "../../../assets/images/Frame (4).svg";
import frame2 from "../../../assets/images/Frame (5).svg";
import frame3 from "../../../assets/images/Frame (6).svg";
import shape from "../../../assets/images/Image (1).svg";
function Section6Different() {
  return (
    <div
      className="
        flex flex-col md:flex-row 
        justify-between items-start 
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        bg-white text-white 
        py-16 md:py-24 
        px-6 md:px-24 
        gap-10 md:gap-12
        overflow-hidden
      "
    >
      <div className="max-w-lg space-y-10 text-center md:text-left">
        <div>
          <span className="text-[#0038FF] text-sm font-semibold">
            Why Choose Us
          </span>

          <h1 className="text-black font-bold text-2xl md:text-4xl mt-3 leading-snug">
            Different types of <br /> innovative services
          </h1>

          <p className="text-[#757095] mt-4 leading-relaxed text-sm md:text-base">
            End-to-end payments and financial management in a{" "}
            <br className="hidden md:block" />
            single solution. Meet the right platform to help realize.
          </p>
        </div>

        <div className="flex items-start gap-4 justify-center md:justify-start">
          <img
            src={frame1}
            className="bg-[#0038FF] rounded-full p-2 w-10 h-10 md:w-auto md:h-auto"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl text-black">
              First Working Process
            </h2>
            <p className="text-[#757095] leading-relaxed mt-1 text-sm md:text-base">
              End-to-end payments and financial management in a{" "}
              <br className="hidden md:block" />
              single solution. Meet the right platform to help realize.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 justify-center md:justify-start">
          <img
            src={frame2}
            className="bg-[#0038FF] rounded-full p-2 w-10 h-10 md:w-auto md:h-auto"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl text-black">Dedicated Team</h2>
            <p className="text-[#757095] leading-relaxed mt-1 text-sm md:text-base">
              End-to-end payments and financial management in a{" "}
              <br className="hidden md:block" />
              single solution. Meet the right platform to help realize.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 justify-center md:justify-start">
          <img
            src={frame3}
            className="bg-[#0038FF] rounded-full p-2 w-10 h-10 md:w-auto md:h-auto"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl text-black">
              24/7 Hours Support
            </h2>
            <p className="text-[#757095] leading-relaxed mt-1 text-sm md:text-base">
              End-to-end payments and financial management in a{" "}
              <br className="hidden md:block" />
              single solution. Meet the right platform to help realize.
            </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center w-full md:w-auto">
        <img
          src={shape}
          className="max-w-[260px] sm:max-w-sm md:max-w-md w-full h-auto"
          alt=""
        />
      </div>
    </div>
  );
}

export default Section6Different;

import Venus from "../../../assets/images/Frame (8).svg";
import man from "../../../assets/images/f54b89ee29fef7a07a360250edaae3d1 1.svg";
function About() {
  return (
    <>
      <div
        className="
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        bg-black 
        py-20 md:py-20 
        px-6 md:px-20 
        flex flex-col md:flex-row 
        items-center 
        gap-10 md:gap-20
        overflow-hidden
      "
      >

        <div className="max-w-[450px] md:mr-20 text-center md:text-left">
          <h1 className="text-[#0038FF] text-5xl ">About</h1>

          <img src={Venus} className="ml-4 mt-4" alt="" />

          <h1 className="text-white text-2xl md:text-3xl leading-snug mt-4">
            Different types of <br />
            innovative services are <br />
            provided <span className="font-bold">here.</span>
          </h1>

          <p className="text-[#7C7C7C] mt-4 text-sm">
            The best infrastructures helps you provide your{" "}
            <br className="hidden md:block" />
            customers the best services in best way.
          </p>

          <button className="text-white border border-white p-2 mt-8">
            Read more . . .
          </button>
        </div>

  
        <div className="p-5 flex justify-center">
          <img
            className="w-[300px] md:w-[508px] h-auto max-w-full"
            src={man}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default About;

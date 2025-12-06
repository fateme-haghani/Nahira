import vector from "../../../assets/images/Vector.svg";
import group1 from "../../../assets/images/logos/Group.svg";
import group2 from "../../../assets/images/logos/Group (1).svg";
import group3 from "../../../assets/images/logos/Group (2).svg";
import group4 from "../../../assets/images/logos/Group (3).svg";
import group5 from "../../../assets/images/logos/Group (4).svg";
import group6 from "../../../assets/images/logos/Group (5).svg";
import group7 from "../../../assets/images/logos/Group (6).svg";
function Section5clinet() {
  return (
    <section
      className="
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        bg-[#0038FF] 
        text-white 
        py-16 md:py-24 
        px-6 md:px-24 
        text-center 
        overflow-hidden
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Clientes</h2>

      <p className="mb-10 leading-relaxed text-sm md:text-base">
        Hic placeat impedit id ducimus omnis et quia
        <br className="hidden md:block" />
        labore quo tenetur voluptas. Sed possimus iusto
      </p>

      <div className="flex flex-col items-center  relative">
        <div
          className="
            w-full sm:w-[400px] md:w-[500px] 
            h-[69px] 
            bg-black 
            flex 
            items-center 
            justify-center 
            gap-2 
            shadow-lg 
            relative
          "
        >
          <p className="text-white whitespace-nowrap text-sm md:text-base">
            Over 32k+ software businesses growing with
          </p>

          <img src="/assets/images/Frame.png" className="h-2" alt="" />

          <img
            src={vector}
            className="
              absolute 
              right-[-20px] md:right-[1px] 
              top-1/2 -translate-y-1/2 
              h-[100px] md:h-[129px] 
              w-[100px] md:w-[129px]
              max-w-full
            "
            alt=""
          />
        </div>

        <div
          className="
            w-full sm:w-[400px] md:w-[500px] 
            h-[69px] 
            bg-white 
            shadow-xl 
            px-4 
            flex 
            items-center 
            justify-center 
            gap-4 md:gap-6 
            overflow-hidden
          "
        >
          <img src={group1} className="h-2" alt="" />
          <img src={group2} className="h-2" alt="" />
          <img src={group3} className="h-2" alt="" />
          <img src={group4} className="h-2" alt="" />
          <img src={group5} className="h-2" alt="" />
          <img src={group6} className="h-2" alt="" />
          <img src={group7} className="h-2" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section5clinet;

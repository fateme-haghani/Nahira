import "./Section3QuickTranfer.css";
import Ellips2 from '../../../assets/images/shapes/Ellipse 57.svg'
function Section3QuickTransfers() {
  return (
    <div
      className="
        relative 
        w-full md:w-3/4 
        md:ml-auto 
        bg-white
        py-16 md:py-24 
        px-6 md:px-10 
        flex flex-col md:flex-row 
        items-center 
        gap-10 md:gap-16
        overflow-hidden
      "
    >

      <div className="relative flex flex-col items-center md:items-start">

        <div className="
          relative 
          bg-white 
          shadow-xl 
          p-6 md:p-8 
          w-[300px] md:w-[350px] 
          max-w-full 
          clip-bottom-right
          z-10
        ">
          <h1 className="font-bold text-lg mb-4">Quick Transfers</h1>

          <div className="flex gap-4 md:gap-6 mb-6">
            {[
              { name: "Derek", img: "derek.png" },
              { name: "Shane", img: "shane.png" },
              { name: "Alvin", img: "alvin.png" },
              { name: "Bob", img: "bob.png" },
              { name: "Minnie", img: "minnie.png" },
            ].map((user) => (
              <div key={user.name} className="flex flex-col items-center">
                <img
                  src={`/avatars/${user.img}`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  alt=""
                />
                <span className="text-xs mt-1">{user.name}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-2">Provide Amount</p>

          <div className="w-full bg-[#E6F0FF] h-5 md:h-6 flex flex-row-reverse">
            <div className="bg-[#0038FF] h-full w-1/3"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          <div className="bg-white shadow-md p-4 w-[200px] max-w-full relative z-10">
            <p className="text-xs text-gray-500">Reputation</p>
            <h2 className="text-lg font-bold">93,950</h2>
            <span className="text-[#0038FF] text-xs font-semibold">T.WAL</span>

            <div className="w-full bg-[#E6F0FF] h-6 flex relative">
              <div className="bg-[#0038FF] h-full w-1/3"></div>
              
            </div>
          </div>


          <div className="bg-white shadow-md p-4 w-[200px] max-w-full relative z-10">
            <p className="text-xs text-gray-500">Reputation</p>
            <h2 className="text-lg font-bold">23,530</h2>
            <span className="text-[#0038FF] text-xs font-semibold">T.WAL</span>

            <div className="w-full bg-[#E6F0FF] h-6 flex relative">
              <div className="bg-[#0038FF] h-full w-1/3"></div>
            </div>
          </div>
        </div>


        <div className="absolute top-[-40px] right-[-40px]  md:top-[-40px] md:right-[20px] w-[70px] md:w-[90px] z-0">
          <img  alt='' src={Ellips2} className="w-full" />
        </div>
      </div>

      <div className="max-w-md md:ml-10 text-center md:text-left">

        <span className="text-xs text-[#0038FF] font-semibold tracking-wide uppercase">
          Fast transfers
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 leading-snug">
          Different types of <br />
          innovative services <br />
          are provided
        </h2>

        <p className="text-gray-600 mt-4">
          We provide smart services for you that are <br className="hidden md:block" />
          accessible anywhere anytime.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            "Get Overview at a glance",
            "Deepwork data easily recording",
            "Get Live Support",
          ].map((text) => (
            <li key={text} className="flex items-center gap-3 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-white bg-[#0038FF] rounded-full"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                />
              </svg>
              <span className="text-gray-900">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Section3QuickTransfers;

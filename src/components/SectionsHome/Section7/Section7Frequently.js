import shape from '../../../assets/images/shapes/e57ee38c07ab1cee69ac47a3dc624c69 1.svg'
function Section7Frequently() {
  return (
    <div
      className="
        bg-[#E6E6E6] 
        w-full md:w-3/4 
        md:ml-auto 
        p-8 md:p-20 
        flex flex-col md:flex-row 
        items-center md:items-start 
        gap-10 md:gap-20
        overflow-hidden
      "
    >
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          Frequently <br /> Asked <br /> Questions
        </h1>

        <p className="border border-gray-400 mb-2 p-2 text-sm md:text-base">
          Libero Vitae Lectus Ullamcorper ?
        </p>

        <p className="w-full md:w-72 border border-gray-400 p-2 mb-2 text-sm md:text-base">
          Quisque Elementum Viverra Elit ?
        </p>

        <p className="w-full md:w-64 border border-gray-400 mb-2 p-2 text-sm md:text-base">
          Aliquam Sed Neque Massa ?
        </p>

        <p className="border border-gray-400 mb-2 p-2 text-sm md:text-base">
          Commodo Fermentum Arcu Venenatis ?
        </p>

        <p className="w-24 p-2 border border-gray-400 mx-auto md:mx-0 text-sm">
          more . . .
        </p>
      </div>

      <div className="flex justify-center md:justify-start">
        <img
          src={shape}
          alt=""
          className="max-w-[250px] sm:max-w-[300px] md:max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Section7Frequently;

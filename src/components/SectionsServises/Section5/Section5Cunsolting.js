function Section5Consulting() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[180px] "></div>

      <div
        className="
          bg-black
          px-6 md:px-12 lg:px-24
          py-10 lg:py-24
          w-full lg:w-auto
          lg:min-w-[calc(100%-635px)]
          ml-auto
          text-white
        "
      >
        <h1 className="text-2xl md:text-4xl mb-10 lg:mb-16 font-bold">
          Need consulting?
        </h1>

        <p className="text-gray-300 mb-10 leading-relaxed text-lg">
          Get us in touch about the appropriate solutions <br />
          and services for your business.
        </p>

        <button className="px-6 py-3 border border-white  hover:bg-white hover:text-black transition">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}

export default Section5Consulting;

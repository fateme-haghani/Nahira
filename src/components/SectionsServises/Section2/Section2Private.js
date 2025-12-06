function Section2private() {
  return (
    <section className="relative w-full  flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[180px]   "></div>
      <div
        className="
          bg-white
          px-6 md:px-12 lg:px-24 
          py-10 lg:py-24
          w-full lg:w-auto 
          ml-auto
        "
      >
        <h1 className="text-2xl md:text-4xl  mb-10 lg:mb-16">
          Private network
        </h1>

        <p className="text-gray-500 mb-10 md:mb-12 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam
          leo ,<br />
          ,consectetur vel tellus consectetur, feugiat pellentesque velit.
          Pellentesque quis <br />
          assa molestie, tempor magna et, scelerisque justo. Nulla sed efficitur{" "}
          <risus className="br"></risus>
          Morbi ac vulputate odio. Vivamus et libero non dolor pellentesque
          elementum. Duis <br />
          consectetur metus ex, non pulvinar enim laoreet a. Vestibulum placerat
          odio libero.
        </p>

        <div className=" lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-white bg-[#0038FF] rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900">Proin porttitor sem eget.</span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-white bg-[#0038FF] rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900">Sed vel convallis dui.</span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-white bg-[#0038FF] rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900">Neque iaculis non risus.</span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-white bg-[#0038FF] rounded-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900">
                  Proin hendrerit neque suscipit.
                </span>
              </li>
            </ul>

            <button className="mt-12 w-56 p-2   border border-[#0038FF] text-[#0038FF]">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2private;

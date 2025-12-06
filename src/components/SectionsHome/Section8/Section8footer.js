import Venus from "../../../assets/images/Frame (9).svg";
function Section8Footer() {
  return (
    <div
      className="
        w-full md:w-3/4 
        md:ml-auto 
        bg-white   
        p-6 md:p-10 
        overflow-hidden
      "
    >
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
          gap-8 md:gap-10
        "
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Venus} alt="" />

          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectet adipiscing elit. Aenean
            commodo ligula eget dolor massa.
          </p>

          <div className="flex gap-3 mt-4 text-[#0038FF] justify-center md:justify-start">
            <i className="ri-linkedin-fill text-xl"></i>
            <i className="ri-twitter-fill text-xl"></i>
            <i className="ri-facebook-fill text-xl"></i>
            <i className="ri-instagram-fill text-xl"></i>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3 text-black">Company</h3>
          <p className="text-gray-600 text-sm">About Us</p>
          <p className="text-gray-600 text-sm">Clients</p>
          <p className="text-gray-600 text-sm">Careers</p>
          <p className="text-gray-600 text-sm">Blog</p>
          <p className="text-gray-600 text-sm">Pricing</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3 text-black">Product</h3>
          <p className="text-gray-600 text-sm">Invoice</p>
          <p className="text-gray-600 text-sm">Contract</p>
          <p className="text-gray-600 text-sm">Accounting</p>
          <p className="text-gray-600 text-sm">Proposal</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3 text-black">Join Our Newsletter</h3>

          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Your email address"
              className="
                border border-gray-300 
                px-3 py-2 
                rounded-md sm:rounded-l-md sm:rounded-r-none
                w-full
              "
            />
            <button
              className="
                bg-[#0038FF] 
                text-white 
                px-4 py-2 
                rounded-md sm:rounded-r-md sm:rounded-l-none
                w-full sm:w-auto
              "
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            * Will send you weekly updates for better finance management.
          </p>
        </div>
      </div>

      <div
        className="
          flex 
          flex-wrap 
          justify-center 
          gap-4 
          my-6
          text-sm
        "
      >

        <p className="border-b border-b-gray-600">Twitter</p>
        <p className="border-b border-b-gray-600">Dribbble</p>
        <p className="border-b border-b-gray-600">Instagram</p>
        <p className="border-b border-b-gray-600">YouTube</p>
        <p className="border-b border-b-gray-600">Slack</p>
      </div>

      <div
        className="
          flex 
          flex-wrap 
          justify-center 
          text-sm 
          text-gray-600 
          gap-4 md:gap-8
        "
      >
        <p>2022 All Rights Reserved</p>
        <span className="hidden md:block">|</span>

        <p>venus@gmail.com</p>
        <span className="hidden md:block">|</span>

        <p>+92 300 848 9895</p>
      </div>
    </div>
  );
}

export default Section8Footer;

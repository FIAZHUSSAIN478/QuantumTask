import Footerlogo from "/src/assets/Images/navlogo.svg";
function Footer() {
  return (
    <div className="md:px-20  px-7 w-full pt-12.5 lg:pt-30 pb-8.25 sm:pb-6  bg-[#F9F3FF]">
      <div className="flex lg:justify-between lg:gap-3.75 pb-13 lg:pb-30  items-center sm:items-start  flex-col text-center sm:text-start sm:flex-wrap sm:flex-row  ">
        <div className="lg:max-w-108">
          <img
            className=" w-63.75 h-15 mx-auto sm:mx-0 hover:cursor-pointer"
            src={Footerlogo}
            alt="quantum Logo"
          />
          <p className="text-[#0F0F0F] font-light text-[16px] leading-6.25 mt-6  text-center sm:text-start">
            Pioneering the future of finance through quantum computing
            innovation. Transforming how institutions optimize portfolios,
            manage risk, and execute trades.
          </p>
        </div>

        <div className="mr-0 sm:mr-30 lg:mr-0">
          <h1 class=" font-bold text-[20px] leading-5.5 text-[#693B93] mt-10 lg:mt-0">
            Quick Links
          </h1>
          <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start ">
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-10 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Home
            </p>

            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              About Us
            </p>
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Services
            </p>
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Technology
            </p>
          </div>
        </div>
        <div>
          <h1 class=" font-bold text-[20px] leading-5.5 text-[#693B93] mt-10 lg:mt-0 ">
            Support
          </h1>
          <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start ">
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-10 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              FAQs
            </p>

            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Contact Us
            </p>
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Privacy Policy
            </p>
            <p class="text-[#0F0F0F] font-light text-[18px] leading-5  text-start mt-4.5 hover:cursor-pointer hover:font-bold hover:text-[#693B93]">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
      <hr class="  opacity-10 pb-7.25 sm:pb-6.25" />
      <div className="flex sm:justify-between sm:gap-10 flex-col  sm:flex-row lg:px-2.5 ">
        <div>
          <p class=" font-light text-[12px] sm:text-[18px] items-start  text-center  mx-auto w-57.5 sm:w-full">
            Copyright 2025 Quantum Asset Technologies
          </p>
        </div>
        <div>
          <p class="font-light text-[12px] sm:text-[18px]  mx-auto w-57.5 sm:w-full  text-center">
            All Rights Reserved |{" "}
            <span class="font-bold text-[12px] sm:text-[18px] hover:cursor-pointer   text-[#693B93] block sm:inline">
              Terms and Conditions | Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

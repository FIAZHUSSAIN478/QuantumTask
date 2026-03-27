import bgimg from "../assets/Images/bg1.svg";

function Section6() {
  return (
    <div className="w-full relative h-95.75 ">
      <img
        className="h-full w-full object-cover relative z-0"
        src={bgimg}
        alt="lines"
      />
      <div className="absolute inset-0 bg-[linear-gradient(91.07deg,#693B93_0%,#A46CD7_100%)] mix-blend-multiply z-10 "></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-7 md:px-20 my-12.75 sm:my-19 z-20">
        
        <h1 className="font-bold text-[26px] sm:text-[38px] md:text-[48px] leading-[100%] tracking-[0] mt-6 sm:mt-5 text-white">
          Step Into the{" "}
          <span className="font-bold text-[26px] sm:text-[38px] md:text-[48px] leading-[100%] tracking-[0] text-[#0F0F0F]">
            Quantum Future
          </span>
        </h1>

        <p className="font-light text-[14px] sm:text-[18px] sm:leading-6.25 leading-4.75 tracking-[0] text-center text-white mt-4 max-w-200.5">
          Join leading financial institutions already leveraging quantum computing for superior performance, unprecedented insights, and competitive advantage in today's markets.
        </p>

        <div>
          <button className="w-43.25 h-11 rounded-lg mt-5 text-center bg-white font-bold text-[14px] m-auto tracking-[0]">
            Book Consultation
          </button>
        </div>

      </div>
    </div>
  );
}

export default Section6;
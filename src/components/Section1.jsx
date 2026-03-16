import { Zap, Atom, Shield } from "lucide-react";
import bgimg from "../assets/Images/bg1.svg";
import icon1 from "../assets/Images/icon1.svg";
import icon2 from "../assets/Images/icon2.svg";
import icon3 from "../assets/Images/icon3.svg";

function Section1() {
  return (
    <div
      className="py-15 lg:px-20 md:px-10 px-5 bg-no-repeat bg-center bg-cover mb-8"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-6xl mx-auto text-center">

        <span className="w-62.25 h-7 gap-1.25 [transform-[rotate(0deg)] opacity-100 rounded-[20px] py-2 px-3.75 border font-octarine font-bold text-[12px] leading-[100%] tracking-normal text-[#693B93] bg-white text-sm">
          About Quantum Asset Technologies
        </span>

        <h1 className="text-[26px] font-octarine font-bold lg:text-[48px] md:text-[48px]  leading-[100%] tracking-normal  mt-6">
          Pioneering the{" "}
          <span className="text-[26px] font-octarine font-bold lg:text-[48px] md:[48px] leading-[100%] tracking-normal text-[#693B93]">
            Quantum Revolution
          </span>
        </h1>
        <p className="font-octarine mt-4 max-w-2xl   mx-auto text-[#0F0F0F]">
          We're at the forefront of financial technology, combining quantum
          computing breakthroughs with sophisticated financial modeling to
          deliver unparalleled insights, performance, and competitive advantage.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-14 text-left">

          <div className="bg-white p-8 rounded-xl shadow">
            <img src={icon1} className="text-[#693B93]  mb-4 lg:h-11 lg:w-11 md:h-11 md:w-11 h-9 w-9"  />
            <h3 className="font-octarine font-bold text-[20px] leading-[100%] tracking-normal text-[#0F0F0F] text-lg">
              Lightning Fast Processing
            </h3>
            <p className="font-octarine font-light lg:text-[18px] md:text-[18px] text-3 lg:leading-6.25 md:leading-6.25 leading-5 tracking-normal text-[#0F0F0F] mt-2">
              Process complex financial calculations in milliseconds, not
              hours. Our quantum algorithms deliver results at unprecedented speed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <img src={icon2} className="text-[#693B93] mb-4 lg:h-11 lg:w-11 md:h-11 md:w-11 h-9 w-9" size={28} />
            <h3 className="font-octarine font-bold text-[20px] leading-[100%] tracking-normal text-[#0F0F0F] text-lg">
              Quantum Advantage
            </h3>
            <p className="font-octarine font-light lg:text-[18px] md:text-[18px] text-3 lg:leading-6.25 md:leading-6.25 leading-5 tracking-normal text-[#0F0F0F] mt-2 ">
              Leverage quantum algorithms for superior portfolio optimization,
              risk assessment, and market analysis that's impossible with classical computing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <img src={icon3} className="text-[#693B93] mb-4 lg:h-11 lg:w-11 md:h-11 md:w-11 h-9 w-9" />
            <h3 className="font-octarine font-bold text-[20px] leading-[100%] tracking-normal text-[#0F0F0F] text-lg">
              Enterprise Security
            </h3>
            <p className="font-octarine font-light lg:text-[18px] md:text-[18px] text-3 lg:leading-6.25 md:leading-6.25
            leading-5 tracking-normal text-[#0F0F0F] mt-2">
              Military-grade quantum encryption and security protocols protect
              your most sensitive financial data and trading strategies.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
export default Section1;
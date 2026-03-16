import heroimg from "/src/assets/Images/vector.svg";
import herodot from "/src/assets/Images/dots.svg";

function Hero1(){
    return (
        <div className="w-full lg:py-14 md:py-8 py-6 bg-white flex items-center justify-center lg:px-20 md:px-10 px-5  mt-3">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2  lg:gap-17 md:gap-0 gap-10  items-center lg:pr-40 xl:pr-10">

                <div className="lg:w-123 md:w-75 lg:h-102.5 md:h-80   text-center lg:text-left md:text-left
                          order-2 sm:order-1 md:order-1 lg:order-1 flex flex-col lg:gap-6 md:gap-6 gap-3  w-[320]">

                    <h1 className=" text-[26px]  lg:text-6xl md:text-3xl md:leading-10 font-bold lg:leading-17 text-gray-900">
                        The Future of
                        <br />
                        <span className="text-[#693B93]">
                            Financial Intelligence
                        </span>
                    </h1>

                    <p className="font-octarine font-light lg:text-[18px] md:text-[14px] text-[13px]  tracking-tighter-0 text-custom-black">
                        Harness the revolutionary power of quantum computing
                        to transform portfolio optimization, risk analysis, and
                        financial modeling. Experience unprecedented speed,
                        accuracy, and insights in your investment decisions.
                    </p>

                    <div className="flex gap-4 lg:justify-start md:justify-start justify-center">

                        <button className="font-octarine font-bold not-italic lg:text-[14px] md:text-[12px] text-[11px] leading-[100%] tracking-normal lg:w-41.5 md:w-35 w-33 h-11 gap-1.25 opacity-100 rounded-lg text-white text-center bg-[#693b93] px-5 py-2.5 lg:mt-0 md:mt-8 cursor-pointer">
                            Explore Solutions
                        </button>

                        <button className="lg:w-38.5 md:w-35 w-33 h-11 gap-1.25 rounded-lg pt-2.5 pr-5 pb-3.75 pl-5 border border-solid border-[rgba(15,15,15,1)] font-octarine font-bold not-italic lg:text-[14px] md:text-[13px] text-[12px] leading-normal tracking-normal text-[#0f0f0f] lg:mt-0 md:mt-8 cursor-pointer">
                            Schedule Demo
                        </button>

                    </div>
                </div>

                <div className="relative lg:w-134 md:w-92.5 w-[320]  lg:h-92.75  md:h-91.75  h-71
                   order-1 sm:order-2 md:order-2 lg:order-2">

                    <div className="absolute  lg:w-[311.21px] md:w-62.5 w-56.25 h-67.5 right-0 lg:h-[371.21px] md:h-87 lg:top-[11.4px] lg:right-0 md:right-10 bg-purple-100 rounded-tr-[750px]"></div>


                    <img
                        src={heroimg}
                        alt="hero"
                        className="absolute w-[110.12px] lg:h-[126.10px] md:h-[126.10px] h-20 lg:top-[55.8px] md:top-[55.8px] top-6.5 lg:left-20 md:left-0 left-0"
                    />


                    <div className="absolute lg:w-45 md:w-40 w-35.5 left-20 lg:h-21.75 md:h-[60] lg:top-12.5 md:top-12.5 top-5.5 lg:left-42.5 md:left-25 bg-white shadow-lg rounded-[20px] px-4.5 py-3.5 flex flex-col lg:gap-1.25 md:gap-1.25 gap-1 ">
                        <p className="font-octarine font-bold lg:text-[12px] md:text-[12px] text-[10px] leading-[100%] tracking-[0%] [leading-trim:none]">
                            Quantum Processing
                        </p>
                        <h3 className="font-octarine font-bold not-italic lg:text-2xl md:text-xl text-[16px] leading-none tracking-normal text-[#693B93]">
                            99.9%
                        </h3>
                        <p className="font-['Octarine'] text-[#0f0f0f]/50 font-light text-[10px] leading-none tracking-normal">
                            Accuracy Rate
                        </p>
                    </div>


                    <div className="absolute lg:w-53.25 md:w-40 w-34.5 lg:h-21.75 md:h-[60] lg:top-[176.4px] md:top-[176.4px] top-26.25  lg:left-15 md:left-0 left-0 bg-white shadow-lg rounded-[20px] px-4.5 py-3.5 flex flex-col gap-1.25 ">
                        <p className="font-octarine font-bold lg:text-[12px] md:text-[12px] text-[11px] leading-[100%] tracking-[0%] [leading-trim:none]">
                            Security
                        </p>
                        <h3 className="font-octarine font-bold not-italic lg:text-2xl md:xl text-[16px] leading-none tracking-normal text-[#693B93]">
                            Bank-Grade
                        </h3>
                        <p className="font-['Octarine'] text-[#0f0f0f]/50 font-light text-[10px] leading-none tracking-normal">
                            Encryption
                        </p>
                    </div>


                    <div className="absolute lg:w-45 md:w-37.5 w-28.25 lg:h-21.75 md:h-[60] lg:top-[155.4px]
                    md:top-[155.4px] top-24.75 lg:left-75 md:left-47 left-37.5 bg-white shadow-lg rounded-[20px] px-4.5 py-3.5 flex flex-col gap-1.25 ">
                        <p className="font-octarine font-bold lg:text-[12px] md:text[12px] text-[11px] leading-[100%] tracking-[0%] [leading-trim:none]">
                            Performance
                        </p>
                        <h3 className="font-octarine font-bold not-italic lg:text-2xl md:text-xl text-[16px] leading-none tracking-normal text-[#693B93]">
                            1000x
                        </h3>
                        <p className="font-['Octarine'] text-[#0f0f0f]/50 font-light text-[10px] leading-none tracking-normal">
                            Faster Analysis
                        </p>
                    </div>


                    <div className="absolute lg:w-45 md:w-40 w-28.5 lg:h-21.75 md:h-[60] lg:top-[278.4px] md:top-66 top-45 lg:left-62.5 md:left-37.5 left-28.75 bg-white shadow-lg rounded-[20px] px-4.5 py-3.5 flex flex-col gap-1.25">
                        <p className="font-octarine font-bold lg:text-[12px] md:[12px] text-[11px] leading-[100%] tracking-[0%] [leading-trim:none]">
                            ROI Increase
                        </p>
                        <h3 className="font-octarine font-bold not-italic lg:text-2xl md:text-xl text-[16px] leading-none tracking-normal text-[#693B93]">
                            +47%
                        </h3>
                        <p className="font-['Octarine'] text-[#0f0f0f]/50 font-light text-[10px] leading-none tracking-normal">
                            Average Boost
                        </p>
                    </div>

                    <img
                        src={herodot}
                        alt="hero"
                        className="absolute lg:w-[110.12px] md:w-[110.12px] w-19 h-[126.10px] lg:top-[260.8px] md:top-61.25 top-41.25 lg:left-25 md:left-6 left-7.5"
                    />

                </div>

            </div>

        </div>
    );
};

export default Hero1;
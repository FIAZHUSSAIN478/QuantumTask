import section4img from "../assets/Images/section4img.svg";
import bgimg2 from "../assets/Images/bg1.svg";
function Section4() {
  return (
    <div className="w-full bg-[#f5f3fb] py-16 px-6 md:px-12 lg:px-20  bg-center bg-cover "
      style={{ backgroundImage: `url(${bgimg2})` }}
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-12 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="lg:h-110 lg:w-114 md:h-114 md:w-114 h-60 w-full lg:order-1 md:order-1 order-2  items-center justify-center flex">
          <img
            src={section4img}
            alt="quantum illustration"
            className="lg:h-100 md:h-100 h-59.5"
          />
        </div>

        {/* //right side content // */}
        <div className="lg:h-126 lg:order-2 md:order-2 order-1  text-center lg:text-left md:text-left">
          <span className="w-49.75 h-7 opacity-100 gap-1.25 rounded-[20px] py-2 px-3.75 bg-[#f9f3ff]  text-[#693b93] font-bold  text-[12px] mb-4 border">
            Quantum Technology Stack
          </span>
          <h2 className=" font-octarine font-bold  lg:text-[39px] md:text-[39px] text-[26px] leading-[100%] tracking-[0%] mt-4">
            Where Quantum Computing{" "} <br />
            <span className="font-octarine font-bold lg:text-4xl md:text-4xl text-[26px] leading-tight tracking-normal text-[#693b93]">Meets Finance</span>
          </h2>
          <p className="font-octarine font-light lg:text-[16px] md:text-[16px] text-[12px] lg:leading-6.25 md:leading-6.25 leading-5 text-[rgba(15,15,15,1)] mt-2">
            Our proprietary quantum algorithms solve complex financial problems
            that are impossible for classical computers, giving you a decisive
            advantage in today's  markets.
          </p>
          <div className="space-y-3">

            <div>
              <h4 className="font-octarine font-bold lg:text-xl md:text-xl text-[22px] leading-none tracking-normal text-[#693b93] mt-3 ">
                Quantum Supremacy in Finance
              </h4>
              <p className="font-octarine font-light lg:text-[16px] md:text-[16px] text-[12px] lg:leading-6.25 md:leading-6.25 leading-5  tracking-normal text-[rgba(15,15,15,1)] mt-1">
                Exponentially faster processing for optimization
                problems, portfolio analysis, and risk calculations that would
                take classical computers years to solve.
              </p>
            </div>

            <div>
              <h4 className="font-octarine font-bold lg:text-xl md:text-xl text-[22px] leading-none tracking-normal text-[#693b93] ">
                AI-Enhanced Quantum Algorithms
              </h4>
              <p className="font-octarine font-light lg:text-[16px] md:text-[16px] text-[12px] lg:leading-6.25 md:leading-6.25 leading-5 tracking-normal text-[rgba(15,15,15,1)] mt-1">
                Machine learning integration that enables our quantum systems to
                continuously learn, adapt, and  their performance based
                on market conditions.
              </p>
            </div>

            <div>
              <h4 className="font-octarine font-bold lg:text-xl md:text-xl text-[22px] leading-none tracking-normal text-[#693b93] ">
                Enterprise Cloud Architecture
              </h4>
              <p className="font-octarine font-light lg:text-[16px] md:text-[16px] text-[12px] lg:leading-6.25 md:leading-6.25 leading-5 tracking-normal text-[rgba(15,15,15,1)] mt-1">
                Scalable quantum computing infrastructure accessible through
                secure, enterprise-grade APIs with global deployment and 99.9%
                uptime guarantee.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
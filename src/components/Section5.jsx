import { useState } from "react";

const QuestionData = [
    {
        id: "01",
        question: "What is quantum computing and how does it apply to finance?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    },
    {
        id: "02",
        question: "How secure is quantum computing for financial data?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    },
    {
        id: "03",
        question: "What kind of performance improvements can we expect?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    },
    {
        id: "04",
        question: "What kind of performance improvements can we expect?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    },
    {
        id: "05",
        question: "How do we integrate with existing systems?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    },
    {
        id: "06",
        question: "What is the pricing model for quantum solutions?",
        answer:
            "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest, with continuous monitoring and compliance with regulations like SOC 2, ISO 27001, and financial industry standards."
    }
];

function Section5() {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-20 lg:px-20 md:px-10 px-4 ">
            <div className="text-center mb-12">
                <span className="w-62.25 h-7 gap-1.25 [transform-[rotate(0deg)] opacity-100 rounded-[20px] py-2 px-3.75 border font-octarine font-bold text-[12px] leading-[100%] tracking-normal text-[#693B93] bg-purple-100 text-sm">
                    Frequently Asked Questions
                </span>

                <h1 className="text-[26px] font-octarine font-bold lg:text-[48px] md:text-[48px]  leading-[100%] tracking-normal  mt-6">
                    Got{" "}
                    <span className="text-[26px] font-octarine font-bold lg:text-[48px] md:[48px] leading-[100%] tracking-normal text-[#693B93] ">
                        Questions?
                    </span>
                </h1>
                <p className="font-octarine mt-4 max-w-2xl   mx-auto text-[#0F0F0F]">
                    Everything you need to know about quantum computing in finance and our solutions
                </p>
            </div>

            <div className=" max-w-7xl mx-auto">
                {QuestionData.map((item, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={` transition-all duration-300 ${isOpen ? "bg-purple-50 p-6 rounded-2xl" : "bg-white p-8"
                                }`}
                        >
                            <div
                                className="flex items-center justify-between  cursor-pointer"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center xl:gap-67.5 lg:gap-40 md:gap-17 gap-5">
                                    <span className="text-[#D5A7FF]    font-semibold">
                                        {item.id}
                                    </span>
                                    <h3 className={`font-octarine lg:text-[18px] md:text-[16px] text-[14px] font-bold not-italic text-display-4 leading-[135%] tracking-normal 
                                     ${isOpen ? "text-[#693B93]" : "text-black"}`}>
                                        {item.question}
                                    </h3>
                                </div>

                                <span className="text-[#D5A7FF]  text-xl font-bold">
                                    {isOpen ? "×" : "+"}
                                </span>
                            </div>
                            {isOpen && (
                                <p className=" mt-2.5 font-Octarine font-light  text-[Typography/Font Size/Paragraph/Small] leading-[150%] tracking-[0%] text-[rgba(15,15,15,1)]    lg:w-132.5 xl:ml-72 lg:ml-44 md:w-108 md:ml-21.5 w-60 ml-9 lg:text-[16px] md:text-[14px] text-[12px]">
                                    {item.answer}
                                </p>
                            )}

                        </div>
                    );
                })}
                <hr className="text-[#D9DBE9] border" />
            </div>
        </div>
    );
};

export default Section5;
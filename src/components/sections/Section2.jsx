import bgimg from "../../assets/Images/bg1.svg";
import icon1 from "../../assets/Images/icon1.svg";
import icon2 from "../../assets/Images/icon2.svg";
import icon3 from "../../assets/Images/icon3.svg";
import Cards from "../Cards";

function Section2() {

    const cards = [
        {
            icon: icon1,
            title: "Lightning Fast Processing",
            description:
                "Process complex financial calculations in milliseconds, not hours. Our quantum algorithms deliver results at unprecedented speed.",
        },
        {
            icon: icon2,
            title: "Quantum Advantage",
            description:
                "Leverage quantum algorithms for superior portfolio optimization, risk assessment, and market analysis that's impossible with classical computing.",
        },
        {
            icon: icon3,
            title: "Enterprise Security",
            description:
                "Military-grade quantum encryption and security protocols protect your most sensitive financial data and trading strategies.",
        },
        
    ];

    return (
        <div
            className="py-15 lg:px-20 md:px-10 px-5 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className="max-w-6xl mx-auto text-center">

                <span className="rounded-[20px] py-2 px-4 border font-octarine font-bold text-[12px] text-[#693B93] bg-white">
                    About Quantum Asset Technologies
                </span>

                <h1 className="text-[26px] font-octarine font-bold lg:text-[48px] md:text-[48px] mt-6">
                    Pioneering the{" "}
                    <span className="text-[#693B93]">
                        Quantum Revolution
                    </span>
                </h1>

                <p className="font-octarine mt-4 max-w-2xl mx-auto text-[#0F0F0F]">
                    We're at the forefront of financial technology, combining quantum
                    computing breakthroughs with sophisticated financial modeling to
                    deliver unparalleled insights, performance, and competitive advantage.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-14 text-left">
                    {cards.map((card, index) => (
                        <Cards
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Section2;
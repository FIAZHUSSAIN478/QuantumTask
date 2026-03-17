import icon1 from "../../assets/Images/icon6.svg";
import icon2 from "../../assets/Images/icon4.svg";
import icon3 from "../../assets/Images/icon5.svg";
import Cards2 from '../Cards2';

function Section3() {
    const cards = [
        {
            icon: icon1,
            title: "Portfolio Optimization",
            description:
                "Quantum algorithms analyze millions of scenarios simultaneously to find optimal portfolio allocations with unprecedented precision and speed.",
            features: [
                "Real-time portfolio rebalancing",
                "Risk-adjusted return optimization",
                "Multi-asset class support",
                "ESG integration capabilities",
            ],
        },
        {
            icon: icon2,
            title: "Advanced Risk Analytics",
            description:
                "Advanced quantum models predict and quantify risks with unprecedented accuracy, helping you make informed decisions in volatile markets.",
            features: [
                "Value-at-Risk (VaR) calculations",
                "Monte Carlo stress testing",
                "Multi-scenario analysis",
                "Real-time risk monitoring",
            ],
        },
        {
            icon: icon3,
            title: "Quantum Trading Algorithms",
            description:
                "Quantum-powered trading algorithms execute strategies with superhuman speed and precision, identifying opportunities invisible to systems.",
            features: [
                "High-frequency optimization",
                "Automated market making",
                "Cross-market arbitrage detection",
                "Predictive market analysis",
            ],
        },
    ];

    return (
        <div className="py-15 lg:px-20 md:px-10 px-5 bg-no-repeat bg-center bg-white">
            <div className="max-w-6xl mx-auto text-center">

                <span className="rounded-[20px] py-2 px-4 border font-octarine font-bold text-[12px] text-[#693B93] bg-white">
                    Quantum-Enhanced Solutions
                </span>

                <h1 className="text-[26px] font-octarine font-bold lg:text-[48px] md:text-[48px] mt-6">
                    Revolutionary{" "}
                    <span className="text-[#693B93]">
                        Financial Services
                    </span>
                </h1>

                <p className="font-octarine mt-4 max-w-2xl mx-auto text-[#0F0F0F]">
                    Transform your financial operations with our cutting-edge quantum computing solutions designed for the modern financial landscape
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-14 text-left">
                    {cards.map((card, index) => (
                        <Cards2
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            features={card.features}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Section3;
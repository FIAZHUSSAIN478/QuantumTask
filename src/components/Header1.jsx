import { useState } from "react";
import navlogo from "/src/assets/Images/navlogo.svg";
import dropdown from "/src/assets/Images/dropdown.svg";
import Germany from "/src/assets/Images/germany.svg";
import usa from "/src/assets/Images/united-state.svg";


function Header1() {
    const [hamburger, setHamBurger] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-solid border-[#eeeeee] shadow-[0_3px_10px_0_rgba(0,0,0,0.1)] sticky top-0 z-10">

            <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 h-16 md:h-20">

                <div className="w-32 h-7.5 md:w-50.5 md:h-12">
                    <img
                        src={navlogo}
                        alt="logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-7 cursor-pointer">
                        <li className="font-octarine font-light text-base text-[#0F0F0F] hover:font-extrabold hover:text-[#693B93]">
                            Home
                        </li>
                        <li className="font-octarine font-light text-base text-[#0F0F0F] hover:font-bold hover:text-[#693B93]">
                            About Us
                        </li>
                        <li className="font-octarine font-light text-base text-[#0F0F0F] hover:font-bold hover:text-[#693B93]">
                            Services
                        </li>
                        <li className="font-octarine font-light text-base text-[#0F0F0F] hover:font-bold hover:text-[#693B93]">
                            Technology
                        </li>
                        <li className="font-octarine font-light text-base text-[#0F0F0F] hover:font-bold hover:text-[#693B93]">
                            FAQs
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <button className="hidden md:block bg-[#693B93] text-white w-30 h-11 rounded-lg font-octarine font-bold text-[14px] cursor-pointer">
                        Contact Us
                    </button>

                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hidden md:flex w-33.75 h-11 rounded-lg border bg-[#F9F3FF] items-center gap-2 px-2 cursor-pointer">
                        <img src={Germany} alt="flag" />
                        <p className="font-visby font-bold text-[14px]">Germany</p>
                        <img src={dropdown} alt="dropdown" className="h-5 w-5" />
                    </button>

                    <div
                        className="lg:hidden cursor-pointer"
                        onClick={() => setHamBurger(!hamburger)}
                    >
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>

                </div>
            </div>
            {hamburger && (
                <div className="lg:hidden md:px-10 px-5 pb-6 bg-[#f9f3ff]">

                    <ul className="flex flex-col gap-4 pt-4">
                        <li className="font-octarine font-bold text-[#693B93]">Home</li>
                        <li className="font-octarine">About Us</li>
                        <li className="font-octarine">Services</li>
                        <li className="font-octarine">Technology</li>
                        <li className="font-octarine">FAQs</li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-4 md:hidden">

                        <button className="bg-[#693B93] text-white w-full h-10 rounded-lg font-bold">
                            Contact Us
                        </button>

                        <button className="w-full h-10 rounded-lg border bg-[#F9F3FF] flex items-center justify-center gap-2">
                            <img src={Germany} alt="" />
                            <span className="font-visby font-bold">Germany</span>
                            <img src={dropdown} alt="" className="h-4 w-4" />
                        </button>

                    </div>

                </div>
            )}


            {dropdownOpen && (
                <div className="absolute right-20 top-15.5 w-34 bg-[#f9f3ff] rounded-lg shadow-md p-3">

                    <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src={usa} alt="english" className="w-6 h-6" />
                        <span className="font-visby font-bold">English</span>
                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src={Germany} alt="germany" className="w-6 h-6" />
                        <span className="font-visby font-bold">Germany</span>
                    </div>

                </div>
            )}
        </header>
    );
}

export default Header1;
import icon8 from "../assets/Images/icon8.svg";

function Cards2({ icon, title, description, features }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow">
            <img
                src={icon}
                className="lg:h-11 lg:w-11 md:h-11 md:w-11 h-9 w-9"
            />

            <h3 className="font-octarine font-bold text-[20px] text-[#0F0F0F]">
                {title}
            </h3>

            <p className="font-octarine font-light lg:text-[18px] md:text-[18px] lg:leading-6.25 md:leading-6.25 leading-5 text-[#0F0F0F] mt-2">
                {description}
            </p>
            {features.map((item, index) => (
                <div key={index} className='flex gap-2 mt-2'>
                    <img src={icon8} alt="" className="mt-0.8" />
                    <p className="font-octarine font-light lg:text-[18px] md:text-[18px] lg:leading-6.25 md:leading-6.25 leading-5 text-[#0F0F0F]">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Cards2;
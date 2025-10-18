import { useRef, type FC } from "react";
import { Link } from "react-router-dom";
import fightClubCard from "../../../assets/main/focus/fight-club.webp";
import { scrollLeft, scrollRight } from "../../../constants/constants";


export const Focus: FC = function Focus() {
    const sliderRef = useRef<HTMLUListElement>(null);

    return (
        <section className="m-10">
            <h2 className="text-2xl font-semibold mb-4">In focus</h2>
            <div className="relative">

                {/* Left */}
                <button
                    onClick={() => scrollLeft(sliderRef)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all -ml-4"
                >
                    ‹
                </button>
                {/* Slider */}
                <ul ref={sliderRef} className="flex gap-2 overflow-x-auto max-w-[920px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <li className="w-56 h-76 flex flex-col justify-between bg-black transition-all hover:brightness-70">
                        <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                            <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                            <img src={fightClubCard} alt="Fight Club" className="" />
                        </Link>
                    </li>
                    <li className="w-56 h-76 flex flex-col justify-between bg-black transition-all hover:brightness-70">
                        <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                            <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                            <img src={fightClubCard} alt="Fight Club" className="" />
                        </Link>
                    </li>
                    <li className="w-56 h-76 flex flex-col justify-between bg-black transition-all hover:brightness-70">
                        <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                            <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                            <img src={fightClubCard} alt="Fight Club" className="" />
                        </Link>
                    </li>
                    <li className="w-56 h-76 flex flex-col justify-between bg-black transition-all hover:brightness-70">
                        <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                            <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                            <img src={fightClubCard} alt="Fight Club" className="" />
                        </Link>
                    </li>
                    <li className="w-56 h-76 flex flex-col justify-between bg-black transition-all hover:brightness-70">
                        <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                            <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                            <img src={fightClubCard} alt="Fight Club" className="" />
                        </Link>
                    </li>
                </ul>
                {/* Right */}
                <button
                    onClick={() => scrollRight(sliderRef)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all -mr-4"
                >
                    ›
                </button>
            </div>
        </section>
    )
}
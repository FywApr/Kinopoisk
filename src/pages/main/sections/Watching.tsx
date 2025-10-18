import type { FC } from "react";
import { useRef } from "react";
import arrowIcon from "../../../assets/main/tickets/arrow-right-white.svg";
import yplusIcon from "../../../assets/main/tickets/y-plus.webp";
import fightClubImg from "../../../assets/main/tickets/fight-club.jpg";
import { Link } from "react-router-dom";
import { ratingStyle, scrollLeft, scrollRight } from "../../../constants/constants";

export const Watching: FC = function Watching() {
    const sliderRef = useRef<HTMLUListElement>(null);

    return (
        <section className="m-10 relative pt-[50px]">
            <Link to={'/'} className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold">Watching now</h2>
                <img src={arrowIcon} className="h-5 ml-1" alt="Arrow" />
            </Link>

            <div className="relative">
                {/* Left */}
                <button
                    onClick={() => scrollLeft(sliderRef)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all -ml-4"
                >
                    ‹
                </button>

                {/* Slider */}
                <ul
                    ref={sliderRef}
                    className="flex gap-2 overflow-x-auto max-w-[920px]"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
                        </Link>
                    </li>
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
                        </Link>
                    </li>
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
                        </Link>
                    </li>
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
                        </Link>
                    </li>
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
                        </Link>
                    </li>
                    <li className=" flex-shrink-0 group">
                        <Link to={'/'}>
                            <div className="block relative mb-2">
                                <span className={`absolute top-1 left-1 text-white font-semibold px-1 h-5 flex items-center z-10 ${ratingStyle}`}>8.7</span>
                                <img src={fightClubImg} alt="Fight Club" className="block w-[229px] h-[344px] bg-black transition-all group-hover:brightness-70" />
                                <img src={yplusIcon} className="absolute h-6 w-6 mr-1 absolute bottom-1 right-1 " alt="Ticket" />
                            </div>
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
    );
};
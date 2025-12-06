import type { FC } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/main/tickets/arrow-right.svg";
import filmImg from "../../../assets/main/release/film.webp";
import favouriteIcon from "../../../assets/main/favourite-gray.svg";
import favouriteFocusedIcon from "../../../assets/main/favourite-orange.svg";

export const ReleaseCalendar: FC = function ReleaseCalendar() {
    return (
        <section className="m-10">
            <h2 className="text-2xl font-semibold border-b border-black pb-4 mb-6">Release Calendar</h2>
            <Link to={'/'} className="inline-flex items-center mb-4">
                <h3 className="font-semibold">Soon in the cinema</h3>
                <img src={arrowIcon} className="h-5 ml-1" alt="Arrow" />
            </Link>
            <div className="flex justify-between">
                <ul className="w-full">
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis.</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="w-full">
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis.</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                    <li className="flex max-w-[420px] border-b border-gray pb-3">
                        <span className="opacity-60 mr-7">1.</span>
                        <div className="flex w-full items-center justify-between">
                            <Link to={'/'} className="flex items-center w-44">
                                <img src={filmImg} alt="Film" className="max-w-10 max-h-[60px] mr-2.5" />
                                <span className="text-xs mr-2.5 transition-all hover:text-[#f50]">Rapaces</span>
                            </Link>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-semibold opacity-60">11</span>
                                <span className="text-xs opacity-60">December</span>
                            </div>
                            <div className="transition-all group cursor-pointer">
                                <img src={favouriteIcon} alt="favourite" className="max-w-6 group-hover:hidden" />
                                <img src={favouriteFocusedIcon} alt="favourite" className="max-w-6 hidden group-hover:block" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
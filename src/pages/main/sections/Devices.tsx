import type { FC } from "react";
import arrowIcon from "../../../assets/main/tickets/arrow-right-white.svg";
import { Link } from "react-router-dom";
import iosBlackIcon from "../../../assets/main/devices/ios-black.svg"
import iosWhiteIcon from "../../../assets/main/devices/ios-white.svg"
import xiaomiWhiteIcon from "../../../assets/main/devices/xiaomi-white.svg"
import xiaomiBlackIcon from "../../../assets/main/devices/xiaomi-black.svg"
import androidTvWhiteIcon from "../../../assets/main/devices/android-tv-white.svg"
import androidTvBlackIcon from "../../../assets/main/devices/android-tv-black.svg"
import haierBlackIcon from "../../../assets/main/devices/haier-black.svg"
import haierWhiteIcon from "../../../assets/main/devices/haier-white.svg"
import androidBlackIcon from "../../../assets/main/devices/android-black.svg"
import androidWhiteIcon from "../../../assets/main/devices/android-white.svg"

export const Devices: FC = function Devices() {
    return (
        <section className="m-10">
            <Link to={'/'} className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold">Watch on any device</h3>
                <img src={arrowIcon} className="h-5 ml-1" alt="Arrow" />
            </Link>
            <div className="flex">
                <ul className="flex flex-wrap gap-2 max-w-[400px]">
                    {/* Double block */}
                    <li className="bg-[#141414] cursor-pointer w-72 h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-between h-full">
                            <img src={iosWhiteIcon} alt="iOS" className="max-w-16 group-hover:hidden" />
                            <img src={iosBlackIcon} alt="iOS" className="max-w-16 hidden group-hover:block" />
                            <p className="text-[#777] text-xs">Tablets and smartphones</p>
                        </Link>
                    </li>
                    {/* Single block */}
                    <li className="bg-[#141414] cursor-pointer w-[140px] h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-center items-center h-full">
                            <img src={xiaomiWhiteIcon} alt="Xiaomi" className="max-w-14 group-hover:hidden" />
                            <img src={xiaomiBlackIcon} alt="Xiaomi" className="max-w-14 hidden group-hover:block" />
                        </Link>
                    </li>
                    <li className="bg-[#141414] cursor-pointer w-[140px] h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-center items-center h-full">
                            <img src={androidTvWhiteIcon} alt="Android TV" className="max-w-28 group-hover:hidden" />
                            <img src={androidTvBlackIcon} alt="Android TV" className="max-w-28 hidden group-hover:block" />
                        </Link>
                    </li>
                    <li className="bg-[#141414] cursor-pointer w-[140px] h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-center items-center h-full">
                            <img src={haierWhiteIcon} alt="Haier" className="max-w-28 group-hover:hidden" />
                            <img src={haierBlackIcon} alt="Haier" className="max-w-28 hidden group-hover:block" />
                        </Link>
                    </li>
                    {/* Double block */}
                    <li className="bg-[#141414] cursor-pointer w-72 h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-between h-full">
                            <img src={androidWhiteIcon} alt="Android" className="max-w-32 group-hover:hidden" />
                            <img src={androidBlackIcon} alt="Android" className="max-w-32 hidden group-hover:block" />
                            <p className="text-[#777] text-xs">Tablets and smartphones</p>
                        </Link>
                    </li>
                    <li className="bg-[#141414] cursor-pointer w-72 h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-between h-full">
                            <img src={androidWhiteIcon} alt="Android" className="max-w-32 group-hover:hidden" />
                            <img src={androidBlackIcon} alt="Android" className="max-w-32 hidden group-hover:block" />
                            <p className="text-[#777] text-xs">Tablets and smartphones</p>
                        </Link>
                    </li>
                    {/* Single block */}
                    <li className="bg-[#141414] cursor-pointer w-[140px] h-32 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-center items-center h-full">
                            <img src={xiaomiWhiteIcon} alt="Xiaomi" className="max-w-14 group-hover:hidden" />
                            <img src={xiaomiBlackIcon} alt="Xiaomi" className="max-w-14 hidden group-hover:block" />
                        </Link>
                    </li>
                </ul>
                <div>
                    <div className="bg-[#141414] cursor-pointer w-[140px] h-66 p-6 hover:scale-101 hover:bg-white transition-all duration-200 group">
                        <Link to={''} className="flex flex-col justify-center items-center h-full">
                            <img src={xiaomiWhiteIcon} alt="Xiaomi" className="max-w-14 group-hover:hidden" />
                            <span>All devices</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
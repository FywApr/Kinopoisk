import type { FC } from "react";
import logo from "../../assets/logo.svg";
import playIcon from "../../assets/header/play.svg";
import ticketIcon from "../../assets/header/ticket.svg";
import searchIcon from "../../assets/header/search.svg";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

export const Header: FC = function Header() {
    return (
        <header className="bg-[#141414] py-5 text-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-48">
                <nav className="flex justify-between items-center">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-all group">
                        <img src={playIcon} alt="play" className="brightness-70 group-hover:brightness-100 transition-all" />
                        Online-Cinema
                    </Link>
                    <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-all group">
                        <img src={ticketIcon} alt="ticket" className="brightness-70 group-hover:brightness-100 transition-all" />
                        Movie ticket
                    </Link>
                    <div className="flex justify-between items-center rounded-lg bg-[rgba(255,255,255,0.15)] w-full max-w-[370px] focus-within:bg-white transition-all">
                        <input
                            type="text"
                            placeholder="Films, tv-series, persons"
                            className="pl-4 py-2 outline-none rounded-lg text-[rgba(255,255,255,0.7)] w-full placeholder-[rgba(255,255,255,0.5)] focus:text-dark focus:placeholder-gray-400 transition-all bg-transparent"
                        />
                        <img src={searchIcon} alt="search" className="cursor-pointer brightness-50 pr-2" />
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Button variant="y-plus" className="h-[32px] text-xs px-[14px] py-[2px]">Watch film</Button>
                        <Link className="flex items-center gap-x-2 font-medium text-[rgba(255,255,255,0.7)] hover:text-white transition-all group" to={'/'}>Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
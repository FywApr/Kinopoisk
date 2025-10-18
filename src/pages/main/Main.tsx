import type { FC } from "react";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/aside/home.svg";
import mediaIcon from "../../assets/aside/media.svg";
import ticketsIcon from "../../assets/aside/tickets.svg";
import subscriptionsIcon from "../../assets/aside/subscriptions.svg";
import sportIcon from "../../assets/aside/sport.svg";
import channelsIcon from "../../assets/aside/tv-channels.svg";
import seriesIcon from "../../assets/aside/tv-series.svg";
import filmIcon from "../../assets/aside/film.svg";
import playIcon from "../../assets/aside/play.svg";
import { Announcement } from "./sections/Announcement";
import { Focus } from "./sections/Focus";
import { Tickets } from "./sections/Tickets";
import { Watching } from "./sections/Watching";

export const Main: FC = function Main() {
    return (
        <div className="bg-[#f4f4f4]">
            <Header></Header>
            <main className="container mx-auto px-48 flex">
                {/* Left menu */}
                <aside className="w-[300px] pt-7 pl-2 pr-12 border-r-1 border-gray-300 bg-white">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={homeIcon} alt="home" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={playIcon} alt="online-cinema" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Online cinema
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={filmIcon} alt="films" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Films
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={seriesIcon} alt="tv-series" className="brightness-70 group-hover:brightness-10 transition-all" />
                                TV series
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={channelsIcon} alt="tv-channels" className="brightness-70 group-hover:brightness-10 transition-all" />
                                TV channels
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={sportIcon} alt="sport" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Sport
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={subscriptionsIcon} alt="Subscrptions" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Subscrptions
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={ticketsIcon} alt="Tickets" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Tickets
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className="flex items-center gap-x-2 font-medium text-[rgba(0,0,0,.6)] hover:text-black transition-all group">
                                <img src={mediaIcon} alt="Media" className="brightness-70 group-hover:brightness-10 transition-all" />
                                Media
                            </Link>
                        </li>
                    </ul>
                </aside>

                <article className="bg-white">
                    {/* Announcement */}
                    <Announcement />
                    {/* Focus */}
                    <Focus />
                    {/* Tickets */}
                    <Tickets />
                    {/* Watching Now */}
                    <div className="bg-black text-white">
                        <Watching />
                    </div>
                </article>


            </main>
        </div>
    )
}
import type { FC } from "react";
import { Button } from "../../components/button/Button";
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
import fightClubBackground from "../../assets/main/fight-club.jpg";
import favouriteIcon from "../../assets/main/favourite.svg";
import fightClubCard from "../../assets/main/focus/fight-club.webp";
import playSectionIcon from "../../assets/header/play.svg";

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
                    <section className="flex items-stretch h-[400px] m-10">
                        <div className="flex-1 max-w-[500px] bg-black text-white p-6 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">Fight Club</h2>
                            <p className="mb-4 text-xs leading-relaxed">
                                Фермер и робот бегут из космической тюрьмы навстречу приключениям. Захватывающий сай-фай с русской душой
                            </p>
                            <p className="mb-4 text-xs text-gray-300">
                                <strong>Starring:</strong> Сергей Чихачёв, Григoрий Скрялкин, Сергей Бурунов, Влада Лукина, Ольга Жевакина, Артем Семакин, Елена Макова
                            </p>
                            <p className="mb-8 text-xs text-gray-300">
                                <strong>Director:</strong> Сергей Васильев
                            </p>
                            <span className="text-orange text-xl font-semibold">Already in subscription</span>

                            <div className="flex gap-3 mt-6">
                                <Button variant="orange" className="text-lg px-8 py-3">
                                    <img src={playSectionIcon} alt="play" className="mr-2 w-5 h-5" />
                                    Watch
                                </Button>
                                <Button variant="dark" className="px-6 py-3">
                                    <img src={favouriteIcon} alt="favourite" className="" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 relative min-h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/1 h-[400px] to-transparent z-5"></div>
                            <img
                                src={fightClubBackground}
                                alt="Fight Club"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </section>

                    {/* Focus */}
                    <section className="m-10">
                        <h2 className="text-2xl font-semibold mb-4">In focus</h2>
                        <ul className="flex gap-2">
                            <li className="w-56 h-76 flex flex-col justify-between bg-black">
                                <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                                    <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                                    <img src={fightClubCard} alt="Fight Club" />
                                </Link>
                            </li>
                            <li className="w-56 h-76 flex flex-col justify-between bg-black">
                                <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                                    <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                                    <img src={fightClubCard} alt="Fight Club" />
                                </Link>
                            </li>
                            <li className="w-56 h-76 flex flex-col justify-between bg-black">
                                <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                                    <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                                    <img src={fightClubCard} alt="Fight Club" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className="w-56 h-76 flex flex-col justify-between bg-black">
                                    <span className="text-white my-auto text-lg p-1.5 text-center">Lorem ipsum dolor sit ameasdadsadt.</span>
                                    <img src={fightClubCard} alt="Fight Club" />
                                </Link>
                            </li>
                        </ul>
                    </section>
                </article>


            </main>
        </div>
    )
}
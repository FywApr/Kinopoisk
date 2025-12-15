import type { FC } from "react";
import VkIcon from "../../assets/footer/socials/vk.png";
import YtIcon from "../../assets/footer/socials/yt.png";
import TgIcon from "../../assets/footer/socials/tg.png";
import DzenIcon from "../../assets/footer/socials/dzen.png";
import TtIcon from "../../assets/footer/socials/tt.png";

export const Footer: FC = function Footer() {
    return (
        <footer className="py-20 bg-[#141414]">
            <div className="container mx-auto px-48 text-white">
                {/* Socials */}
                <ul className="flex gap-6 mb-5 justify-center">
                    <li>
                        <a href="https://vk.com/dumankaltaev" className="group">
                            <img src={VkIcon} alt="VK" className="transition-all opacity-50 group-hover:opacity-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@dumankaltayev" className="group">
                            <img src={YtIcon} alt="YouTube" className="transition-all opacity-50 group-hover:opacity-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/dumankaltaev" className="group">
                            <img src={TgIcon} alt="Telegram" className="transition-all opacity-50 group-hover:opacity-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://vk.com/kinopoisk" className="group">
                            <img src={DzenIcon} alt="Dzen" className="transition-all opacity-50 group-hover:opacity-100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@dumankaltayev" className="group">
                            <img src={TtIcon} alt="TikTok" className="transition-all opacity-50 group-hover:opacity-100" />
                        </a>
                    </li>
                </ul>
                {/* Others */}
                <ul className="flex gap-7 mb-9 justify-center">
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Vacancies
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Adds
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Recommendation rules
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Reference
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">
                            Offers
                        </a>
                    </li>
                </ul>
                <div className="flex justify-between">
                    <div>
                        <span className="opacity-50">© 2025, </span>
                        <a href="#" className="transition-all opacity-50 hover:opacity-100">Kinopoisk</a>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li><a href="#" className="transition-all opacity-50 hover:opacity-100">TV program</a></li>
                            <li><a href="#" className="transition-all opacity-50 hover:opacity-100">Music</a></li>
                            <li><a href="#" className="transition-all opacity-50 hover:opacity-100">Poster</a></li>
                            <li><a href="#" className="transition-all opacity-50 hover:opacity-100">Books</a></li>
                        </ul>
                    </div>
                    <div>
                        <span className="opacity-50">Made by </span>
                        <a href="https://github.com/FywApr" className="transition-all opacity-50 hover:opacity-100">Duman Kaltayev</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
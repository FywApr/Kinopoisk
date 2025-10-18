import type { FC } from "react";
import { Button } from "../../../components/button/Button";
import fightClubBackground from "../../../assets/main/fight-club.jpg";
import favouriteIcon from "../../../assets/main/favourite.svg";
import playSectionIcon from "../../../assets/header/play.svg";

export const Announcement: FC = function Announcement() {
    return (
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
    )
}
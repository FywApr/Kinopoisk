import type { FC } from "react";
import { Button } from "../../../components/button/Button";
import articleImg from "../../../assets/main/info/article.webp";
import cyberSlavImg from "../../../assets/main/info/cyber-slav.webp";
import { Link } from "react-router-dom";

export const Info: FC = function Info() {
    return (
        <section className="m-10 flex gap-8">
            {/* First column */}
            <div className="max-w-[200px]">
                <h4 className="text-lg font-semibold mb-4">Popular</h4>
                <img src={articleImg} alt="Article" className="mb-2 max-w-[200px]" />
                <ul className="flex flex-col gap-4">
                    <li><Link className="font-semibold text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam natus fugiat voluptas sed obcaecati iste veniam facere ea. Quas.
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                    <li><Link className="text-xs transition-all leading-[18px] hover:text-[#f50]" to={'/'}>
                        Woodie Allen's all films from the worst to the best
                    </Link></li>
                </ul>
            </div>
            {/* Second column */}
            <div className="max-w-[460px]">
                <h4 className="text-lg font-semibold mb-4">Main today</h4>
                <article className="mb-5">
                    <img src={cyberSlavImg} alt="Main today" className="max-w-[460px] mb-4" />
                    <h5>
                        <Link to={'/'} className="text-2xl leading-7 font-semibold hover:text-[#f50] transition-all">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, est!
                        </Link>
                    </h5>
                </article>
                <ul className="flex flex-col">
                    <li className="border-b border-gray-200 py-4">
                        <Link to={'/'} className="flex">
                            <img src={articleImg} alt="news" className="max-w-[140px] mr-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold transition-all text-lg leading-[20px] hover:text-[#f50]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?</span>
                                <span className="text-xs text-[rgba(0, 0, 0, 0.7)]">Category</span>
                            </div>
                        </Link>
                    </li>
                    <li className="border-b border-gray-200 py-4">
                        <Link to={'/'} className="flex">
                            <img src={articleImg} alt="news" className="max-w-[140px] mr-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold transition-all text-lg leading-[20px] hover:text-[#f50]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?</span>
                                <span className="text-xs text-[rgba(0, 0, 0, 0.7)]">Category</span>
                            </div>
                        </Link>
                    </li>
                    <li className="border-b border-gray-200 py-4">
                        <Link to={'/'} className="flex">
                            <img src={articleImg} alt="news" className="max-w-[140px] mr-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold transition-all text-lg leading-[20px] hover:text-[#f50]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?</span>
                                <span className="text-xs text-[rgba(0, 0, 0, 0.7)]">Category</span>
                            </div>
                        </Link>
                    </li>
                    <li className="border-gray-200 py-4">
                        <Link to={'/'} className="flex">
                            <img src={articleImg} alt="news" className="max-w-[140px] mr-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold transition-all text-lg leading-[20px] hover:text-[#f50]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?</span>
                                <span className="text-xs text-[rgba(0, 0, 0, 0.7)]">Category</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <Button className="w-full mt-2">More</Button>
            </div>
            {/* Third column */}
            <div className="max-w-[200px]">
                <h4 className="text-lg font-semibold mb-4">New video</h4>
                <ul className="flex flex-col gap-5">
                    <li>
                        <Link to={'/'} className="">
                            <img src={articleImg} alt="Video" className="mb-1.5 max-w-[200px]" />
                            <span className="text-xs w-full relative transition-all hover:text-[#f50] after:content-[''] after:absolute after:right-[-20px] after:bottom-[-3px] after:w-4 after:h-4 after:bg-[url('/src/assets/main/info/video-icon.svg')] after:bg-contain after:bg-no-repeat">
                                Lorem ipsum dolor sit amets.
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="">
                            <img src={articleImg} alt="Video" className="mb-1.5 max-w-[200px]" />
                            <span className="text-xs w-full relative transition-all hover:text-[#f50] after:content-[''] after:absolute after:right-[-20px] after:bottom-[-3px] after:w-4 after:h-4 after:bg-[url('/src/assets/main/info/video-icon.svg')] after:bg-contain after:bg-no-repeat">
                                Lorem ipsum dolor sit amets.
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="">
                            <img src={articleImg} alt="Video" className="mb-1.5 max-w-[200px]" />
                            <span className="text-xs w-full relative transition-all hover:text-[#f50] after:content-[''] after:absolute after:right-[-20px] after:bottom-[-3px] after:w-4 after:h-4 after:bg-[url('/src/assets/main/info/video-icon.svg')] after:bg-contain after:bg-no-repeat">
                                Lorem ipsum dolor sit amets.
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="">
                            <img src={articleImg} alt="Video" className="mb-1.5 max-w-[200px]" />
                            <span className="text-xs w-full relative transition-all hover:text-[#f50] after:content-[''] after:absolute after:right-[-20px] after:bottom-[-3px] after:w-4 after:h-4 after:bg-[url('/src/assets/main/info/video-icon.svg')] after:bg-contain after:bg-no-repeat">
                                Lorem ipsum dolor sit amets.
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className="">
                            <img src={articleImg} alt="Video" className="mb-1.5 max-w-[200px]" />
                            <span className="text-xs w-full relative transition-all hover:text-[#f50] after:content-[''] after:absolute after:right-[-20px] after:bottom-[-3px] after:w-4 after:h-4 after:bg-[url('/src/assets/main/info/video-icon.svg')] after:bg-contain after:bg-no-repeat">
                                Lorem ipsum dolor sit ametasdasd12123123s.
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
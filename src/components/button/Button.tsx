import type { FC } from "react";
import type { TButton } from "./types/button";
import { FaSpinner } from "react-icons/fa";

export const Button: FC<TButton> = function Button({ variant, children, isLoading = false, className = "", onClick }) {
    const styleVariant: string = (() => {
        switch (variant) {
            case "dark":
                return "bg-dark text-white hover:bg-[#292929]";
            case "orange":
                return "bg-orange text-white hover:bg-orange-600";
            case "y-plus":
                return "bg-y-plus text-white hover:bg-red-500";
            default:
                return "bg-gray hover:bg-gray-200";
        }
    })();

    return (
        <button className={`${styleVariant} py-3.5 px-7 rounded-[1000px] h-12 flex items-center justify-center font-semibold cursor-pointer hover:scale-105 transition-transform duration-200 ${className}`} onClick={onClick}>
            {isLoading ? (
                <FaSpinner className="w-5 h-5 animate-spin" />
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    )
}
import type { MouseEventHandler, ReactNode } from "react"

type TVariant = "orange" | "y-plus" | "dark" | "gray";

export type TButton = {
    children: ReactNode;
    variant?: TVariant;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string;
}
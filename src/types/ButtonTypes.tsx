import type { ReactElement } from "react";

export interface ButtonTypes{
    variant: "primary" | "secondary";
    size: "sm"| "md"| "lg" | "xl";
    text?: string;
    Icon?:ReactElement;
    onclick?: () => void;
}
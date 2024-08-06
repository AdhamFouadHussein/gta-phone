import {CSSProperties} from "react";

export interface TabBarItemProps {
    id: string
    iconSrc: string
    label?: string
    onClick: (id: string) => void
    styles:CSSProperties
}
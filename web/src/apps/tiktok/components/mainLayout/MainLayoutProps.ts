import {CSSProperties} from "react";

export interface MainLayoutProps {
    children: React.ReactNode;
    styles: CSSProperties
    statusBarStyles?: CSSProperties
    homeIndicatorBar?: CSSProperties
    footer: boolean
    mode: "dark" | "light"
}
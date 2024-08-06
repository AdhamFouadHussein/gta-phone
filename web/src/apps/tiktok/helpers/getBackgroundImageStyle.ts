import {CSSProperties} from "react";

export function getBackgroundImageStyle(imageSrc: string): CSSProperties {
    return {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover', // Ensures the background image covers the entire element
        backgroundPosition: 'center center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
    };
}

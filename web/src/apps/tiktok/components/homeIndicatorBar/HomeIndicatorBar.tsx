import './style.css'
import HomeIndicatorBarProps from "./HomeIndicatorBarProps";

export default function HomeIndicatorBar({styles,icon}: HomeIndicatorBarProps) {
    return <div style={styles} className={'home-indicator-bar'}>
        <img src={icon} alt={'line-icon'}/>
    </div>
}
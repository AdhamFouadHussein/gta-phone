import {TabBarItemProps} from "./TabBarItemProps";
import './style.css'

export default function TabBarItem({label, iconSrc, id, onClick, styles}: TabBarItemProps) {
    return (
        <div
            style={styles}
            className={'tab-bar-item'}
            onClick={() => onClick(id)}>
            <img width={id == "addVideo" ? 45 : 25} src={iconSrc}
                 alt={label ?? "icon"}/>
            {label &&
                <div className={'tab-bar-item-label'}>{label}</div>
            }
        </div>
    )
}
import batteryIcon from '../../../assets/icons/tiktok/statusBar/Battery.svg'
import wifiIcon from '../../../assets/icons/tiktok/statusBar/Wifi.svg'
import mobileSignalIcon from '../../../assets/icons/tiktok/statusBar/Mobile Signal.svg'
import batteryIconBlack from '../../../assets/icons/tiktok/statusBar/BatteryBlack.svg'
import wifiIconBlack from '../../../assets/icons/tiktok/statusBar/WifiBlack.svg'
import mobileSignalIconBlack from '../../../assets/icons/tiktok/statusBar/Mobile Signal Black.svg'
import './style.css'
import {CSSProperties} from "react";

export default function StatusBar({style, mode}: {
    style?: CSSProperties
    mode: "dark" | "light"
}) {
    return (<div className="status-bar" style={style}>
        <div
            style={{
                color: mode == "dark" ? "white" : "black"
            }}
            className="clock">
            9:41
        </div>
        <div className={'icons'}>
            <img width={18} src={`${mode == "light" ? mobileSignalIconBlack : mobileSignalIcon}`} alt={"battery icon"}/>
            <img width={16} src={`${mode == "light" ? wifiIconBlack : wifiIcon}`} alt={"battery icon"}/>
            <img width={24} src={`${mode == "light" ? batteryIconBlack : batteryIcon}`} alt={"battery icon"}/>
        </div>
    </div>)
}
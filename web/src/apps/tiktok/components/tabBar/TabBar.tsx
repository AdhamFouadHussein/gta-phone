import {TabBarProps} from "./TabBarProps";
import {getTabBarItems} from "./items";
import TabBarItem from "./tabBarItem/TabBarItem";
import {useNavigate} from "react-router-dom";
import './style.css'

export default function TabBar({mode}: TabBarProps) {
    const navigator = useNavigate()
    return (<div

        style={{
            backgroundColor: mode === "dark" ? "#000000" : "white",
            borderTop: mode === "dark" ? undefined : "1px solid #8A8B8F"
        }}
        className={'tab-bar'}>
        {getTabBarItems({
            mode: mode
        }).map((item) => {
            return <TabBarItem
                onClick={(id) => {
                    navigator(`/${id}`)
                }}
                key={item.id}
                {...item}
                styles={{
                    color: mode === "dark" ? "#8A8B8F" : "black"
                }}
            />
        })}
    </div>)
}
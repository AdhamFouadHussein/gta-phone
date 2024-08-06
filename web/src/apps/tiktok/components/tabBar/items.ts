import {TabBarItemProps} from "./tabBarItem/TabBarItemProps";
import homeIcon from '../../../assets/icons/tiktok/tabBar/Home Solid Icon.svg'
import accountIcon from '../../../assets/icons/tiktok/tabBar/Account Stroke Icon.svg'
import searchIcon from '../../../assets/icons/tiktok/tabBar/Search Icon.svg'
import addVideoIcon from '../../../assets/icons/tiktok/tabBar/Button Shape.svg'
import inboxIcon from '../../../assets/icons/tiktok/tabBar/Message Stroke Icon.svg'


import homeBlackIcon from '../../../assets/icons/tiktok/tabBar/Home Stroke Icon Black.svg'
import accountBlackIcon from '../../../assets/icons/tiktok/tabBar/Account Solid Icon Black.svg'
import searchBlackIcon from '../../../assets/icons/tiktok/tabBar/Search Icon Black.svg'
import inboxBlackIcon from '../../../assets/icons/tiktok/tabBar/Message Stroke Icon Black.svg'
import addVideoIconBlack from '../../../assets/icons/tiktok/tabBar/Button Shape Black.svg'

export function getTabBarItems({
                                   mode
                               }: {
    mode: "dark" | "light"
}): Omit<TabBarItemProps, "onClick" | "styles">[] {
    return [{
        label: "Home",
        iconSrc: mode == "light" ? homeBlackIcon : homeIcon,
        id: "tiktok"
    }, {
        label: "Discover",
        iconSrc: mode == "light" ? searchBlackIcon : searchIcon,
        id: "tiktok-discover"
    }, {
        label: "",
        iconSrc: mode == "light" ? addVideoIconBlack : addVideoIcon,
        id: "tiktok-add-video"
    }, {
        label: "Inbox",
        iconSrc: mode == "light" ? inboxBlackIcon : inboxIcon,
        id: "tiktok-inbox"
    }, {
        label: "Me",
        iconSrc: mode == "light" ? accountBlackIcon : accountIcon,
        id: "tiktok-singUp"
    }]
}


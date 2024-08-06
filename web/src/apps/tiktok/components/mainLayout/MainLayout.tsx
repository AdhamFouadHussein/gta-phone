import TabBar from "../tabBar/TabBar";
import HomeIndicatorBar from "../homeIndicatorBar/HomeIndicatorBar";
import StatusBar from "../statusBar/StatusBar";
import {MainLayoutProps} from "./MainLayoutProps";
import './style.css'
import CommentsDrawer from "../commentsDrawer/CommentsDrawer";
import useDrawerStore from "../../store/commentsStore/commentsStore";
import lineIcon from '../../../assets/icons/tiktok/homeIndicatorBar/Line.svg'
import lineBlackIcon from '../../../assets/icons/tiktok/homeIndicatorBar/LineBlack.svg'

export default function MainLayout({
                                       children,
                                       styles,
                                       statusBarStyles,
                                       homeIndicatorBar,
                                       footer,
                                       mode
                                   }: MainLayoutProps) {
    const {isOpen} = useDrawerStore();
    return <div className={'main-layout'} style={styles}>
        <header className={'main-layout-header'}>
            <StatusBar mode={mode} style={statusBarStyles}/>
        </header>
        <main className={'main-layout-content'}>
            {children}
        </main>
        {footer &&
            <footer className={'main-footer'}>
                <TabBar mode={mode}/>
                <HomeIndicatorBar
                    icon={mode == "light" ? lineBlackIcon : lineIcon}
                    styles={{
                        backgroundColor: mode == "light" ? "white" : "#000000",
                        ...homeIndicatorBar
                    }}/>
            </footer>
        }
        {isOpen &&
            <CommentsDrawer/>
        }
    </div>
}
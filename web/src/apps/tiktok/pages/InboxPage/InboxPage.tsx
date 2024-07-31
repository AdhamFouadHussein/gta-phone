import MainLayout from "../../components/mainLayout/MainLayout";
import {getBackgroundImageStyle} from "../../helpers/getBackgroundImageStyle";
import backgroundImage from '../Background.svg'

export default function InboxPage() {
    return (<MainLayout
        mode={"dark"}
        footer
        styles={getBackgroundImageStyle(backgroundImage)}>

        <div>Inbox Page</div>

    </MainLayout>)
}
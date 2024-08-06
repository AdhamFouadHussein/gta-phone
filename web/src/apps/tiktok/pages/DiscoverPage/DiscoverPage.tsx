import MainLayout from "../../components/mainLayout/MainLayout";
import {getBackgroundImageStyle} from "../../helpers/getBackgroundImageStyle";
import backgroundImage from '../Background.svg'

export default function DiscoverPage() {
    return (<MainLayout
        mode={"dark"}
        footer
        styles={getBackgroundImageStyle(backgroundImage)}>

        <div>DisCover Page</div>

    </MainLayout>)
}
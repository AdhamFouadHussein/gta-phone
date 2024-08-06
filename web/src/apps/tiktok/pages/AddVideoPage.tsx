import MainLayout from "../components/mainLayout/MainLayout";
import {getBackgroundImageStyle} from "../helpers/getBackgroundImageStyle";
import backgroundImage from './Background.svg'
import VideoPicker from "../components/VideoPicker/VideoPicker";

export default function AddVideoPage() {
    return (<MainLayout
        mode={"dark"}
        footer
        styles={getBackgroundImageStyle(backgroundImage)}>

        <div>Add Video Page</div>
        <VideoPicker/>

    </MainLayout>)
}
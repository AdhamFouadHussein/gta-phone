import MainLayout from "../../components/mainLayout/MainLayout";
import './style.css'
import CameraRecorder from "../../components/cameraRecorder/CameraRecorder";

export default function AddVideoPage() {


    return (<MainLayout
        mode={"dark"}
        footer
        styles={{}}>

        <div style={{
            marginTop: 30
        }}>
            <CameraRecorder/>
        </div>

    </MainLayout>)
}
import MainLayout from "../../components/mainLayout/MainLayout";
import ScreenRecorder from "../../components/cameraRecorder/CameraRecorder";

export default function AddVideoPage() {
  return (
    <MainLayout mode={"dark"} footer styles={{}}>
      <ScreenRecorder />
    </MainLayout>
  );
}

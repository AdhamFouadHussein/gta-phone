import { Route } from "react-router-dom";
import IphoneCameraHomePage from "./pages/HomePage/IphoneCameraHomePage";
import CapturedImagePage from "./pages/CapturedImage/CapturedImagePage";
import CapturedVideoPage from "./pages/CaptruedVideo/CaptruedVideoPage";

export const IphoneCameraRoutes = [
    <Route path="/iphone-camera" element={<IphoneCameraHomePage/>}/>,
    <Route path="/iphone-camera-captured-image" element={<CapturedImagePage/>}/>,
    <Route path="/iphone-camera-captured-video" element={<CapturedVideoPage/>}/>,
    
] 
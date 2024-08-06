import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import AddVideoPage from "./pages/AddVideoPage";
import InboxPage from "./pages/InboxPage/InboxPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UserPage from "./pages/UserProfile/UserPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignUpFormPage from "./pages/SignUp/SignUpFormPage";
import SetPasswordPage from "./pages/SignUp/SignUpCreatePassword";
import SignUpCreateNickName from "./pages/SignUp/signUpCreateNickName";

export const TikTokRoutes = [
    <Route path={"/tiktok"} element={<HomePage/>}/>,
    <Route path={"/tiktok-discover"} element={<DiscoverPage/>}/>,
    <Route path={"/tiktok-add-video"} element={<AddVideoPage/>}/>,
    <Route path={"/tiktok-inbox"} element={<InboxPage/>}/>,
    <Route path={"/tiktok-profile"} element={<UserPage/>}/>,
    <Route path={"/tiktok-singUp"} element={<SignUpPage/>}/>,
    <Route path={"/tiktok-singUp-form"} element={<SignUpFormPage/>}/>,
    <Route path={"/tiktok-singUp-password"} element={<SetPasswordPage/>}/>,
    <Route path={"/tiktok-singUp-nickname"} element={<SignUpCreateNickName/>}/>,
]
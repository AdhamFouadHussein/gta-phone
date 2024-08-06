import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import HomeBar from "./components/ui/HomeBar/HomeBar";
import NewCalculator from "./pages/calculator/newCalculator";
import AppStore from "./pages/AppStore/AppStore";
import Keyboard from "./pages/CallApp/Keyboard/Keyboard";
import Gallery from "./pages/Gallery/Gallery";
import Battery from "./pages/Home system/Battery/Battery";
import {AnimatePresence} from "framer-motion";
import {debugData} from "../utils/debugData.js";
import Settings from "./pages/Settings/Settings";
import Whatsapp from "./pages/Whatsapp/Whatsapp";
import {fetchNui} from "../utils/fetchNui";
import LoginPage from "./pages/Instagram/LoginPage";
import InstaSignUp from "./pages/Instagram/InstaSignUp";
import InstaHome from "./pages/Instagram/InstaHome";
import Frame from "../components/assets/images/frame.png";
import DynamicIsland from "../components/assets/images/Dynamic Island.png";
import X from "./pages/X/X";
import InstaCamera from "./pages/Instagram/InstaCamera";
import InstaSearch from "./pages/Instagram/InstaSearch";
import InstaDirectedMsg from "./pages/Instagram/InstaDirectedMsg";
import InstaProfileData from "./pages/Instagram/InstaProfileData";
// import InstaEditProfile from "./pages/Instagram/InstaEditProfile";
import BankHome from "./pages/Bank/BankHome";
import BankTransfer from "./pages/Bank/BankTransfer";
import {useAuth} from "../contexts/AuthContext";
import InstaEditProfile from "./pages/Instagram/InstaEditProfile";
import HomePage from "../apps/tiktok/pages/HomePage/HomePage";
import {TikTokRoutes} from "../apps/tiktok/Routes";

debugData([
    {
        action: "setVisible",
        data: true,
    },
]);

const App: React.FC = () => {
    const {user, isLoggedIn} = useAuth();
    const [makeCall, setMakeCall] = useState(false);
    /*
  const visibility = useVisibility();
  visibility.setVisible(false);
  */
    fetchNui("hideFrame");
    return (
        <div
            style={{
                height: "90%", // Set the minimum height to 60% of the viewport height
                maxHeight: "800px", // Set the minimum height to 60% of the viewport height
                maxWidth: "20%", // Set the minimum width to 20% of the viewport width
                //overflow: 'hidden', // Clip the content that overflows
                width: "100%",
                position: "absolute", // Position the div absolutely
                bottom: 0, // Align it to the bottom
                right: 0, // Align it to the right
            }}
            className=" relative rounded-[50px] overflow-hidden p-[10px]">
            <img
                src={DynamicIsland}
                alt="DynamicIsland"
                className="absolute top-5 left-1/2 transform -translate-x-1/2 z-[9999999999999999999999999] w-20 "
            />
            <img
                src={Frame}
                alt="Frame"
                className="absolute top-0 right-0 w-full h-full -z-0"
            />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="*"
                        element={
                            <HomePage/>
                        }
                    />
                    {...TikTokRoutes}
                    <Route
                        path="/calculator"
                        element={
                            <>
                                <Header/>
                                <NewCalculator/>
                                <HomeBar bottom="20px"/>
                            </>
                        }
                    />
                    <Route
                        path="/appstore"
                        element={
                            <>
                                <Header/>
                                <AppStore/>
                                <HomeBar bottom="10px"/>
                            </>
                        }
                    />
                    <Route
                        path="/phonecall"
                        element={
                            <>
                                <Header dark={!makeCall}/>
                                <Keyboard
                                    makeCall={makeCall}
                                    setMakeCall={setMakeCall}
                                />
                                <HomeBar bottom="30px" dark={true}/>
                            </>
                        }
                    />
                    <Route
                        path="/gallery"
                        element={
                            <>
                                <Header/>
                                <Gallery/>
                                <HomeBar bottom="20px"/>
                            </>
                        }
                    />
                    <Route
                        path="/battery"
                        element={
                            <>
                                <Battery/>
                            </>
                        }
                    />
                    <Route
                        path="/setting"
                        element={
                            <>
                                <Header dark/>
                                <Settings/>
                                <HomeBar bottom="20px" dark/>
                            </>
                        }
                    />
                    <Route
                        path="/whatsapp"
                        element={
                            <>
                                <Header/>
                                <Whatsapp/>
                                <HomeBar bottom="30px"/>
                            </>
                        }
                    />
                    <Route
                        path="/ex"
                        element={
                            <>
                                <Header/>
                                <X/>
                                <HomeBar bottom="10px"/>
                            </>
                        }
                    />

                    {isLoggedIn && user ? (
                        <>
                            <Route
                                path="/InstaHome"
                                element={
                                    <>
                                        <Header/>
                                        <InstaHome/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                            <Route
                                path="/InstaCamera"
                                element={
                                    <>
                                        <Header/>
                                        <InstaCamera/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                            <Route
                                path="/InstaSearch"
                                element={
                                    <>
                                        <Header/>
                                        <InstaSearch/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                            <Route
                                path="/instaDirectedMsg"
                                element={
                                    <>
                                        <Header/>
                                        <InstaDirectedMsg/>
                                    </>
                                }
                            />
                            <Route
                                path="/intaProfileData"
                                element={
                                    <>
                                        <Header/>
                                        <InstaProfileData/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                            <Route
                                path="/insta-EditProfile"
                                element={
                                    <>
                                        <Header/>
                                        <InstaEditProfile/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                        </>
                    ) : (
                        <>
                            <Route
                                path="/loginIntsa"
                                element={
                                    <>
                                        <Header/>
                                        <LoginPage/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                            <Route
                                path="/InstaSignUp"
                                element={
                                    <>
                                        <Header/>
                                        <InstaSignUp/>
                                        <HomeBar bottom="1.5vh"/>
                                    </>
                                }
                            />
                        </>
                    )}

                    <Route
                        path="/bankHome"
                        element={
                            <>
                                <Header dark={!makeCall}/>
                                <BankHome/>
                                <HomeBar bottom="20px" dark={true}/>
                            </>
                        }
                    />
                    <Route
                        path="/bankTransfer"
                        element={
                            <>
                                <Header dark={!makeCall}/>
                                <BankTransfer/>
                                <HomeBar bottom="20px" dark={true}/>
                            </>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default App;

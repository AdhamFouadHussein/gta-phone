import MainLayout from "../../components/mainLayout/MainLayout";
import './loginPageStyle.css'
import SignUpOptionsList from "../../components/signUp/SignUpOptionsList/SignUpOptionsList";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const router = useNavigate()
    return <MainLayout
        mode={"light"}
        styles={{
            color: "black",
            backgroundColor: "white"
        }}
        footer={false}
    >
        <div className={'login-page-container'}>
            <div className={'login-page-title'}>
                Log in to TikTok
            </div>
            <div className={'login-page-description'}>
                Manage Your account , check notifications,
                comment on videos, and more.
            </div>
            <div className={'option-list-wrapper'}>
                <SignUpOptionsList usedIn={"login"}/>
            </div>
            <div className={"login-page-footer"}>
                Don`t have an account? <div className={'go-to-register-link'}
                                            onClick={() => router("/tiktok-singUp")}>Sign Up</div>
            </div>
        </div>

    </MainLayout>
}
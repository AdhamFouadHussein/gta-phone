import SignUpOptionsList from "../../components/signUp/SignUpOptionsList/SignUpOptionsList";
import MainLayout from "../../components/mainLayout/MainLayout";
import './style.css'
import {useNavigate} from "react-router-dom";

export default function SignUpPage() {
    const router = useNavigate()
    return <MainLayout
        mode={"light"}
        styles={{
            backgroundColor: "white"
        }}
        footer={false}>
        <div className={'signup-page-container'}>
            <div className={'signup-title'}>Sign up for TikTok</div>
            <div className={'sign-uo-description'}>
                Create a Profile , follow other accounts , make your own videos , and more
            </div>
            <div className={'option-list-wrapper'}>
                <SignUpOptionsList usedIn={"register"}/>
            </div>
            <div className={'sign-up-footer'}>
                <div className={'footer-text'}>Don`t have an account? <span className={'sign-up-link'}
                                                                            onClick={() => router("/tiktok-login")}>Sign up</span>
                </div>
            </div>
        </div>
    </MainLayout>
}
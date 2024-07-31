import SignUpOptionsListProps from "./SignUpOptionsListProps";
import userIcon from '../../../../assets/icons/tiktok/signUp/user.png'
import facebookIcon from '../../../../assets/icons/tiktok/signUp/facebook.png'
import appleIcon from '../../../../assets/icons/tiktok/signUp/apple-logo.png'
import googleIcon from '../../../../assets/icons/tiktok/signUp/search.png'
import twitterIcon from '../../../../assets/icons/tiktok/signUp/twitter.png'
import './style.css'
import {useNavigate} from "react-router-dom";

const iconList = [{
    icon: userIcon,
    text: "User Phone or Email",
    ref: "/tiktok-singUp-form"
}, {
    icon: facebookIcon,
    text: "Continue with Facebook",
    ref: "/tiktok-singUp-form"
}, {
    icon: appleIcon,
    text: "Continue with Apple",
    ref: "/tiktok-singUp-form"
}, {
    icon: googleIcon,
    text: "Continue with Google",
    ref: "/tiktok-singUp-form"
}, {
    icon: twitterIcon,
    text: "Continue with Twitter",
    ref: "/tiktok-singUp-form"
}]
export default function SignUpOptionsList({}: SignUpOptionsListProps) {
    const navigator = useNavigate()
    return (<div className={'singUp-options-list-container'}>
        {iconList.map((item, index) => {
            return <div
                onClick={() => {
                    navigator(item.ref)
                }} className={'singUp-options-item'} key={index}>
                <div className={'icon'}>
                    <img width={25} height={25} alt={'icon'} src={item.icon}/>
                </div>
                <div className={'option-label'}>
                    {item.text}
                </div>
            </div>
        })}
    </div>)
}
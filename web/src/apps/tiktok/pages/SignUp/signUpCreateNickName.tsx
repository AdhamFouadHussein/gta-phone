import {useEffect, useState} from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import './signUpCreateNickNameStyle.css';
import {useNavigate} from "react-router-dom";
import useSignupStore from "../../store/signupStore/signupStore";
import {fetchNui} from "../../../../utils/fetchNui";

export default function SignUpCreateNickName() {
    const [nickname, setNickname] = useState("");
    const navigator = useNavigate()
    const {setNickname: setNicknameInStore, email, password, nickname: userName} = useSignupStore(); // Zustand action to set nickname

    const handleNicknameChange = (e: any) => {
        setNickname(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNicknameInStore(nickname); // Set the nickname in the Zustand store
        fetchNui('TregisterUser', {email: email, password: password, nickname: userName});
    };


    useEffect(() => {
        window.addEventListener('message', handleNuiMessage);

        return () => {
            window.removeEventListener('message', handleNuiMessage);
        };
    }, []);
    const handleNuiMessage = (event: MessageEvent) => {
        const {data} = event;
        if (data.type === 'T_USER') {
            console.log(data)
            navigator("/tiktok"); // Navigate to the profile page
        }
    };


    return (
        <MainLayout
            mode={"light"}
            styles={{
                backgroundColor: "white"
            }}
            footer={false}
        >
            <div className="nickname-page-container">
                <div className="title">Create nickname</div>
                <div className="description">
                    This can be anything you like and can be changed later. If you skip this step, you will be
                    automatically assigned a default nickname.
                </div>

                <form onSubmit={handleSubmit} className="nickname-form">
                    <input
                        name="userName"
                        placeholder="Add your nickname"
                        value={nickname}
                        onChange={handleNicknameChange}
                        maxLength={30}
                        className="nickname-input"
                    />
                    <div className="char-counter">{nickname.length}/30</div>
                    <button type="submit" className="confirm-button">Confirm
                    </button>
                </form>

            </div>
        </MainLayout>
    );
}

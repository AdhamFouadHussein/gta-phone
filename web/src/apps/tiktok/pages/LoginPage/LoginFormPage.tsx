import MainLayout from "../../components/mainLayout/MainLayout";
import {useEffect, useState} from "react";
import './loginFormPageStyle.css';
import {useNavigate} from "react-router-dom";
import backButton from '../../../assets/icons/tiktok/Left Arrow Icon.svg';
import {fetchNui} from "../../../../utils/fetchNui";

export default function LoginFormPage() {
    const [formType, setFormType] = useState<"phone" | "email">("email");
    const navigator = useNavigate();

    // State to hold the email and password
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        window.addEventListener('message', handleNuiMessage);

        return () => {
            window.removeEventListener('message', handleNuiMessage);
        };
    }, []);

    const handleNuiMessage = (event: MessageEvent) => {
        const {data} = event;
        if (data.type === 'T_USER') {
            navigator("/tiktok-profile"); // Navigate to the profile page
        }
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send email and password using fetchNui
        fetchNui('TloginUser', {email: email, password: password});
    };

    return (
        <MainLayout
            mode={"light"}
            styles={{
                color: "black",
                backgroundColor: "white"
            }}
            footer={false}
        >
            <div className={'login-form-header'}>
                <div className={'back-button-icon'} onClick={() => navigator(-1)}>
                    <img src={backButton} alt="Back Button"/>
                </div>
                <div className="login-form-title">
                    Login
                </div>
            </div>
            <div className="form-tab-selector">
                <div
                    onClick={() => setFormType("phone")}
                    className={`tab-item ${formType === 'phone' ? 'active' : ''}`}
                >
                    Phone
                </div>
                <div
                    onClick={() => setFormType("email")}
                    className={`tab-item ${formType === 'email' ? 'active' : ''}`}
                >
                    Email
                </div>
            </div>
            <div>
                <form className={'login-up-form'} onSubmit={handleSubmit}>
                    {formType === 'email' ? (
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  // Update email state
                            required
                        />
                    ) : (
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  // Use email state for phone number for simplicity
                            required
                        />
                    )}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Update password state
                        required
                    />

                    <div className={"login-up-terms"}>
                        By continuing, you agree to TikTok's <strong>Terms of Service</strong> and confirm that you have
                        read TikTok's <strong>Privacy Policy</strong>
                    </div>
                    <button type="submit">{formType === "phone" ? "Send Code" : "Next"}</button>
                </form>
            </div>
        </MainLayout>
    );
}

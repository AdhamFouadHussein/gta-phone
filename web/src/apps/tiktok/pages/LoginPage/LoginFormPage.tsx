import MainLayout from "../../components/mainLayout/MainLayout";
import {useState} from "react";
import './loginFormPageStyle.css'
import {useNavigate} from "react-router-dom";

export default function LoginFormPage() {
    const [formType, setFormType] = useState<"phone" | "email">("email")
    const navigator = useNavigate()
    const [inputValue, setInputValue] = useState<string>('');  // State to hold input value

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

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

            <div className="login-form-title">
                Login
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
                    <input
                        name={formType}
                        placeholder={formType === "phone" ? "Phone Number" : "Email Address"}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}  // Update input value
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
import {useState} from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import {useNavigate} from "react-router-dom";
import useSignupStore from "../../store/signupStore/signupStore";
import './signUpPasswordStyle.css';

export default function SetPasswordPage() {
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigator = useNavigate()
    const setPasswordInStore = useSignupStore(state => state.setPassword); // Zustand action to set password

    const checkPasswordStrength = (password: any) => {
        let strength = "";
        const rules = [
            {regex: /.{8,}/, message: "At least 8 characters"},
            {regex: /[a-z]/, message: "At least one lowercase letter"},
            {regex: /[0-9]/, message: "At least one digit"},

        ];

        const passedRules = rules.filter(rule => rule.regex.test(password)).length;

        switch (passedRules) {
            case 0:
            case 1:
                strength = "weak";
                break;
            case 2:
            case 3:
                strength = "medium";
                break;
            case 4:
            case 5:
                strength = "strong";
                break;
            default:
                strength = "";
                break;
        }
        setPasswordStrength(strength);
    };

    const handlePasswordChange = (e: any) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPasswordInStore(password); // Set the password in the Zustand store
        navigator("/tiktok-singUp-nickname"); // Navigate to the next page
    };

    return (
        <MainLayout
            mode={"light"}
            styles={{
                backgroundColor: "white"
            }}
            footer={false}
        >
            <div className="set-password-page-container">
                <div className="set-password-title">Create Password</div>
                <form className={'set-password-form'} onSubmit={handleSubmit}>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`password-input ${passwordStrength}`}
                        />
                        <i
                            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`}
                            onClick={toggleShowPassword}
                        ></i>
                    </div>
                    <div className="password-rules">
                        <div className={`password-rule ${/.{8,}/.test(password) ? "valid" : "invalid"}`}>8 characters
                            (20 max)
                        </div>
                        <div className={`password-rule ${/[a-z]/.test(password) ? "valid" : "invalid"}`}>1 letter and 1
                            number
                        </div>

                    </div>
                    <div className={`password-strength ${passwordStrength}`}>
                        {passwordStrength && `Password strength: ${passwordStrength}`}
                    </div>
                    <button  type="submit"
                            className="submit-button">Next
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}

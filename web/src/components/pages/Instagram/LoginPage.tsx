import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/InstagramLogo.png";
import { backArrow } from "./instaSvg";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/instaHome");
        }
    }, [isLoggedIn, navigate]);
    const [credentials, setCredentials] = useState({
        Username: "",
        Password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
        });
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await login(credentials);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="absolute left-2 top-[10px] w-[95%] rounded-[30px] h-[97%] bg-black flex flex-col justify-center items-center">
            <button className="text-white absolute top-12 left-1">
                {backArrow}
            </button>
            <div className="bg-black absolute top-20 border-gray-300 w-72 py-8 px-1 flex items-center flex-col mb-3">
                <img src={logo} alt="" width={130} />
                <form className="mt-8 w-full flex flex-col" onSubmit={handleLogin}>
                <input
                    autoFocus
                    className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="Username" // changed from "username"
                    placeholder="Phone number, username, or email"
                    type="text"
                    value={credentials.Username}
                    onChange={handleChange} 
                />
                <input
                    autoFocus
                    className="text-xs w-full mb-4 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="Password" // changed from "password"
                    placeholder="Password"
                    type="password"
                    value={credentials.Password}
                    onChange={handleChange} 
                />
                    <a className="text-xs text-sky-600 text-right cursor-pointer mb-4">
                        Forgot password?
                    </a>
                    <button
                        type="submit"
                        className="text-xs text-center bg-blue-900 text-stone-400 px-2 py-2 rounded font-medium"
                    >
                        Log In
                    </button>
                </form>
                <div className="flex justify-evenly space-x-2 w-64 mt-6">
                    <span className="flex-none uppercase text-[10px] text-gray-400 font-semibold">
                        or
                    </span>
                </div>
            </div>
            <div className="absolute bottom-[140px] h-20  text-center w-80 ">
                <span className="text-xs text-stone-600 font-semibold">
                    Don't have an account?
                </span>
                <a  href="/InstaSignUp" className="text-sky-600 text-xs font-semibold">Sign up</a>
            </div>
            <div className="absolute -bottom-[24px] h-20 text-white text-center w-80 ">
                <span className="text-xs text-stone-600 font-semibold">
                    FiveM Phone
                </span>
                <a className="text-stone-400 text-xs font-semibold"> Clone</a>
            </div>
            <div className="mt-3 text-center"></div>
        </div>
    );
};

export default LoginPage;
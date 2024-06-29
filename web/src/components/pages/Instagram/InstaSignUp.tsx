import logo from "../../assets/images/InstagramLogo.png";
import { uploadImageToImgBB } from "../../../utils/axiosApi";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const InstaSignUp = () => {
    const { register, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/instaHome");
        }
    }, [isLoggedIn, navigate]);

    const [imageUrl, setImageUrl] = useState<string>("");

    const [credentials, setCredentials] = useState({
        Username: "",
        Password: "",
        Email: "",
        FullName: "",
        Bio: {
            body: "",
            website: "",
        },
        ProfilePicURL: imageUrl,
    });

    const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "body" || id === "website") {
            setCredentials((prevCredentials) => ({
                ...prevCredentials,
                Bio: {
                    ...prevCredentials.Bio,
                    [id]: value,
                },
            }));
        } else {
            setCredentials((prevCredentials) => ({
                ...prevCredentials,
                [id]: value,
            }));
        }
    };

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await register(credentials);
            localStorage.setItem("user", JSON.stringify(credentials));
        } catch (error) {
            alert(error);
        }
    };

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            console.log(URL.createObjectURL(selectedFile), "images");

            try {
                const imageUrl = await uploadImageToImgBB(selectedFile);
                console.log("Uploaded image URL:", imageUrl);
                setImageUrl(imageUrl); // Save the URL of the uploaded image
            } catch (error) {
                console.error("Failed to upload image:", error);
            }
        }
    };

    return (
        <div className="absolute left-2 top-[10px] w-[95%] rounded-[30px] h-[97%] bg-black flex flex-col justify-center items-center">
            <div className="bg-black absolute top-16 border-gray-300 w-72 py-8 px-1 flex items-center flex-col mb-3">
                <img src={logo} alt="" width={130} />
                <form
                    className="mt-3 w-full flex flex-col"
                    onSubmit={handleSignup}>
                    <input
                        autoFocus
                        className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="FullName"
                        placeholder="Full Name"
                        value={credentials.FullName}
                        onChange={handleInputsChange}
                        type="text"
                    />
                    <input
                        autoFocus
                        className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="Username"
                        placeholder="Username"
                        value={credentials.Username}
                        onChange={handleInputsChange}
                        type="text"
                    />
                    <input
                        autoFocus
                        className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="Email"
                        placeholder="Email"
                        value={credentials.Email}
                        onChange={handleInputsChange}
                        type="email"
                    />
                    <input
                        autoFocus
                        className="text-xs w-full mb-4 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="Password"
                        placeholder="Password"
                        value={credentials.Password}
                        onChange={handleInputsChange}
                        type="password"
                    />
                    <input
                        autoFocus
                        className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="body"
                        placeholder="Bio"
                        value={credentials.Bio.body}
                        onChange={handleInputsChange}
                        type="text"
                    />
                    <input
                        autoFocus
                        className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-900 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                        id="website"
                        placeholder="Website"
                        value={credentials.Bio.website}
                        onChange={handleInputsChange}
                        type="text"
                    />
                    <input
                        type="file"
                        id="ProfilePicURL"
                        name="img"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button
                        type="submit"
                        className="text-xs text-center bg-blue-900 text-stone-400 px-2 py-2 rounded font-medium">
                        Sign Up
                    </button>
                </form>
                <div className="flex justify-evenly space-x-2 w-64 mt-3">
                    <span className="flex-none uppercase text-[10px] text-gray-400 font-semibold">
                        or
                    </span>
                </div>
            </div>
            <div className="absolute bottom-[20px] h-20  text-center w-80 ">
                <span className="text-xs text-stone-600 font-semibold">
                    Already have an account?
                </span>
                <a
                    href="/loginIntsa"
                    className="text-sky-600 text-xs font-semibold">
                    Sign in
                </a>
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

export default InstaSignUp;

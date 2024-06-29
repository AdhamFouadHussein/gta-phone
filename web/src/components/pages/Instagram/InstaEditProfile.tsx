import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import InstaProfilImg from "./instComponents/InstaProfilImg";
import { motion } from "framer-motion";
import { useAuth } from "../../../contexts/AuthContext";
import { InstaUserData } from "../../../config/inventory";
import { fetchNui } from "../../../utils/fetchNui";

const InstaEditProfile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
    };

    const handleTextEreaKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        e.stopPropagation();
    };

    const [formData, setFormData] = useState<InstaUserData>({
        UserID: user?.UserID ?? 0,
        Username: user?.Username || "",
        FullName: user?.FullName || "",
        Email: user?.Email || "",
        Password: user?.Password || "",
        ProfilePicURL: user?.ProfilePicURL || "",
        Bio: {
            body: user?.Bio?.body || "",
            website: user?.Bio?.website || "",
        },
    });

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value } = e.target;
        if (id === "body" || id === "website") {
            setFormData((prevData) => ({
                ...prevData,
                Bio: {
                    ...prevData.Bio,
                    [id]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    const saveHandler = async () => {
        try {
            if (
                formData.Bio.body === "" ||
                formData.FullName === "" ||
                formData.Username === "" ||
                formData.ProfilePicURL === ""
            ) {
                setFormData({
                    UserID: user?.UserID ?? 0,
                    Username: user?.Username || "",
                    FullName: user?.FullName || "",
                    Email: user?.Email || "",
                    Password: user?.Password || "",
                    ProfilePicURL: user?.ProfilePicURL || "",
                    Bio: {
                        body: user?.Bio?.body || "",
                        website: user?.Bio?.website || "",
                    },
                });
            }
            await fetchNui("updateUser", formData);
        } catch (error) {
            alert(error);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files;
        if (files && files.length > 0) {
            const fileUrl = URL.createObjectURL(files[0]); // Assuming you want to handle only the first selected file
            setFormData({ ...formData, ProfilePicURL: fileUrl });
        }
    };

    return (
        <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[30px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12">
                {/* start header */}
                <div className="flex flex-col px-2 justify-between items-center gap-y-3">
                    <div className="w-full text-xs flex justify-between items-center">
                        <button
                            onClick={() => navigate("/intaProfileData")}
                            className="text-white ">
                            Cancel
                        </button>
                        <span className="text-sm flex justify-center items-center gap-1 cursor-pointer">
                            Edit Profile
                        </span>
                        <button
                            onClick={() => {
                                saveHandler();
                                navigate("/intaProfileData");
                            }}
                            className="text-sky-500 ">
                            Done
                        </button>
                    </div>
                </div>
                {/* end header */}

                {/* start body section */}

                <div className="mt-3">
                    <div className="flex flex-col justify-center items-center gap-1 mb-2">
                        <div className="w-[23%]">
                            <InstaProfilImg img={user?.ProfilePicURL} />
                        </div>
                        <button className="text-xs text-sky-500 ">
                            <input
                                type="file"
                                id="ProfilePicURL"
                                name="img"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="upload" className="cursor-pointer">
                                Change Profile Photo
                            </label>
                        </button>
                    </div>

                    {/* start user data */}

                    {/* start public data */}
                    <form className="py-2">
                        <div className="flex justify-end items-center px-3 my-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Name
                            </label>
                            <input
                                id="FullName"
                                type="text"
                                placeholder={formData.FullName}
                                className="text-[15px] bg-transparent placeholder-zinc-200 border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                                onChange={handleChange}
                                value={formData.FullName}
                            />
                        </div>
                        <div className="flex justify-end items-center px-3 py-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Username
                            </label>
                            <input
                                id="Username"
                                type="text"
                                placeholder={formData.Username}
                                className="text-[15px] bg-transparent placeholder-zinc-200 border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                                onChange={handleChange}
                                value={formData.Username}
                            />
                        </div>
                        <div className="flex justify-end items-center px-3 py-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Website
                            </label>
                            <input
                                id="website"
                                type="text"
                                placeholder={formData.Bio?.website}
                                className="text-[15px] bg-transparent placeholder-zinc-200 border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                                onChange={handleChange}
                                value={formData.Bio?.website}
                            />
                        </div>
                        <div className="flex justify-end items-center px-3 py-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Bio
                            </label>
                            <textarea
                                id="body"
                                className="text-[12px] noScroll text-wrap w-[66%] bg-transparent border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleTextEreaKeyDown(e)}
                                onChange={handleChange}
                                cols={2}
                                rows={3}
                                style={{ resize: "none" }}>
                                {formData.Bio?.body}
                            </textarea>
                        </div>
                    </form>
                    {/* end public data */}

                    {/* private form */}
                    <form className="text-stone-500">
                        <p className="text-sm px-3">Private Information</p>
                        <div className="flex justify-end items-center px-3 my-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder={user?.Email}
                                disabled
                                className="bg-transparent placeholder-stone-500 text-[15px] border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                            />
                        </div>
                        {/* <div className="flex justify-end items-center px-3 py-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Phone
                            </label>
                            <input
                                type="number"
                                placeholder="+1 202 555 0147"
                                disabled
                                className="text-[15px] bg-transparent placeholder-stone-500 border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                            />
                        </div>
                        <div className="flex justify-end items-center px-3 py-2">
                            <label htmlFor="" className="flex-1 text-sm">
                                Gender
                            </label>
                            <input
                                type="text"
                                placeholder="Male"
                                disabled
                                className="text-[15px] bg-transparent placeholder-stone-500 border-b-2 border-stone-900 focus-within:outline-none focus-within:border-none"
                                onKeyDown={(e) => handleInputKeyDown(e)}
                            />
                        </div> */}
                    </form>
                </div>

                {/* End user data */}
                {/* end body section */}
            </motion.div>
        </div>
    );
};

export default InstaEditProfile;

import React, { useState } from "react";
import { motion } from "framer-motion";
import XUser from "../../assets/images/XUser.png";
import { Close, Gif, ImageCard } from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import { faker } from "@faker-js/faker";
import { XTweets } from "../../../config/inventory";

type Props = {
    setCreteTweetOpened: (value: boolean) => void;
    setXdb: (value: XTweets[]) => void;
    xdb: XTweets[];
};
function NewTweet({ setCreteTweetOpened, setXdb, xdb }: Props) {
    const [text, setText] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleInputKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        e.stopPropagation();
    };

    const handleTweet = async () => {
        if (text.trim() === "" && !image) return; // Don't post empty tweets

        setLoading(true);

        const newTweet: XTweets = {
            id: faker.string.uuid(),
            name: "Belal Yosry",
            userName: "belo_yosry",
            avatar: XUser,
            tweet: {
                id: faker.string.uuid(),
                text: text ? text : "",
                img: image ? URL.createObjectURL(image) : undefined,
                likes: 0,
                retweets: 0,
                comments: 0,
            },
            liked: false,
            retweeted: false,
        };

        // Simulate a delay to demonstrate loading state
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Update xdb state with the new tweet
        setXdb([newTweet, ...xdb]);

        // Clear the text input field
        setText("");
        setImage(null);
        setLoading(false);
        setCreteTweetOpened(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <motion.div
            initial={{ left: 1000 }}
            animate={{ left: 0 }}
            exit={{ left: "999px" }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white absolute inset-0 w-full h-full rounded-[35px] z-30 pt-10 px-3">
            <header className="flex justify-between items-center mb-5">
                <button
                    className="text-sm text-[#4e9ee8]"
                    onClick={() => setCreteTweetOpened(false)}>
                    Cancel
                </button>
                <button
                    className="text-sm text-white py-1 px-3 rounded-3xl bg-[#4e9ee8] disabled:bg-[#2b4b6a] disabled:text-[#717173]"
                    disabled={loading || (image === null && text.length === 0)}
                    onClick={handleTweet}>
                    {loading ? "Posting..." : "Tweet"}
                </button>
            </header>
            <body className={`relative ${image ? "mb-10" : ""}`}>
                <textarea
                    className="h-full w-full bg-transparent text-white pl-10 border-none outline-none noScroll"
                    style={{ resize: "none" }}
                    rows={image ? 10 : 19}
                    placeholder="What’s happening?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => handleInputKeyDown(e)}
                />
                <img
                    src={XUser}
                    alt="XUser"
                    className="w-[30px] h-[30px] absolute top-0 left-0"
                />
                {image && (
                    <div className="relative">
                        <img
                            src={URL.createObjectURL(image)}
                            alt="image"
                            className="w-full h-[200px] object-cover "
                        />
                        <Icon
                            svg={Close}
                            width={20}
                            height={20}
                            parentClassName="absolute top-0 left-0 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 "
                            onClick={() => setImage(null)}
                        />
                    </div>
                )}
            </body>
            <footer className="flex justify-evenly items-center px-[80px]">
                <label htmlFor="image-upload">
                    <Icon
                        svg={ImageCard}
                        fill="#4e9ee8"
                        width={24}
                        height={24}
                        parentClassName="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 "
                    />
                </label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={(input) =>
                        input && input.setAttribute("multiple", "false")
                    }
                />
                <Icon
                    svg={Gif}
                    fill="#4e9ee8"
                    width={24}
                    height={24}
                    parentClassName="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 "
                />
            </footer>
        </motion.div>
    );
}

export default NewTweet;

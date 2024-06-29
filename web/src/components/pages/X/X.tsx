import React, { useState } from "react";
import { motion } from "framer-motion";
import XHeader from "./XHeader";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import Actions from "./Actions";
import { Xdb } from "./Xdb";
import { XTweets } from "../../../config/inventory";
import Icon from "../../../config/Icon";
import { Close, Dots, Retweet, Save } from "../../../config/svgIcons";
import NewTweet from "./NewTweet";

function X() {
    const [xdb, setXdb] = useState(Xdb);
    const [selectedTweet, setSelectedTweet] = useState<XTweets>();
    const [imageOpened, setImageOpened] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const [creteTweetOpened, setCreteTweetOpened] = useState(false);

    const handleImageOpened = (tweet: XTweets) => {
        setSelectedTweet(tweet);
        setImageOpened(true);
        setMenuOpened(false);
    };

    return (
        // Main Container
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className={`bg-black text-white relative w-full h-full rounded-[35px] ${
                imageOpened ? "z-50" : ""
            }`}>
            {/* New Tweet */}
            {creteTweetOpened && (
                <NewTweet
                    setCreteTweetOpened={setCreteTweetOpened}
                    setXdb={setXdb}
                    xdb={xdb}
                />
            )}
            {/* Opened Image */}
            {imageOpened ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-[35px]">
                    <Icon
                        svg={Close}
                        fill="white"
                        width={18}
                        height={18}
                        parentHeight={false}
                        parentWidth={false}
                        parentClassName="absolute top-14 left-1 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={() => setImageOpened(false)}
                    />

                    <Icon
                        svg={Dots}
                        fill="white"
                        width={18}
                        height={18}
                        parentHeight={false}
                        parentWidth={false}
                        parentClassName="absolute top-14 right-1 cursor-pointer transform rotate-90 transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={() => setMenuOpened(!menuOpened)}
                    />

                    <img
                        src={selectedTweet?.tweet.img}
                        alt="selected"
                        className="w-full h-full object-contain"
                        onClick={() => setMenuOpened(false)}
                    />

                    {/* Actions */}
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                        {selectedTweet && (
                            <Actions
                                tweet={selectedTweet}
                                setXdb={setXdb}
                                xdb={xdb}
                            />
                        )}
                    </div>

                    {/* Menu */}
                    {menuOpened && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-[130px] absolute left-0 bottom-0 right-0 z-10 px-5 pt-2 bg-slate-900/40 backdrop-blur-3xl rounded-b-[35px] backdrop-opacity-80">
                            <div className="flex flex-col justify-start items-start gap-5">
                                <div className="flex justify-start items-center gap-3 cursor-pointer font-bold">
                                    <Icon
                                        svg={Retweet}
                                        width={18}
                                        height={18}
                                        parentWidth={false}
                                        parentHeight={false}
                                    />
                                    <p className="text-xs">Repost</p>
                                </div>
                                <div className="flex justify-start items-center gap-3 cursor-pointer font-bold">
                                    <Icon
                                        svg={Save}
                                        width={18}
                                        height={18}
                                        parentWidth={false}
                                        parentHeight={false}
                                    />
                                    <p className="text-xs">Save</p>
                                </div>
                            </div>
                            <button
                                className="w-full py-2 mt-5 border border-[#2f2f2f] text-xs font-bold"
                                onClick={() => setMenuOpened(false)}>
                                Cancel
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                <>
                    {/* Main Page */}
                    <XHeader />

                    {/*Start Feeds */}
                    <div
                        className={`container w-full  absolute left-0 right-0 top-0 h-[100%] bg-black rounded-[35px] overflow-hidden overflow-y-auto noScroll`}>
                        <div className="relative px-3 py-4 mt-20 mb-10 overflow-hidden">
                            {xdb.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex justify-start items-start gap-2 mb-5 border-b border-[#2f2f2f] pb-5">
                                    {/* Profile Img */}
                                    <img
                                        src={user.avatar}
                                        alt="XUser1"
                                        className="w-[45px] h-[45px] rounded-full"
                                    />

                                    {/* Tweet Body */}
                                    <div className="relative w-full flex flex-col justify-start items-start gap-3">
                                        {/* User Info */}
                                        <div className="info flex justify-center items-center gap-1">
                                            <h3 className="truncate overflow-ellipsis w-[80px] text-sm font-[500]">
                                                {user.name}
                                            </h3>
                                            <p className="text-xs text-[#828282]">
                                                @{user.userName}
                                            </p>
                                        </div>

                                        {/* Tweet Content */}
                                        {user.tweet.text && (
                                            <p className="w-full h-full max-w-full max-h-60 text-sm font-[300]  noScroll bg-transparent focus-within:outline-none focus-within:border-none">
                                                {user.tweet.text}
                                            </p>
                                        )}
                                        {user.tweet.img && (
                                            <img
                                                src={user.tweet.img}
                                                alt="imag"
                                                className="rounded-2xl cursor-pointer"
                                                onClick={() =>
                                                    handleImageOpened(user)
                                                }
                                            />
                                        )}
                                        {/* Actions */}
                                        <Actions
                                            tweet={user}
                                            setXdb={setXdb}
                                            xdb={xdb}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End Feeds */}

                    <FloatingButton onClick={() => setCreteTweetOpened(true)} />
                    <Footer />
                </>
            )}
        </motion.div>
    );
}

export default X;

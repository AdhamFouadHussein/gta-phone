import { motion } from "framer-motion";
import "./index.css";
import { useState } from "react";
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";
import Header from "./Header";
import Chat from "./Chat";
import { ChatsType } from "../../../config/inventory";
import NewMsg from "./NewMsg";
import AnswerFullCall from "../Home system/Calls/AnswerFullCall";
function Whatsapp() {
    const [active, setActive] = useState("chats");
    const [selectedChat, setSelectedChat] = useState<ChatsType | null>(null);
    const [calling, setCalling] = useState(false);

    const renderedComponents = (active: string) => {
        switch (active) {
            case "chats":
                return (
                    <Chats
                        active={active}
                        setActive={setActive}
                        setSelectedChat={setSelectedChat}
                    />
                );
            case "status":
                return <Status active={active} />;
            case "calls":
                return (
                    <Calls
                        active={active}
                        calling={calling}
                        setCalling={setCalling}
                        setSelectedChat={setSelectedChat}
                        setActive={setActive}
                    />
                );
            case "chat":
                return selectedChat && <Chat chat={selectedChat} />;
            case "new":
                return (
                    <NewMsg
                        active={active}
                        setActive={setActive}
                        setSelectedChat={setSelectedChat}
                    />
                );
            default:
                return (
                    <Chats
                        active={active}
                        setActive={setActive}
                        setSelectedChat={setSelectedChat}
                    />
                );
        }
    };
    const handleBack = () => {
        setSelectedChat(null);
        setActive("chats");
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white relative w-full h-full rounded-[35px]">
            {calling ? (
                <AnswerFullCall
                    setCalling={setCalling}
                    selectedChat={selectedChat}
                />
            ) : (
                <>
                    {/* Header */}
                    <Header
                        headerType={active}
                        setHeaderType={setActive}
                        selectedChat={selectedChat}
                        calling={calling}
                        setCalling={setCalling}
                        onCLick={() => {
                            if (active === "chat" || active === "new")
                                handleBack();
                        }}
                    />

                    {/* Body */}
                    <div
                        className={`container w-full  absolute left-0 right-0 ${
                            active === "chat"
                                ? "top-0 h-full rounded-t-[35px]"
                                : " top-20 h-[87.1%] "
                        }  bg-[#0f1c24] rounded-b-[35px] overflow-hidden overflow-y-auto noScroll`}>
                        {renderedComponents(active)}
                    </div>
                </>
            )}
        </motion.div>
    );
}

export default Whatsapp;

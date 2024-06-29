import React from "react";
import { ChatsType } from "../../../config/inventory";
import Icon from "../../../config/Icon";
import { PeopleAdd, PeopleGroup, QrCode } from "../../../config/svgIcons";
import Contact from "./Contact";
import { chats } from "./db";
interface Props {
    active: string;
    setActive: (value: string) => void;
    setSelectedChat: (value: ChatsType | null) => void;
}
function NewMsg({ active, setActive, setSelectedChat }: Props) {
    const handleSelectChat = (chat: ChatsType) => {
        setSelectedChat(chat);
        setActive("chat");
    };

    // Function to sort chats by name
    const sortedChats = chats.slice().sort((a, b) => {
        return a.userName.localeCompare(b.userName);
    });
    return (
        <div className="px-3 py-4">
            {/* New group */}
            <div className="flex justify-start items-center gap-2 mb-5 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0aaa83] ">
                    <Icon
                        svg={PeopleGroup}
                        bg="transparent"
                        fill="white"
                        width={20}
                        height={20}
                        parentWidth={false}
                        parentHeight={false}
                    />
                </div>
                <p>New group</p>
            </div>
            {/* New contact */}
            <div className="w-full flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90">
                <div className="flex justify-start items-center gap-2">
                    <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0aaa83] ">
                        <Icon
                            svg={PeopleAdd}
                            bg="transparent"
                            fill="white"
                            width={20}
                            height={20}
                            parentWidth={false}
                            parentHeight={false}
                        />
                    </div>
                    <p>New contact</p>
                </div>
                <Icon
                    svg={QrCode}
                    bg="transparent"
                    fill="#999999"
                    width={20}
                    height={20}
                    parentWidth={false}
                    parentHeight={false}
                />
            </div>

            {/* Contacts */}

            <div className="pt-5 flex flex-col justify-start items-start gap-8 ">
                {sortedChats.map((chat) => (
                    <div
                        key={chat.id}
                        className="w-full flex justify-between items-center cursor-pointer active:bg-[#44515b93] transition-all duration-75 ease-in-out ">
                        <Contact
                            img={chat.img}
                            name={chat.userName}
                            desc={chat.about}
                            contactType={active}
                            onClick={() => handleSelectChat(chat)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewMsg;

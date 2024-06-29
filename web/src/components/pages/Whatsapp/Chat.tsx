import { ChatsType } from "../../../config/inventory";
import Seen from "./Seen";
import { Mic, Attachment, Camera, Smile } from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import React from "react";

type Props = {
    chat: ChatsType;
};

function Chat({ chat }: Props) {
    return (
        <div className="chat px-3 pt-20 overflow-hidden overflow-y-auto noScroll ">
            {/* Body */}

            {/* Date */}
            <div className="w-fit mx-auto text-center bg-[#1a2930] p-1  rounded-md my-1">
                <p className="text-xs text-[#758a92]">
                    {(chat.receptMessages &&
                        chat.receptMessages.map((item) => item.date)) ||
                        (chat.sentMessages &&
                            chat.sentMessages.map((item) => item.date))}
                </p>
            </div>

            {/* Chat */}
            <div className="w-full h-full flex flex-col justify-start items-start gap-5">
                {/* sent messages */}
                <div className="w-full float-right">
                    {chat.sentMessages?.map((item) =>
                        item.messages.map((message) => (
                            <div
                                key={message.id}
                                className="w-fit max-w-[95%] h-fit bg-[#035e4b] text-left float-right rounded-2xl flex justify-center items-end gap-1 mt-1 py-2 overflow-hidden ">
                                <p className="w-full pl-2 text-sm">
                                    {message.msg}
                                </p>
                                <p className="pr-1 text-xs text-[#999999] font-thin">
                                    {message.time}
                                </p>
                                <Seen
                                    seen={message.seenByOther}
                                    className="right-2 absolute "
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* received messages */}
                <div className="w-full float-left">
                    {chat.receptMessages?.map((item) =>
                        item.messages.map((message) => (
                            <div
                                key={message.id}
                                className="w-fit max-w-[95%] h-fit bg-[#1c2d35] text-left float-left rounded-2xl flex justify-center items-end gap-1 mt-1 py-2 overflow-hidden ">
                                <p className="w-full pl-2 text-sm">
                                    {message.msg}
                                </p>
                                <p className="pr-1 text-xs text-[#999999] font-thin">
                                    {message.time}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Message Input */}
            <div className="w-full absolute bottom-[2px] z-50 left-0 flex justify-center items-center gap-2 px-2 ">
                <div className="bg-[#1c2d35] rounded-xl p-2 w-full h-10 flex justify-center items-center gap-3 flex-1">
                    <Icon
                        svg={Smile}
                        fill="#8097a0"
                        bg="transparent"
                        width={22}
                        height={22}
                    />
                    <input
                        type="text"
                        className="bg-transparent p-1 outline-none w-full"
                        placeholder="Message"
                    />
                    <Icon
                        svg={Attachment}
                        fill="#8097a0"
                        bg="transparent"
                        width={22}
                        height={22}
                    />
                    <Icon
                        svg={Camera}
                        fill="#8097a0"
                        bg="transparent"
                        width={22}
                        height={22}
                    />
                </div>
                <div className="w-[35px] h-[35px]  bg-[#07ab82] rounded-full flex justify-center items-center">
                    <Icon
                        svg={Mic}
                        fill="#fff"
                        bg="transparent"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
}

export default Chat;

import Contact from "./Contact";
import Icon from "../../../config/Icon";
import { Archive, Message } from "../../../config/svgIcons";
import Count from "./Count";
import { ChatsType } from "../../../config/inventory";
import { chats } from "./db";
interface Props {
    active: string;
    setActive: (value: string) => void;
    setSelectedChat: (value: ChatsType | null) => void;
}

function Chats({ active, setActive, setSelectedChat }: Props) {
    const handleSelectChat = (chat: ChatsType) => {
        setSelectedChat(chat);
        setActive("chat");
    };

    const filteredChats = chats.filter(
        (chat) => chat.receptMessages?.length || chat.sentMessages?.length
    );

    const sortedChats = filteredChats.slice().sort((a, b) => {
        const aDate =
            (a.receptMessages &&
                a.receptMessages[0] &&
                a.receptMessages[0]?.date) ||
            (a.sentMessages && a.sentMessages[0] && a.sentMessages[0]?.date) ||
            "";
        const bDate =
            (b.receptMessages &&
                b.receptMessages[0] &&
                b.receptMessages[0]?.date) ||
            (b.sentMessages && b.sentMessages[0] && b.sentMessages[0]?.date) ||
            "";

        return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
    const handleNewChat = () => {
        setActive("new");
    };
    return (
        <div className="relative px-3 py-4 ">
            {/* Archived */}
            <div className="w-full flex justify-between items-center py-2">
                <div className="pl-3 flex justify-center items-center gap-7">
                    <Icon
                        svg={Archive}
                        bg="transparent"
                        fill="#999999"
                        parentWidth={false}
                        parentHeight={false}
                        width={20}
                        height={20}
                    />
                    <p className="font-[500] text-sm">Archived</p>
                </div>
                <span className="text-[#00ac81] text-xs">1</span>
            </div>

            {/* Chats */}
            <div className="pt-5 flex flex-col justify-start items-start gap-8 ">
                {sortedChats.map((chat) => (
                    <div
                        key={chat.id}
                        className="w-full flex justify-between items-center cursor-pointer active:bg-[#44515b93] transition-all duration-75 ease-in-out ">
                        <Contact
                            img={chat.img}
                            name={chat.userName}
                            desc={
                                (chat.receptMessages &&
                                    chat.receptMessages[0]?.messages[
                                        chat.receptMessages[0]?.messages
                                            .length - 1
                                    ]?.msg) ||
                                (chat.sentMessages &&
                                    chat.sentMessages[0]?.messages[
                                        chat.sentMessages[0]?.messages.length -
                                            1
                                    ]?.msg)
                            }
                            contactType={active}
                            onClick={() => handleSelectChat(chat)}
                            DescClassName={
                                chat.receptMessages &&
                                chat.receptMessages.some(
                                    (message) =>
                                        !message.messages.every(
                                            (msg) => msg.seenByOwner
                                        )
                                )
                                    ? "font-[500]"
                                    : "opacity-90 font-thin"
                            }
                            seen={
                                chat.sentMessages &&
                                chat.sentMessages[0].messages[0].seenByOther
                            }
                            hideSeen={
                                chat.receptMessages && chat.receptMessages
                            }
                        />

                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="text-[#8097a1] text-xs">
                                {(chat.receptMessages &&
                                    chat.receptMessages[0].messages[0].time) ||
                                    (chat.sentMessages &&
                                        chat.sentMessages[0].messages[0].time)}
                            </p>
                            {chat.receptMessages &&
                                chat.receptMessages[0].messages.length > 0 &&
                                chat.receptMessages &&
                                chat.receptMessages.every(
                                    (message) =>
                                        !message.messages.every(
                                            (msg) => msg.seenByOwner
                                        )
                                ) && (
                                    <Count
                                        counter={chat.receptMessages?.reduce(
                                            (acc, message) =>
                                                acc +
                                                message.messages.filter(
                                                    (msg) => !msg.seenByOwner
                                                ).length,
                                            0
                                        )}
                                    />
                                )}
                        </div>
                    </div>
                ))}
            </div>

            {/* New chat button */}
            <div
                className="fixed bottom-5 right-4 flex justify-center items-center w-[55px] h-[55px] rounded-full bg-[#0aaa83] cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90"
                onClick={handleNewChat}>
                <Icon
                    svg={Message}
                    bg="transparent"
                    fill="white"
                    width={30}
                    height={30}
                    parentWidth={false}
                    parentHeight={false}
                />
            </div>
        </div>
    );
}

export default Chats;

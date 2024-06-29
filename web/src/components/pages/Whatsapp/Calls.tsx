import Contact from "./Contact";
import { chats } from "./db";
import { Phone } from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import { ChatsType } from "../../../config/inventory";

interface Props {
    active: string;
    calling: boolean;
    setCalling: (value: boolean) => void;
    setSelectedChat: (value: ChatsType | null) => void;
    setActive: (value: string) => void;
}

function Calls({
    active,
    calling,
    setCalling,
    setSelectedChat,
    setActive,
}: Props) {
    const handleCalling = (chat: ChatsType) => {
        setCalling(!calling);
        setSelectedChat(chat);
    };

    const handleSelectedChat = (chat: ChatsType) => {
        setSelectedChat(chat);
        setActive("chat");
    };

    // Merge all call logs into a single array
    const allCalls = chats.reduce((acc, chat) => {
        if (chat.callsLog) {
            acc.push(
                ...chat.callsLog.map((log) => ({ ...log, contact: chat }))
            );
        }
        return acc;
    }, [] as { contact: ChatsType; id: string; time: string; missed: boolean }[]);

    // Sort the merged call logs array by time
    const sortedCalls = allCalls.sort((a, b) => {
        // Convert time strings to Date objects for comparison
        const dateA = new Date(a.time);
        const dateB = new Date(b.time);

        // Compare the dates
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <div className="w-full px-3 py-4">
            <div className="w-full flex flex-col gap-2">
                {sortedCalls.map((log) => (
                    <div
                        key={log.id}
                        className="w-full flex justify-between items-center">
                        <Contact
                            contactType={active}
                            img={log.contact.img}
                            name={log.contact.userName}
                            desc={log.time}
                            missedCall={log.missed}
                            parentClass="cursor-pointer"
                            onClick={() => handleSelectedChat(log.contact)}
                        />
                        <Icon
                            svg={Phone}
                            bg="transparent"
                            fill="#08ab85"
                            width={20}
                            height={20}
                            parentHeight={false}
                            parentWidth={false}
                            parentClassName="cursor-pointer"
                            onClick={() => handleCalling(log.contact)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calls;

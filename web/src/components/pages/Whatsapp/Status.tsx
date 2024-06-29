import React from "react";
import Contact from "./Contact";
import MyStatus from "../../assets/images/person-9.png";
import { chats } from "./db";

interface Props {
    active: string;
}

function Status({ active }: Props) {
    // Sort chats based on status update time
    const sortedChats = chats.slice().sort((a, b) => {
        // Assuming time is in ISO 8601 format, so we can compare them directly
        return (
            new Date(b.status?.time || "").getTime() -
            new Date(a.status?.time || "").getTime()
        );
    });

    return (
        <div className="px-3 py-4">
            {/* My Status */}
            <div className="flex justify-start items-center gap-3 ">
                <img
                    src={MyStatus}
                    alt="MyStatus"
                    className="w-[40px] rounded-full"
                />
                <div>
                    <h3 className="text-sm font-[500]">My status</h3>
                    <p className="text-xs font-light text-[#8097a1]">
                        Tap to add status update
                    </p>
                </div>
            </div>

            {/* Stories */}
            <div className="mt-3">
                <h3 className="text-sm text-[#8097a1] mb-4">Recent updates</h3>
                <div className="flex flex-col gap-5">
                    {sortedChats
                        .filter((chat) => chat.status?.viewed === false)
                        .map((chat) => (
                            <React.Fragment key={chat.id}>
                                {!chat.status?.viewed && (
                                    <Contact
                                        contactType={active}
                                        img={chat.status?.image}
                                        name={chat.userName}
                                        desc={chat.status?.time}
                                        viewed={chat.status?.viewed}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                </div>
            </div>
            <div className="mt-3">
                <h3 className="text-sm text-[#8097a1] mb-4">Viewed updates</h3>
                <div className="flex flex-col gap-5">
                    {sortedChats
                        .filter((chat) => chat.status?.viewed === true)
                        .map((chat) => (
                            <React.Fragment key={chat.id}>
                                {chat.status?.viewed && (
                                    <Contact
                                        contactType={active}
                                        img={chat.status?.image}
                                        name={chat.userName}
                                        desc={chat.status?.time}
                                        viewed={chat.status?.viewed}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Status;

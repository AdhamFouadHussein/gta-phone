import React from "react";
export type App = {
    id: number;
    name?: string;
    description?: string;
    downloads?: number;
    icon?: string;
    path?: string;
    installed?: boolean;
    rate?: number;
    image?: string;
};

export type ContactType = {
    id: number;
    name: string;
    mobile: string;
    home: string;
};

interface ToggleType {
    type: "toggle";
    checked: boolean;
}

interface ActionType {
    type: "action";
    action: () => void;
}

interface TabType {
    type: "tab";
    tabContent: React.ReactNode;
}

type SettingItemType = ToggleType | ActionType | TabType;

export interface SettingItem {
    id: string;
    name: string;

    /*  -toggle-> to show ui switch.
        -tab-> to navigate to another setting page.
        -action-> to apply an action when clicked.
     */
    type: SettingItemType;
}

interface SettingSection {
    id: string;
    title: string;
    desc?: string;
    items: SettingItem[];
}

export interface SettingGroup {
    id: string;
    name: string;
    icon: React.ReactElement;
    fillColor?: string;
    bg?: string;
    settingSections: {
        [key: string]: SettingSection;
    };
}

export interface AllGroups {
    [key: string]: SettingGroup[];
}

export type Messages = {
    id: string;
    date: string;
    messages: Message[];
};

export type Message = {
    id: string;
    msg: string;
    time: string;
    seenByOwner?: boolean;
    seenByOther?: boolean;
};
export type Chat = {
    id: string;
    userName: string;
    img: string;
    receptMessages?: Messages[];
    sentMessages?: Messages[];
};

export type ChatsType = {
    id: string;
    userName: string;
    img: string;
    receptMessages?: Messages[];
    sentMessages?: Messages[];
    about?: string;
    callsLog?: WhatsappCalls[];
    status?: Status;
};

export type Status = {
    id: string;
    time: string;
    image: string;
    viewed: boolean;
};

export type WhatsappCalls = {
    id: string;
    time: string;
    missed: boolean;
};

export type Bio = {
    name?: string;
    userName?: string;
    website?: string;
    bio?: string;
    profileImg?: string;
};

// export type InstaDM = {
//     id: string;
//     image?: string;
//     name?: string;
//     userName?: string;
//     receptMessages?: Messages[];
//     sentMessages?: Messages[];
//     stories?: Status | null;
// };

export interface GalleryItem {
    id: number;
    citizenid: string;
    image: string;
    timestamp: string;
}
export interface InstaPostData {
    UserID: number;
    PostID: number;
    ImageURL: string;
    Caption: string;
    Location: string;
    Timestamp: Date;
    followedByUser?: boolean;
}

export interface InstaUserData {
    UserID: number;
    Username: string;
    Email: string;
    Password?: string;
    FullName: string;
    Bio: {
        body: string;
        website: string;
    };
    ProfilePicURL: string;
}
export type MergedPost = InstaPostData & { user: InstaUserData };

export interface InstaComment {
    CommentID: number;
    UserID: number;
    PostID: number;
    Comment: string | null;
    Timestamp: Date;
}

export type MergedComment = InstaComment & InstaUserData;

export interface InstaFollows {
    FollowerID: number | undefined;
    FollowingID: number | undefined;
}
export interface InstaSaves {
    UserID: number | undefined;
    PostID: number | undefined;
}

export interface InstaLikes {
    UserID: number | undefined;
    PostID: number | undefined;
}

export interface InstaStory {
    user: any;
    StoryID?: number;
    UserID: number | undefined;
    ImageURL: string;
    Caption?: string;
    Location?: string;
    Timestamp?: Date;
    ExpiryTime?: Date | null;
    viewed?: boolean;
}

export interface InstaDM {
    MessageID: number;
    SenderID: number;
    ReceiverID: number;
    Message: string | null;
    Timestamp: Date;
}

export type MergedInstaDM = InstaDM & {user:InstaUserData};

export type XTweet = {
    id: string;
    img?: string;
    text?: string;
    likes: number;
    retweets: number;
    comments: number;
};
export type XTweets = {
    id: string;
    name: string;
    userName: string;
    avatar: string;
    tweet: XTweet;
    liked: boolean;
    retweeted: boolean;
};

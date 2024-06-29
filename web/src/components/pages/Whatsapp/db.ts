import { ChatsType } from "../../../config/inventory";
import Person1 from "../../assets/images/person-1.png";
import Person2 from "../../assets/images/person-2.png";
import Person3 from "../../assets/images/person-3.png";
import Person4 from "../../assets/images/person-4.png";
import Person5 from "../../assets/images/person-5.png";
import Person6 from "../../assets/images/person-6.png";
import Person7 from "../../assets/images/person-7.png";
import Person8 from "../../assets/images/person-8.png";
import Person10 from "../../assets/images/person-10.png";
import Person11 from "../../assets/images/person-11.png";
import Person12 from "../../assets/images/person-12.png";
import Person13 from "../../assets/images/person-13.png";
import Person14 from "../../assets/images/person-14.png";
import Person15 from "../../assets/images/person-15.png";

import Story1 from "../../assets/images/story-1.png";
import Story2 from "../../assets/images/story-2.png";
import Story3 from "../../assets/images/story-3.png";
import Story4 from "../../assets/images/story-4.png";
import Story5 from "../../assets/images/story-5.png";
import Story6 from "../../assets/images/story-6.png";
import Story7 from "../../assets/images/story-7.png";

export const chats: ChatsType[] = [
    {
        id: "1",
        userName: "Jane",
        img: Person1,
        sentMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Holla Jane!",
                        time: "17:00",
                        seenByOther: true,
                    },
                    {
                        id: "2",
                        msg: "A week back I started exploring UI/UX using Figma",
                        time: "17:00",
                        seenByOther: true,
                    },
                    {
                        id: "3",
                        msg: "And I have tried to clone WhatsApp",
                        time: "17:00",
                        seenByOther: true,
                    },
                    {
                        id: "4",
                        msg: "Have a look at my Figma profile, hope you will like it.",
                        time: "17:00",
                        seenByOther: true,
                    },
                    {
                        id: "5",
                        msg: "figma.com / @shivanshumathur Do share your views",
                        time: "17:00",
                        seenByOther: true,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Wow... Sounds great!",
                        time: "17:02",
                        seenByOwner: false,
                    },
                    {
                        id: "2",
                        msg: "Amazing Designs",
                        time: "17:02",
                        seenByOwner: false,
                    },
                    {
                        id: "3",
                        msg: "It’s awesome man!!!😍",
                        time: "17:02",
                        seenByOwner: false,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        about: "Hey there! I am using WhatsApp.",
    },
    {
        id: "2",
        userName: "Gloria",
        img: Person2,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Sup Dude?😅",
                        time: "14:33",
                        seenByOwner: false,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        about: "Available",
        callsLog: [
            {
                id: "1",
                time: "February 11, 16:26",
                missed: true,
            },
        ],
        status: {
            id: "1",
            image: Story1,
            time: "8 minutes ago",
            viewed: false,
        },
    },
    {
        id: "3",
        userName: "Robert Fox",
        img: Person3,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Okay, I will check...",
                        time: "11:24",
                        seenByOwner: false,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        about: "Not Available",
        status: {
            id: "1",
            image: Story2,
            time: "Today, 19:06",
            viewed: false,
        },
    },
    {
        id: "4",
        userName: "Jane Cooper",
        img: Person4,
        sentMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Sure",
                        time: "17:00",
                        seenByOther: true,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        about: "No Status",
        callsLog: [
            {
                id: "1",
                time: "February 11, 23:17",
                missed: true,
            },
            {
                id: "2",
                time: "February 10, 13:37",
                missed: false,
            },
        ],
        status: {
            id: "3",
            image: Story3,
            time: "Today, 18:44",
            viewed: false,
        },
    },
    {
        id: "5",
        userName: "Jacob Jones",
        img: Person5,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "👍🏻👍🏻",
                        time: "Yesterday",
                        seenByOwner: true,
                    },
                ],
                date: "February 12, 2022",
            },
        ],
        about: "Hey there! I am using WhatsApp.",
        status: {
            id: "4",
            image: Story4,
            time: "Today, 16:23",
            viewed: false,
        },
    },
    {
        id: "6",
        userName: "Brandie❣️",
        img: Person6,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "Done!!!🐶",
                        time: "Yesterday",
                        seenByOwner: true,
                    },
                ],
                date: "February 11, 2022",
            },
        ],
        about: "Hey there! I am using WhatsApp.",
        status: {
            id: "5",
            image: Story5,
            time: "Today, 08:04",
            viewed: false,
        },
    },
    {
        id: "7",
        userName: "Lilly",
        img: Person7,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "💜",
                        time: "Yesterday",
                        seenByOwner: true,
                    },
                ],
                date: "February 11, 2022",
            },
        ],
        about: "💜",
        status: {
            id: "6",
            image: Story6,
            time: "23 minutes ago",
            viewed: true,
        },
    },
    {
        id: "8",
        userName: "Annie",
        img: Person8,
        receptMessages: [
            {
                id: "1",
                messages: [
                    {
                        id: "1",
                        msg: "🤣🤣🤣🤣",
                        time: "Yesterday",
                        seenByOwner: true,
                    },
                ],
                date: "February 11, 2022",
            },
        ],
        about: "Peace out!",
        status: {
            id: "7",
            image: Story7,
            time: "48 minutes ago",
            viewed: true,
        },
    },
    {
        id: "9",
        userName: "Micky",
        img: Person10,
        callsLog: [
            {
                id: "1",
                time: "February 10, 8:17",
                missed: true,
            },
        ],
    },
    {
        id: "10",
        userName: "Aisha",
        img: Person11,
        callsLog: [
            {
                id: "1",
                time: "February 09, 11:20",
                missed: false,
            },
        ],
    },
    {
        id: "11",
        userName: "Jhon",
        img: Person12,
        callsLog: [
            {
                id: "1",
                time: "February 08, 20:13",
                missed: true,
            },
        ],
    },
    {
        id: "12",
        userName: "Liza",
        img: Person13,
        callsLog: [
            {
                id: "1",
                time: "February 08, 11:50",
                missed: true,
            },
        ],
    },
    {
        id: "13",
        userName: "Trisha",
        img: Person14,
        callsLog: [
            {
                id: "1",
                time: "February 07, 10:17",
                missed: true,
            },
        ],
    },
    {
        id: "14",
        userName: "Broo",
        img: Person15,
        callsLog: [
            {
                id: "1",
                time: "February 06, 21:01",
                missed: true,
            },
        ],
    },
];

import { AllGroups } from "../../../config/inventory";
import {
    Gear,
    Accessibility,
    Timer,
    Hand,
    Heart,
    Key,
    Maps,
    News,
    Safari,
    ShortCut,
    Translate,
} from "../../../config/svgIcons";

export const allGroups: AllGroups = {
    firstGroup: [
        {
            id: "1",
            name: "Screen Time",
            icon: Timer,
            fillColor: "white",
            bg: "#5755d7",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers Applied"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
    ],

    secondGroup: [
        {
            id: "2",
            name: "General",
            icon: Gear,
            fillColor: "white",
            bg: "#8e8e93",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
        {
            id: "3",
            name: "Accessibility",
            icon: Accessibility,
            fillColor: "white",
            bg: "#007bfe",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
        {
            id: "4",
            name: "Privacy & Security",
            icon: Hand,
            fillColor: "white",
            bg: "#007bfe",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
    ],

    thirdGroup: [
        {
            id: "5",
            name: "Passwords",
            icon: Key,
            fillColor: "white",
            bg: "#8e8e93",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
    ],

    fourthGroup: [
        {
            id: "6",
            name: "Safari",
            icon: Safari,
            bg: "white",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },

        {
            id: "7",
            name: "News",
            icon: News,
            fillColor: "#fd3f5d",
            bg: "white",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },

        {
            id: "8",
            name: "Translate",
            icon: Translate,
            fillColor: "#31aec8",
            bg: "white",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
        {
            id: "9",
            name: "Maps",
            icon: Maps,
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
        {
            id: "10",
            name: "Shortcuts",
            icon: ShortCut,
            fillColor: "#5855d3",
            bg: "white",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
        {
            id: "11",
            name: "Health",
            icon: Heart,
            fillColor: "#fd3f5d",
            bg: "white",
            settingSections: {
                firstSection: {
                    id: "1",
                    title: "Paired devices",
                    desc: "Removing trusted computers will delete all of the records of computers that you have paired with previously.",
                    items: [
                        {
                            id: "1",
                            name: "Clear Trusted Computers",
                            type: {
                                type: "action",
                                action: () => alert("Clear Trusted Computers"),
                            },
                        },
                    ],
                },
                secondSection: {
                    id: "2",
                    title: "UI automation",
                    items: [
                        {
                            id: "1",
                            name: "Enable UI automation",
                            type: {
                                type: "toggle",
                                checked: true
                            }
                        }
                    ]
                },
                thirdSection: {
                    id: "3",
                    title: "State restoration testing",
                    desc: "Terminate instead of suspending apps when backgrounded to force apps to be relaunched when they are foregrounded.",
                    items: [
                        {
                            id: "1",
                            name: "Fast App Termination",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        }
                    ]
                },
                fourthSection: {
                    id: "4",
                    title: "Waltter testing",
                    items: [
                        {
                            id: "1",
                            name: "Additional Logging",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "2",
                            name: "Allow HTTP Services",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "3",
                            name: "Disable Rate Limiting",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                        {
                            id: "4",
                            name: "NFC Pass Key Optional",
                            type: {
                                type: "toggle",
                                checked: false
                            }
                        },
                    ]
                },
                fifthSection: {
                    id: "5",
                    title: "Media services testing",
                    items: [
                        {
                            id: "1",
                            name: "AirPlay Suggestions",
                            type: {
                                type: "tab",
                                tabContent: <div>
                                    <h1>AirPlay Suggestions</h1>
                                </div>,
                            }
                        },
                        {
                            id: "2",
                            name: "Reset Media Services",
                            type: {
                                type: "action",
                                action: () => alert("Reset Media Services Applied"),
                            }
                        },
                    ]
                },
            },
        },
    ],
};

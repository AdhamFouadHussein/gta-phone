import { InstaDM, Status } from "../../../config/inventory";
import { faker } from "@faker-js/faker";

const messagesCount = () => {
    return Math.floor(Math.random() * 10);
};
export const directMsgDB: InstaDM[] = [];

for (let i = 0; i < messagesCount(); i++) {
    const receptMessages = [];
    const sentMessages = [];
    let stories: Status | null = null; // Initialize stories to null

    const receptMessagesCount = Math.floor(Math.random() * 5); // Random number of reception messages
    const sentMessagesCount = Math.floor(Math.random() * 5); // Random number of sent messages

    // Generate reception messages
    for (let j = 0; j < receptMessagesCount; j++) {
        receptMessages.push({
            id: faker.string.uuid(),
            date: faker.date.past().toDateString(),
            messages: [
                {
                    id: faker.string.uuid(),
                    msg: faker.lorem.sentence({ min: 2, max: 4 }),
                    time: faker.string.numeric(2),
                },
            ],
        });
    }

    // Generate sent messages
    for (let k = 0; k < sentMessagesCount; k++) {
        sentMessages.push({
            id: faker.string.uuid(),
            date: faker.date.past().toDateString(),
            messages: [
                {
                    id: faker.string.uuid(),
                    msg: faker.lorem.sentence({ min: 2, max: 4 }),
                    time: faker.string.numeric(2),
                },
            ],
        });
    }

    // Randomly determine if the user has a story
    if (Math.random() < 0.5) {
        // Adjust probability as needed
        stories = {
            id: faker.string.uuid(),
            time: faker.string.numeric(2),
            image: faker.image.url(),
            viewed: faker.datatype.boolean(),
        };
    }

    // Add the user to directMsgDB
    directMsgDB.push({
        id: faker.string.uuid(),
        image: faker.image.url(),
        name: faker.person.fullName(),
        userName: faker.internet.userName(),
        receptMessages: receptMessages,
        sentMessages: sentMessages,
        stories: stories,
    });
}



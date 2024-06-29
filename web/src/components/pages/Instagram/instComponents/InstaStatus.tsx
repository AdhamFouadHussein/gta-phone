import Avatar from "react-avatar";
import { InstaStory } from "../../../../config/inventory";

type Props = {
    setSelectedStory?: (story: InstaStory | null) => void;
    story?: InstaStory;
    setStories?: React.Dispatch<React.SetStateAction<InstaStory[]>>;
    setSelectedHighlight?: (story: InstaStory | null) => void;
    highlightStory?: InstaStory;
};
const InstaStatus = ({
    setSelectedStory,
    story,
    setStories,
    setSelectedHighlight,
    highlightStory,
}: Props) => {
    const handleStoryClick = (story: InstaStory) => {
        const storedStories: InstaStory[] = JSON.parse(
            localStorage.getItem("instaStories") || "[]"
        );

        // Update viewed status in local storage
        const updatedStories = storedStories.map((s) => ({
            ...s,
            viewed: s.StoryID === story.StoryID ? true : s.viewed,
        }));

        localStorage.setItem("instaStories", JSON.stringify(updatedStories));

        // Set the stories
        setStories && setStories(updatedStories);

        // Set the selected story
        setSelectedStory && setSelectedStory(story);
    };

    const handleHighlightClick = (story: InstaStory) => {
        // Set the selected story
        setSelectedHighlight && setSelectedHighlight(story);
    };

    return (
        <>
            {setSelectedStory && story && setStories && (
                <div
                    key={story?.StoryID}
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => handleStoryClick(story)}>
                    <div
                        className={`${
                            story.viewed
                                ? "border-2 border-[#8a8a8d]"
                                : "statusBg"
                        } 
        p-[2px] w-[50px] h-[50px] rounded-[40px] flex justify-center items-center `}>
                        <Avatar
                            src={story?.user.ProfilePicURL}
                            round
                            size="45"
                        />
                    </div>
                    <div className="text-center text-ellipsis whitespace-nowrap overflow-hidden w-[55px]">
                        <span className="text-[10px] ">
                            {story?.user.Username}
                        </span>
                    </div>
                </div>
            )}
            {setSelectedHighlight && highlightStory && (
                <div
                    key={highlightStory?.StoryID}
                    className="flex flex-col justify-center items-center cursor-pointer"
                    onClick={() => handleHighlightClick(highlightStory)}>
                    <div
                        className={
                            "statusBg p-[2px] w-[50px] h-[50px] rounded-[40px] flex justify-center items-center"
                        }>
                        <Avatar
                            src={highlightStory?.ImageURL}
                            round
                            size="45"
                        />
                    </div>
                    <div className="text-center text-ellipsis whitespace-nowrap overflow-hidden w-[55px]">
                        <span className="text-[10px] ">Highlight Title</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default InstaStatus;

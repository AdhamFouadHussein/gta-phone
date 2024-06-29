import React, { useEffect, useState } from "react";
import {
    HeartOutline,
    Heart,
    Comment,
    Retweet as RetweetIcon,
    Upload,
} from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import { XTweets } from "../../../config/inventory";

type Props = {
    tweet: XTweets;
    xdb: XTweets[];
    setXdb: (value: XTweets[]) => void;
};

function Actions({ tweet, xdb, setXdb }: Props) {
    const [liked, setLiked] = useState<boolean>(tweet.liked);
    const [retweeted, setRetweeted] = useState<boolean>(tweet.retweeted);
    const [updatedTweet, setUpdatedTweet] = useState<XTweets>(tweet);

    useEffect(() => {
        setLiked(tweet.liked);
        setRetweeted(tweet.retweeted);
    }, [tweet.liked, tweet.retweeted, tweet.tweet.likes, tweet.tweet.retweets]);

    const onLike = (tweetId: string, liked: boolean) => {
        const updatedXdb = xdb.map((tweet) => {
            if (tweet.id === tweetId) {
                return {
                    ...tweet,
                    tweet: {
                        ...tweet.tweet,
                        likes: liked
                            ? tweet.tweet.likes + 1
                            : tweet.tweet.likes - 1,
                    },
                    liked: liked,
                };
            }
            return tweet;
        });
        setXdb(updatedXdb);
        setUpdatedTweet(updatedXdb.find((t) => t.id === tweetId)!);
    };

    const onRetweet = (tweetId: string, retweeted: boolean) => {
        const updatedXdb = xdb.map((tweet) => {
            if (tweet.id === tweetId) {
                return {
                    ...tweet,
                    tweet: {
                        ...tweet.tweet,
                        retweets: retweeted
                            ? tweet.tweet.retweets + 1
                            : tweet.tweet.retweets - 1,
                    },
                    retweeted: retweeted,
                };
            }
            return tweet;
        });
        setXdb(updatedXdb);
        setUpdatedTweet(updatedXdb.find((t) => t.id === tweetId)!);
    };

    const handleLike = () => {
        const newLiked = !liked;
        setLiked(newLiked);
        onLike(tweet.id, newLiked);
    };

    const handleRetweet = () => {
        const newRetweeted = !retweeted;
        setRetweeted(newRetweeted);
        onRetweet(tweet.id, newRetweeted);
    };

    return (
        <div className="w-full flex justify-center items-center gap-2 ">
            <div className="flex justify-center items-center gap-1">
                <Icon
                    svg={Comment}
                    fill="#828282"
                    parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                    width={18}
                    height={18}
                />
                <p className="text-sm text-[#828282]">
                    {updatedTweet.tweet.comments}
                </p>
            </div>
            <div className="flex justify-center items-center gap-1">
                {retweeted ? (
                    <Icon
                        svg={RetweetIcon}
                        fill="#4fd48c"
                        parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={handleRetweet}
                        width={18}
                        height={18}
                    />
                ) : (
                    <Icon
                        svg={RetweetIcon}
                        fill="#828282"
                        parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={handleRetweet}
                        width={18}
                        height={18}
                    />
                )}
                <p
                    className={`text-sm ${
                        retweeted ? "text-[#4fd48c]" : "text-[#828282]"
                    } `}>
                    {updatedTweet.tweet.retweets}
                </p>
            </div>
            <div className="flex justify-center items-center gap-1">
                {liked ? (
                    <Icon
                        svg={Heart}
                        fill="#cc176c"
                        parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={handleLike}
                        width={18}
                        height={18}
                    />
                ) : (
                    <Icon
                        svg={HeartOutline}
                        fill="transparent"
                        parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                        onClick={handleLike}
                        width={18}
                        height={18}
                    />
                )}
                <p
                    className={`text-sm ${
                        liked ? "text-[#cc176c]" : "text-[#828282]"
                    } `}>
                    {updatedTweet.tweet.likes}
                </p>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Icon
                    svg={Upload}
                    fill="white"
                    parentClassName="cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                    width={18}
                    height={18}
                />
            </div>
        </div>
    );
}

export default Actions;

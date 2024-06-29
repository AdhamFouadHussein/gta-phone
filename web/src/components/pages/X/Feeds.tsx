import Icon from "../../../config/Icon";
import { Magnify } from "../../../config/svgIcons";
import XUser1 from "../../assets/images/XUser-1.png";

import Actions from "./Actions";

type Props = {
    likes: number;
    retweets: number;
    liked: boolean;
    retweet: boolean;
    setLikes: (likes: number) => void;
    setRetweets: (retweets: number) => void;
    setLiked: (liked: boolean) => void;
    setRetweet: (retweet: boolean) => void;
};
function Feeds({
    likes,
    retweets,
    liked,
    retweet,
    setLikes,
    setRetweets,
    setLiked,
    setRetweet,
}: Props) {
    return (
        <div className="relative px-3 py-4 mt-20 overflow-hidden">
            {/* Feeds */}
            <div className="flex justify-start items-start gap-2 ">
                {/* Profile Img */}
                <img src={XUser1} alt="XUser1" />

                {/* Tweet Body */}
                <div className="flex flex-col justify-start items-start gap-3">
                    {/* User Info */}
                    <div className="info flex justify-center items-center gap-1">
                        <h3 className="text-sm font-[500]">Robert Julio</h3>
                        <p className="text-xs text-[#828282]">@juliorobert12</p>
                    </div>

                    {/* Tweet Text */}
                    <textarea
                        className="w-full h-full max-w-full max-h-60 text-sm font-light  noScroll bg-transparent focus-within:outline-none focus-within:border-none"
                        rows={10}
                        style={{ resize: "none" }}
                        disabled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus explicabo ea, laborum, nam omnis quaerat
                        sint incidunt libero impedit veritatis perspiciatis quam
                        excepturi, nemo ipsam tenetur odio officiis? Sint vitae
                        libero molestiae officia consequatur repellat magnam
                        perferendis mollitia cupiditate natus. In beatae maiores
                        eligendi numquam explicabo, veritatis adipisci
                        consequuntur ipsam.
                    </textarea>

                    {/* Actions */}
                    <Actions
                        liked={liked}
                        retweet={retweet}
                        setLikes={setLikes}
                        setRetweets={setRetweets}
                        setLiked={setLiked}
                        setRetweet={setRetweet}
                        likes={likes}
                        retweets={retweets}
                    />
                </div>
            </div>
            {/* Footer */}
        </div>
    );
}

export default Feeds;

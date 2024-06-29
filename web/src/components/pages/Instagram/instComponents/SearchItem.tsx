import Avatar from "react-avatar";
import { InstaFollows, InstaUserData } from "../../../../config/inventory";
import { useAuth } from "../../../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useHandleNuiMessage } from "../../../../hooks/useHandleNuiMessage ";
import { fetchNui } from "../../../../utils/fetchNui";

interface Props {
    account: InstaUserData;
    onSelectAccount: (account: InstaUserData) => void;
}
function SearchItem({ account, onSelectAccount }: Props) {
    const { user } = useAuth();

    const [followedByUser, setFollowedByUser] = useState<boolean>(false);

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollowedByUser(
            payload.some(
                (follow) =>
                    follow.FollowerID === user?.UserID &&
                    follow.FollowingID === account?.UserID
            )
        );
    });

    const handleGetFollows = () => {
        fetchNui("getFollows", { UserID: user?.UserID });
    };

    useEffect(() => {
        if (user?.UserID) {
            handleGetFollows();
        }
    }, [user?.UserID]);

    return (
        <div
            className="flex justify-start items-center gap-2 py-5 px-3 cursor-pointer hover:bg-black/35
            transition-all duration-300 ease-in-out"
            onClick={() => onSelectAccount(account)}>
            {/* profile pic */}
            <div>
                <Avatar src={account.ProfilePicURL} alt="" round size="50" />
            </div>

            {/* info */}
            <div className="text-xs">
                <h1>{account.FullName}</h1>
                <p className="text-stone-300">{account.Username}</p>
                <p className="text-stone-500">
                    {followedByUser && "Followed by you"}
                </p>
            </div>
        </div>
    );
}

export default SearchItem;

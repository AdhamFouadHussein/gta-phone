import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import Avatar from "react-avatar";
import Icon from "../../../../config/Icon";
import {
    Home,
    HomeOutline,
    MagnifyOutline,
    InstaPlus,
    InstaPlusOutline,
} from "../../../../config/svgIcons";

type Props = {
    style?: string;
    handleOpenPostData?: React.MouseEventHandler<HTMLImageElement> | undefined;
    handleClosePostData?: React.MouseEventHandler<HTMLImageElement> | undefined;
    postData?: boolean;
};

const InstaFooter = ({
    style,
    postData,
    handleOpenPostData,
    handleClosePostData,
}: Props) => {
    const { user } = useAuth();
    const pathName = window.location.pathname;

    return (
        <div
            style={{
                borderBottomLeftRadius: "3vw",
                borderBottomRightRadius: "3vw",
            }}
            className={`bg-stone-950 z-20 absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[19vw] h-[10vh] px-5 `}>
            <div className="flex justify-between items-start w-full h-full pt-3">
                <Link to={"/InstaHome"}>
                    <div onClick={handleClosePostData}>
                        {pathName === "/InstaHome" && !postData ? (
                            <Icon
                                svg={Home}
                                fill="white"
                                width={25}
                                height={25}
                            />
                        ) : (
                            <Icon
                                svg={HomeOutline}
                                fill="transparent"
                                width={25}
                                height={25}
                            />
                        )}
                    </div>
                </Link>
                <div onClick={handleOpenPostData}>
                    <Link className="cursor-pointer" to={"/InstaHome"}>
                        {postData && pathName === "/InstaHome" ? (
                            <Icon
                                svg={InstaPlus}
                                fill="white"
                                width={25}
                                height={25}
                            />
                        ) : (
                            <Icon
                                svg={InstaPlusOutline}
                                fill="transparent"
                                width={25}
                                height={25}
                            />
                        )}
                    </Link>
                </div>
                <Link to={"/InstaSearch"}>
                    <Icon
                        svg={MagnifyOutline}
                        fill={
                            pathName === "/InstaSearch"
                                ? "white"
                                : "transparent"
                        }
                        width={25}
                        height={25}
                    />
                </Link>
                <Link
                    to={"/intaProfileData"}
                    className={`${style} rounded-full`}>
                    <Avatar src={user?.ProfilePicURL} round size="30" />
                </Link>
            </div>
        </div>
    );
};

export default InstaFooter;

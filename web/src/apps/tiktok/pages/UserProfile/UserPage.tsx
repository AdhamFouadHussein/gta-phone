import MainLayout from "../../components/mainLayout/MainLayout";
import UserPageHeader from "../../components/userPage/Header/UserPageHeader";
import UserCard from "../../components/userPage/UserCard/UserCard";
import UserAvatar from '../../../assets/icons/tiktok/users/test-avatar.svg'
import useSignupStore from "../../store/signupStore/signupStore";
import UserVideoList from "../../components/userVideoList/UserVideoList";

const videosList = [{
    id: "1",
    url: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4"

}, {
    id: '2',
    url: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4"
}, {
    id: '3',
    url: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4"
}, {
    id: '4',
    url: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4"
}]


export default function UserPage() {
    const state = useSignupStore();

    return (<MainLayout
        mode={"light"}
        footer
        statusBarStyles={{
            color: "black"
        }}
        styles={{
            backgroundColor: "white"
        }}>
        <UserPageHeader
            user={{
                userId: "1",
                userName: state.nickname
            }}/>

        <UserCard
            user={{
                name: state.nickname,
                avatar: UserAvatar,
                id: "1",
                stats: {
                    likes: "91",
                    followers: "14",
                    following: "38"
                }
            }}/>
        <UserVideoList videos={videosList}/>

    </MainLayout>)
}
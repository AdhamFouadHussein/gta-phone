import MainLayout from "../../components/mainLayout/MainLayout";
import UserPageHeader from "../../components/userPage/Header/UserPageHeader";
import UserCard from "../../components/userPage/UserCard/UserCard";
import UserAvatar from '../../../assets/icons/tiktok/users/test-avatar.svg'
import useSignupStore from "../../store/signupStore/signupStore";

export default function UserPage() {
    const state = useSignupStore(); // Zustand action to set password

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
                userName: "Jacob West"
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

    </MainLayout>)
}
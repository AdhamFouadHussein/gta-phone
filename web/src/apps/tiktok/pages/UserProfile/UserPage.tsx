import MainLayout from "../../components/mainLayout/MainLayout";
import UserPageHeader from "../../components/userPage/Header/UserPageHeader";
import UserCard from "../../components/userPage/UserCard/UserCard";
import UserAvatar from "../../../assets/icons/tiktok/users/test-avatar.svg";
import useSignupStore from "../../store/signupStore/signupStore";
import UserVideoList from "../../components/userVideoList/UserVideoList";
import { useEffect, useState } from "react";
import { fetchNui } from "../../../../utils/fetchNui";
import { useAuthStore } from "../../store/userStore/userStore";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const state = useSignupStore();
  const { user, logout } = useAuthStore();
  const [ownsVideoList, setOwnVideoList] = useState<any[]>([]);
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    console.log("user_id ", userId)
    window.addEventListener("message", handleNuiMessage);
    fetchNui("TgetOwnPosts", { UserID: userId });

    return () => {
      window.removeEventListener("message", handleNuiMessage);
    };
  }, []);
  const handleNuiMessage = (event: MessageEvent) => {
    const { data } = event;
    if (data.type === "T_OWN_POSTS") {
      fetchNui("TgetUser", { UserID: user?.id });
      const ownPost: any[] = data.payload ?? [];
      console.log(ownPost);
      setOwnVideoList(
        ownPost.map((item) => {
          return {
            id: item.PostID,
            url: item.VideoURL,
          };
        })
      );
    } else if (data.type === "T_USER") {
      console.log("user Details ", data.payload);
      setUserDetails(data.payload);
    }
  };

  return (
    <MainLayout
      mode={"light"}
      footer
      statusBarStyles={{
        color: "black",
      }}
      styles={{
        backgroundColor: "white",
      }}
    >
      <UserPageHeader
        user={{
          userId: String(userId),
          userName: state.nickname,
        }}
      />

      <UserCard
        user={{
          name: state.nickname,
          avatar: UserAvatar,
          id: String(userId),
          stats: {
            likes: "91",
            followers: "14",
            following: "38",
          },
        }}
      />
      <UserVideoList videos={ownsVideoList} />
    </MainLayout>
  );
}

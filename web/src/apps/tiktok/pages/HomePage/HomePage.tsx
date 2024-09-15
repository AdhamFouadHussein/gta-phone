import MainLayout from "../../components/mainLayout/MainLayout";
import FeedBar from "../../components/feedBar/FeedBar";
import FloatingActionButton from "../../components/floatingActionButton/FloatingActionButton";
import { getActionBarButtons } from "../../components/floatingActionButton/items";
import "../style.css";
import VideoFeed from "../../components/VideoFeed/VideoFeed";
import useVideoStore from "../../store/videoStore/videoStore";
import { useEffect, useRef } from "react";
import { VideoFeedItem } from "../../store/videoStore/interfaces";
import VideoDescription from "../../components/videoDescription/VideoDescription";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNui } from "../../../../utils/fetchNui";
import { useAuthStore } from "../../store/userStore/userStore";
// Sample initial videos for testing

const initialVideos: VideoFeedItem[] = [
  {
    user: {
      name: "Diaa",
      id: "1",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    statistic: {
      commentsCount: "800",
      isILiked: true,
      likeCounts: "700",
    },
    video: {
      url: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4",
      id: "1",
      title: "",
      keywords: ["#wflove", "#avicii"],
      description: "Avicii - Waiting For Love (ft.",
    },
  },
  {
    user: {
      name: "Sara",
      id: "2",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    statistic: {
      commentsCount: "1500",
      isILiked: false,
      likeCounts: "1200",
    },
    video: {
      url: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
      id: "2",
      title: "",
      keywords: ["#wflove", "#avicii"],
      description: "Avicii - Waiting For Love (ft.",
    },
  },
  {
    user: {
      name: "John",
      id: "3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    statistic: {
      commentsCount: "300",
      isILiked: true,
      likeCounts: "250",
    },
    video: {
      url: "https://videos.pexels.com/video-files/27394041/12133225_1080_1920_30fps.mp4",
      id: "3",
      title: "",
      keywords: ["#wflove", "#avicii"],
      description: "Avicii - Waiting For Love (ft.",
    },
  },
  {
    user: {
      name: "Emily",
      id: "4",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    statistic: {
      commentsCount: "2200",
      isILiked: false,
      likeCounts: "1900",
    },
    video: {
      url: "https://videos.pexels.com/video-files/3755983/3755983-uhd_2732_1440_25fps.mp4",
      id: "4",
      title: "",
      keywords: ["#wflove", "#avicii"],
      description: "Avicii - Waiting For Love (ft.",
    },
  },
  {
    user: {
      name: "Michael",
      id: "5",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    statistic: {
      commentsCount: "1100",
      isILiked: true,
      likeCounts: "1050",
    },
    video: {
      url: "https://videos.pexels.com/video-files/3755687/3755687-uhd_1440_2732_25fps.mp4",
      id: "5",
      title: "",
      keywords: ["#wflove", "#avicii"],
      description: "Avicii - Waiting For Love (ft.",
    },
  },
];

// [
//   {
//     VideoURL:
//       "https://api.telegram.org/file/bot7159569495:AAG4-S4j9bhe8E7sbMaQdTRJp_FzU5B3ukY/documents/file_16.webm",
//     Timestamp: 1726409285000.0,
//     Caption: "dsdsad",
//     likeCount: 0,
//     PostID: 6,
//     UserID: 1,
//     commentCount: 0,
//     user: { Email: "d@gmail.com", Nickname: "omar", UserID: 1 },
//     Location: "Cairo, Egypt",
//   },
// ];

export default function HomePage() {
  const { currentVideoIndex, setVideos, videos } = useVideoStore();
  const feedRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const { user } = useAuthStore();
  const params = useParams<{
    tab: "following" | "forYou";
  }>();
  const selectedTab = params.tab || "forYou";
  useEffect(() => {
    // setVideos(initialVideos);
    window.addEventListener("message", handleNuiMessage);
    fetchNui("TgetAllPosts", {});
    return () => {
      window.removeEventListener("message", handleNuiMessage);
    };
  }, []);

  const handleNuiMessage = (event: MessageEvent) => {
    const { data } = event;
    console.log(data.type);
    console.log(data.payload);
    const videos: any[] = data.payload;
    if (data.type == "T_ALL_POSTS") {
      setVideos(
        videos.map((item) => {
          return {
            user: {
              avatar: "https://randomuser.me/api/portraits/women/2.jpg",
              id: item.UserID,
              name: item.user.Nickname,
            },
            video: {
              description: item.Caption,
              id: item.PostID,
              keywords: [],
              title: "",
              url: item.VideoURL,
            },
            statistic: {
              commentsCount: item.commentCount,
              isILiked: true,
              likeCounts: item.likeCount,
            },
          };
        })
      );
    }
  };

  return (
    <MainLayout ref={feedRef} mode={"dark"} footer styles={{}}>
      <FeedBar selectedTab={selectedTab} />
      <FloatingActionButton
        onUserShow={() => {
          navigator(`/tiktok-profile/${videos[currentVideoIndex]?.user.id}`);
        }}
        onLike={() => {
          fetchNui("TlikePost", {
            UserID: user?.id,
            PostID: videos[currentVideoIndex].video.id,
          });
        }}
        buttons={getActionBarButtons({
          likeCount: videos[currentVideoIndex]?.statistic?.likeCounts,
          messageCount: videos[currentVideoIndex]?.statistic?.commentsCount,
          isLiked: videos[currentVideoIndex]?.statistic?.isILiked,
          userAvatar: videos[currentVideoIndex]?.user?.avatar,
        })}
      />
      <VideoDescription
        video={videos[currentVideoIndex]?.video}
        userName={videos[currentVideoIndex]?.user.name}
      />
      <VideoFeed />
    </MainLayout>
  );
}

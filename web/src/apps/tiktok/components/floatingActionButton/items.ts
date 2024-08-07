import ActionButtonProps from "./actionButton/ActionButtonProps";
import heartIcon from '../../../assets/icons/tiktok/floatingActionButton/Heart Icon.svg'
import shareIcon from '../../../assets/icons/tiktok/floatingActionButton/Share Icon.svg'
import messageIcon from '../../../assets/icons/tiktok/floatingActionButton/Message Icon.svg'
import heartSolidIcon from '../../../assets/icons/tiktok/floatingActionButton/HeartSolidIcon.svg'

export function getActionBarButtons({
                                        likeCount,
                                        messageCount,
                                        isLiked,
                                        userAvatar
                                    }: {
    messageCount: string
    likeCount: string,
    isLiked: boolean,
    userAvatar: string
}): Omit<ActionButtonProps, "onClick">[] {
    return [{
        id: "user",
        label: "",
        iconSrc: userAvatar,
    }, {
        id: "like",
        label: likeCount,
        iconSrc: isLiked ? heartSolidIcon : heartIcon,
    }, {
        id: "message",
        label: messageCount,
        iconSrc: messageIcon,
    }, {
        id: "share",
        label: "Share",
        iconSrc: shareIcon,
    }]
}


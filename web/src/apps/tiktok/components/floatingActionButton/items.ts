import ActionButtonProps from "./actionButton/ActionButtonProps";
import heartIcon from '../../../assets/icons/tiktok/floatingActionButton/Heart Icon.svg'
import shareIcon from '../../../assets/icons/tiktok/floatingActionButton/Share Icon.svg'
import messageIcon from '../../../assets/icons/tiktok/floatingActionButton/Message Icon.svg'

export function getActionBarButtons({
                                        likeCount,
                                        messageCount
                                    }: {
    messageCount: string
    likeCount: string
}): Omit<ActionButtonProps, "onClick">[] {
    return [{
        id: "like",
        label: likeCount,
        iconSrc: heartIcon,
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


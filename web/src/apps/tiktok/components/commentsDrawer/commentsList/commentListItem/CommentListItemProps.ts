export default interface CommentListItemProps {
    user: {
        avatar?: string
        name: string
        comment: string
    }
    loveCount: number
}
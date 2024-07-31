export default interface UserCardProps {
    user: {
        id: string
        name: string
        avatar: string
        stats: {
            following: string
            followers: string
            likes: string
        }
    }
}
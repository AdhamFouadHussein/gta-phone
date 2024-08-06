import UserCardProps from "./UserCardProps";
import bookMarkIcon from '../../../../assets/icons/tiktok/users/Bookmark Icon.svg'
import './style.css'

export default function UserCard({
                                     user: {
                                         name,
                                         stats,
                                         avatar,
                                     }
                                 }: UserCardProps) {
    return (
        <div className={'user-info-card'}>
            <div className={'user-avatar-wrapper'}>
                <img width={96}
                     className={'user-avatar'}
                     height={96}
                     src={avatar}
                     alt={"user-avatar"}/>
                <div className={'user-name'}>{name}</div>
            </div>
            <div className={'user-stats'}>
                <div className={'stats-item'}>
                    <div className={'stats-value'}>
                        {stats.following}
                    </div>

                    <div className={'stats-label'}>
                        Following
                    </div>
                </div>
                <div className={'stats-item'}>
                    <div className={'stats-value'}>
                        {stats.followers}
                    </div>
                    <div className={'stats-label'}>
                        Followers
                    </div>
                </div>
                <div className={'stats-item'}>
                    <div className={'stats-value'}>
                        {stats.likes}
                    </div>
                    <div className={'stats-label'}>
                        Likes
                    </div>
                </div>

            </div>
            <div className={'user-profile-actions'}>
                <div className={'edit-profile-button'}>
                    Edit Profile
                </div>
                <div className={'user-profile-book-mark-icon'}>
                    <img src={bookMarkIcon} alt={"book-mark-icon"}/>
                </div>
            </div>
        </div>
    )
}
import {UserPageHeaderProps} from "./UserPageHeaderProps";
import addAccountIcon from '../../../../assets/icons/tiktok/users/Add Account Icon.svg'
import menuIcon from '../../../../assets/icons/tiktok/users/Menu Icon.svg'
import './style.css'

export default function UserPageHeader({
                                           user: {
                                               userName
                                           }
                                       }: UserPageHeaderProps) {
    return (<div className="user-page-header">
        <img src={addAccountIcon} alt={"add-user-icon"}/>
        <div className={'user-name'}>{userName}</div>
        <img src={menuIcon} alt={"menu-icon"}/>
    </div>)
}
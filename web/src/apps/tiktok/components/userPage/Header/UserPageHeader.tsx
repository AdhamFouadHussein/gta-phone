import { UserPageHeaderProps } from "./UserPageHeaderProps";
import addAccountIcon from "../../../../assets/icons/tiktok/users/Add Account Icon.svg";
import menuIcon from "../../../../assets/icons/tiktok/users/Menu Icon.svg";
import "./style.css";
import { fetchNui } from "../../../../../utils/fetchNui";
import { useAuthStore } from "../../../store/userStore/userStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPageHeader({
  user: { userName, userId },
}: UserPageHeaderProps) {
  const { user, logout } = useAuthStore(); // Assuming you have a logout method in your store
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigator=useNavigate()
  const handleLogout = () => {
    logout(); // Trigger logout
    navigator('/tiktok-login')
  };

  return (
    <div className="user-page-header">
      {user?.id != userId && (
        <img
          onClick={() => {
            // Follows a user
            fetchNui("TfollowUser", {
              FollowerID: userId,
              FollowingID: user?.id,
            });
          }}
          src={addAccountIcon}
          alt={"add-user-icon"}
        />
      )}

      {/* Menu Icon and Dropdown */}
      <div className="dropdown">
        <img
          src={menuIcon}
          alt={"menu-icon"}
          className="menu-icon"
          onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
        />

        {/* Dropdown menu */}
        <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          <button onClick={handleLogout} className="dropdown-item">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

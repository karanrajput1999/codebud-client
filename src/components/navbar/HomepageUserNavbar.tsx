import { Bell, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

function HomepageUserNavbar() {
  return (
    <div className="gap-4 items-center sm:flex hidden">
      <Link to="/users/user" className="flex gap-1">
        <CircleUserRound />
        <span>132</span>
      </Link>
      <button className="flex items-center gap-1">
        <Bell />
        <span>Notifications</span>
      </button>
    </div>
  );
}

export default HomepageUserNavbar;

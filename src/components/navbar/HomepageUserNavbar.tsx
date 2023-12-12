import { Bell, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

function HomepageUserNavbar() {
  return (
    <div className="flex gap-4 items-center">
      <Link to="/users/user" className="flex gap-1">
        <CircleUserRound />
        <span>132</span>
      </Link>
      <button>
        <Bell />
      </button>
    </div>
  );
}

export default HomepageUserNavbar;

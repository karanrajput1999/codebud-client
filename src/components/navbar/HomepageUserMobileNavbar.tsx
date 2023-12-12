import { cn } from "@/lib/utils";
import { Bell, CircleUserRound, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface HomepageUserMobileNavbarTypes {
  mobileLogInMenuOpen: boolean;
  setMobileLogInMenuOpen: (mobileLogInMenuOpen: boolean) => void;
}

function HomepageUserMobileNavbar({
  mobileLogInMenuOpen,
  setMobileLogInMenuOpen,
}: HomepageUserMobileNavbarTypes) {
  return (
    <div className="mobile-login-menu-container relative sm:hidden flex items-center">
      <button onClick={() => setMobileLogInMenuOpen(!mobileLogInMenuOpen)}>
        <MoreVertical />
      </button>

      <div
        className={cn(
          "mobile-login-menu border bg-white border-primarycb flex-col absolute right-0 top-6",
          mobileLogInMenuOpen ? "flex" : "hidden"
        )}
      >
        <Link
          to="/users/user"
          className="text-center font-semibold py-1 border border-b-primarycb p-2"
        >
          <CircleUserRound />
        </Link>
        <button className="p-2">
          <Bell />
        </button>
      </div>
    </div>
  );
}

export default HomepageUserMobileNavbar;
